import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import Text from "../components/Text";
import { userSignIn, isValidUser } from "../services/Auth";
import { useHistory } from "react-router-dom";

interface Props {
  onClick: (user: string, password: string) => void;
  history: any;
}

const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const classes = useStyles();
  let history = useHistory();

  const handleLogin = () => {
    const isValid = isValidUser(user, password);

    if (isValid) {
      userSignIn();
      history.push("/dashboard");
    } else alert('usuario o clave incorrecto')
  }


  return (
    <div className={classes.container}>
      <Text title={"Sign in"} />
      <div className={classes.fields}>
        <Input
          style={{ paddingBottom: "4px" }}
          typeVariant={"login"}
          value={user}
          placeholder={"User"}
          onChange={(
            event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
          ) => setUser(event.target.value)}
        />
        <Input
          type={"password"}
          placeholder={"Password"}
          value={password}
          onChange={(
            event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
          ) => setPassword(event.target.value)}
          typeVariant={"login"}
        />

      </div>
      <Button
        style={{ minWidth: 390, marginTop: "4px" }}
        label={"Login"}
        fullWidth={false}
        typeVariant={"primary"}
        onClick={() => handleLogin()}
      />

    </div>
  );
};
const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    alignItems: "center",
    minHeight: "100vh",
    justifyContent: "center"
  },
  fields: {
    minWidth: 390,
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    fontSize: 54,
    color: "white"
  },
  error: {
    color: "red",
    textAlign: "center",
    fontSize: 14
  },
  center: { textAlign: "center" }
});

export default Login;
