import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useContext, useState } from "react";
import { AuthorizationContext } from "./AuthorizationContext";
import "./Login.css";
import Password from "./Password";
import UserName from "./UserName";

export default function Login() {
  const [loginCredentials, setLoginCredentials] = useState<{
    login: string;
    password: string;
  }>({
    login: "",
    password: "",
  });

  const { authorize } = useContext(AuthorizationContext);
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

  return (
    <div className="items-flex-column margin-center login-page">
      <h1 className="login-heading">Please, log in!</h1>
      <Box
        component="form"
        className="login-form items-flex-column"
        autoComplete="off"
      >
        <p className="login_hint">
          Please, use login "admin_admin" and password "admin123" to sign in
        </p>
        <UserName
          login={loginCredentials.login}
          valueChange={(value: string) => onEmailChange(value)}
        />
        <Password
          password={loginCredentials.password}
          valueChange={(value: string) => onPasswordChange(value)}
        />
      </Box>
      <Button
        variant="contained"
        size="large"
        disabled={!loginCredentials.login || !loginCredentials.password}
        onClick={() =>
          authorize(loginCredentials.login, loginCredentials.password)
        }
      >
        Log in
      </Button>
    </div>
  );
}
