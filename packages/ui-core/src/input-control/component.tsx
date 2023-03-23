import React from "react";
import { InputControlProps } from "./types";
import { StyledFrame, StyledHelpText, StyledLabel } from "./style";

export const InputControl: React.FC<InputControlProps> = (props) => {
  return (
    <StyledFrame fullWidth={props.fullWidth}>
      {props.label && <StyledLabel>{props.label}</StyledLabel>}
      {props.children}
      {props.helpText && <StyledHelpText>{props.helpText}</StyledHelpText>}
    </StyledFrame>
  );
};

InputControl.displayName = "InputControl";
