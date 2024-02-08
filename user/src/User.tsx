import { useEffect, useState } from "react";
import { UserInfo } from "./userInfo";

export default function User() {
  const [userInfo, setUserInfo] = useState<UserInfo>({
    login: "",
    password: "",
    userFullName: "",
  });

  useEffect(() => {
    const userInfo = localStorage.getItem("authorizedUser");
    if (userInfo) {
      setUserInfo(JSON.parse(userInfo));
    }
  }, []);

  console.log("user authorized: ", userInfo);

  return (
    <>
      <h1>Welcome, user!</h1>
      <p>
        <i>Login:</i> {userInfo.login}
      </p>
      <p>
        <i>Password:</i> {userInfo.password}
      </p>
      <p>
        <i>Full name:</i> {userInfo.userFullName}
      </p>
    </>
  );
}
