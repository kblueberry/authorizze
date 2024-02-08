import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useState } from "react";
import "./Login.css";
import Password from "./Password";
import UserName from "./UserName";
import {
  ADMIN_FULL_NAME,
  ADMIN_PASS,
  ADMIN_USER_NAME,
  ROOT,
} from "./constants";

export default function Login() {
  const [loginCredentials, setLoginCredentials] = useState<{
    login: string;
    password: string;
  }>({
    login: "",
    password: "",
  });
  /**
   * Event handler for email input change
   */
  const onEmailChange = (value: string) => {
    setLoginCredentials((prev) => {
      return { ...prev, login: value };
    });
  };

  /**
   * Event handler for password input change
   */
  const onPasswordChange = (value: string) => {
    setLoginCredentials((prev) => {
      return { ...prev, password: value };
    });
  };

  const authorize = () => {
    if (
      loginCredentials.login === ADMIN_USER_NAME &&
      loginCredentials.password === ADMIN_PASS
    ) {
      localStorage.setItem(
        "authorizedUser",
        JSON.stringify({
          login: loginCredentials.login,
          userFullName: ADMIN_FULL_NAME,
        })
      );
      window.location.href = `${ROOT}/user`;
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
          Please, use login &apos;admin&apos; and password &apos;admin123&apos;
          to sign in
        </p>
        <UserName valueChange={(value: string) => onEmailChange(value)} />
        <Password valueChange={(value: string) => onPasswordChange(value)} />
      </Box>
      <Button
        variant="contained"
        size="large"
        disabled={!loginCredentials.login || !loginCredentials.password}
        onClick={authorize}
      >
        Log in
      </Button>
    </div>
  );
}
