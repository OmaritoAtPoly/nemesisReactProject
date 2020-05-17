import { makeStyles } from "@material-ui/core/styles";
import TextField, { TextFieldProps } from "@material-ui/core/TextField";
import React, { useMemo } from "react";

export type InputType = "login" | "primary" | "secondary";

type Props = {
  typeVariant: InputType;
  error?: string;
  classNameContainer?: string;
} & GDInputProps;

export type GDInputProps = Omit<TextFieldProps, "error">;

export const InputComponent: React.FC<Props> = ({
  typeVariant,
  required = false,
  error,
  classNameContainer,
  onChange,
  value,
  ...rest
}) => {
  const classes = useStyles();
  const variant = useMemo(
    () =>
      ({ login: "outlined", primary: "standard", secondary: "filled" }[
        typeVariant
      ] as any),
    [typeVariant]
  );
  return (
    <TextField
      error={error ? true : false}
      {...rest} variant={variant}
      onChange={onChange}
      value={value} />
  );
};

const useStyles = makeStyles(theme => ({
  error: {
    color: theme.palette.error.main,
    width: "100%",
    textAlign: "left"
  }
}));
export default InputComponent;