import { ReactNode, createContext, useEffect, useState } from "react";
import { ROOT } from "./constants";
import { UserInfo } from "./userInfo";

export const UserContext = createContext<UserInfo>({
  username: "",
  fullName: "",
});

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [userInfo, setUserInfo] = useState<UserInfo | undefined>(undefined);

  useEffect(() => {
    if (userInfo) {
      return;
    }

    const authorizedUser = localStorage.getItem("authorizedUser");
    if (authorizedUser) {
      setUserInfo(JSON.parse(authorizedUser));
    } else {
      window.location.replace(`${ROOT}/login`);
    }
  }, [userInfo]);

  if (!userInfo) {
    return null;
  }

  return (
    <UserContext.Provider value={userInfo}>{children}</UserContext.Provider>
  );
};
