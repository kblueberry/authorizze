import { ReactNode, createContext, useState } from "react";

type AuthorizationState = {
  userLogin: string;
  password: string;
  authorize: Function;
  isAuthorized: boolean;
};

const initialState: AuthorizationState = {
  userLogin: "",
  password: "",
  authorize: Function,
  isAuthorized: false,
};

export const AuthorizationContext = createContext(initialState);

export const AuthorizationProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [authorizationState, setAuthorizationState] =
    useState<AuthorizationState>(initialState);
  const { userLogin, password, isAuthorized } = authorizationState;

  const authorize = (login: string, password: string) => {
    console.log("login data", login, password);
    sessionStorage.setItem(
      "authorizedUser",
      JSON.stringify({ login, password, userFullName: "Admin Admin" })
    );

    setAuthorizationState((prev) => {
      return { ...prev, isAuthorized: true, userLogin: login, password };
    });
  };

  return (
    <AuthorizationContext.Provider
      value={{ userLogin, password, authorize, isAuthorized }}
    >
      {children}
    </AuthorizationContext.Provider>
  );
};
