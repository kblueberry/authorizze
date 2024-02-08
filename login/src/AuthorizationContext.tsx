import { ReactNode, createContext, useState } from "react";

type AuthorizationState = {
  userLogin: string;
  password: string;
  authorize: Function;
};

const initialState: AuthorizationState = {
  userLogin: "",
  password: "",
  authorize: Function,
};

export const AuthorizationContext = createContext(initialState);

export const AuthorizationProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [authorizationState, setAuthorizationState] =
    useState<AuthorizationState>(initialState);
  const { userLogin, password } = authorizationState;

  const authorize = (login: string, password: string) => {
    console.log("login data", login, password);
    localStorage.setItem(
      "authorizedUser",
      JSON.stringify({ login, password, userFullName: "Admin Admin" })
    );

    setAuthorizationState((prev) => {
      return { ...prev, userLogin: login, password };
    });
  };

  return (
    <AuthorizationContext.Provider value={{ userLogin, password, authorize }}>
      {children}
    </AuthorizationContext.Provider>
  );
};
