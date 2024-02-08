import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useState } from "react";
import "./Login.css";
import Password from "./Password";
import UserName from "./UserName";
import { USERS, ROOT, LOGIN_ERROR } from "./constants";

export default function Login() {
  const [loginCredentials, setLoginCredentials] = useState<{
    username: string;
    password: string;
  }>({
    username: "",
    password: "",
  });
  const [loginError, setLoginError] = useState<boolean>(false);

  const onUsernameChange = (value: string) => {
    setLoginError(false);
    setLoginCredentials((prev) => {
      return { ...prev, username: value };
    });
  };

  const onPasswordChange = (value: string) => {
    setLoginError(false);
    setLoginCredentials((prev) => {
      return { ...prev, password: value };
    });
  };

  const authorize = () => {
    const user = USERS.find(
      (user) =>
        user.username === loginCredentials.username &&
        user.password === loginCredentials.password
    );

    if (user) {
      localStorage.setItem("authorizedUser", JSON.stringify(user));
      window.location.replace(`${ROOT}/user`);
    } else {
      setLoginError(true);
    }
  };

  return (
    <div className="items-flex-column margin-center login-page">
      <h1 className="login-heading">Please, log in!</h1>
      <Box
        component="form"
        className="login-form items-flex-column"
        autoComplete="off"
      >
        <p className="login_hint">
          Please, use <strong>admin:admin</strong> or <strong>user:user</strong>{" "}
          to sign in
        </p>
        <UserName valueChange={(value: string) => onUsernameChange(value)} />
        <Password valueChange={(value: string) => onPasswordChange(value)} />
      </Box>
      {loginError && <strong className="login_error">{LOGIN_ERROR}</strong>}
      <Button
        variant="contained"
        size="large"
        disabled={!loginCredentials.username || !loginCredentials.password}
        onClick={authorize}
      >
        Log in
      </Button>
    </div>
  );
}
