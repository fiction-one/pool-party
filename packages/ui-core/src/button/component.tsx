import React from "react";
import { StyledButton } from "./style";
import { ButtonProps } from "./types";
import { Typography } from "../typography";

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    return (
      <StyledButton {...props} ref={ref}>
        <Typography lineHeight="small" fontWeight="semi">
          {props.children}
        </Typography>
      </StyledButton>
    );
  }
);

Button.displayName = "Button";
