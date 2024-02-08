import { useContext } from "react";
import { UserContext } from "./UserContext";

export default function User() {
  const userInfo = useContext(UserContext);

  return (
    <>
      <h1>Welcome, user!</h1>
      <p>
        <i>Username:</i> {userInfo.username}
      </p>
      <p>
        <i>Full name:</i> {userInfo.fullName}
      </p>
    </>
  );
}
