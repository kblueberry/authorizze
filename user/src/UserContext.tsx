import { ReactNode, createContext, useState } from "react";
import { ROOT } from "./constants";
import { UserInfo } from "./userInfo";

interface UserState {
  userDetails: UserInfo;
  checkIfAuthorized: Function;
}

export const UserContext = createContext<UserState>({
  userDetails: {
    login: "",
    userFullName: "",
  },
  checkIfAuthorized: () => {},
});

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [userInfo, setUserInfo] = useState<UserState>({
    userDetails: {
      login: "",
      userFullName: "",
    },
    checkIfAuthorized: () => {},
  });

  const checkIfAuthorized = () => {
    const userInfo = localStorage.getItem("authorizedUser");
    if (userInfo) {
      setUserInfo(JSON.parse(userInfo));
    } else {
      window.location.href = `${ROOT}/login`;
    }
  };

  return (
    <UserContext.Provider
      value={{ userDetails: userInfo.userDetails, checkIfAuthorized }}
    >
      {children}
    </UserContext.Provider>
  );
};
