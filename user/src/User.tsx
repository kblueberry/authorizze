import { useContext, useEffect, useState } from "react";
import { UserInfo } from "./userInfo";
import { ROOT } from "./constants";
import { UserContext } from "./UserContext";

export default function User() {
  const { userDetails, checkIfAuthorized } = useContext(UserContext);

  useEffect(() => {
    checkIfAuthorized();
  }, []);

  return (
    <>
      <h1>Welcome, user!</h1>
      <p>
        <i>Login:</i> {userDetails.login}
      </p>
      <p>
        <i>Full name:</i> {userDetails.userFullName}
      </p>
    </>
  );
}
