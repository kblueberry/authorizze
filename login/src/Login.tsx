import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useContext, useState } from "react";
import UserName from "./UserName";
import "./Login.css";
import Password from "./Password";
import { AuthorizationContext } from "./AuthorizationContext";

export default function Login() {
  const [loginCredentials, setLoginCredentials] = useState({
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

  const logIn = () => {
    authorize(loginCredentials.login, loginCredentials.password);
    console.log("authorize!");
  };

  return (
    <div className="items-flex-column margin-center login-page">
      <h1 className="login-heading">Please, log in!</h1>
      <Box
        component="form"
        className="login-form items-flex-column"
        autoComplete="off"
      >
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
        onClick={logIn}
      >
        Log in
      </Button>
    </div>
  );
}
