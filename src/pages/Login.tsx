import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import ButtonComponent from "../component/ButtonComponent";
import InputComponent from "../component/InputComponent";
import TextComponent from "../component/TextComponent";

interface Props {
  onClick: (user: string, password: string) => void;
}

const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const classes = useStyles();


  return (
    <div className={classes.container}>
      <TextComponent title={"Sign in"} />
      <div className={classes.fields}>
        <InputComponent
          typeVariant={"login"}
          value={user}
          placeholder={"User"}
          onChange={(
            event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
          ) => setUser(event.target.value)}
        />
        <InputComponent
          type={"password"}
          placeholder={"Password"}
          value={password}
          onChange={(
            event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
          ) => setPassword(event.target.value)}
          typeVariant={"login"}
        />
      </div>
      <ButtonComponent
          style={{maxWidth:350}} 
          label={"Login"}
          fullWidth={true}
          typeVariant={"primary"}
          onClick={() => { console.log(`This will be implement by Omar`) }}
        />
    </div>
  );
};
const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    alignItems: "center"
  },
  fields: {
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    fontSize: 54,
    color: "white",
    textAlign: "center"
  },
  error: {
    color: "red",
    textAlign: "center",
    fontSize: 14
  },
  center: { textAlign: "center" }
});

export default Login;


