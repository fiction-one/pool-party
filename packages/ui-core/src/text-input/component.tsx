import React from "react";
import { StyledTextInput, StyledTextInputFrame } from "./style";
import { TextInputProps } from "./types";

export const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  (props, ref) => {
    return (
      <StyledTextInputFrame>
        <StyledTextInput {...props} ref={ref} />
      </StyledTextInputFrame>
    );
  }
);

TextInput.displayName = "TextInput";
