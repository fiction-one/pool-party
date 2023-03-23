import React from "react";
import styled, { css, DefaultTheme } from "styled-components";
import { pxToRem } from "@f1/ui-utils";
import { InputVariant } from "@f1/ui-theme/src/themes/types";
import { TextInputProps } from "./types";

export const StyledTextInput = styled.input<TextInputProps>`
  background-color: transparent;
  border: none;
  padding: 0 ${pxToRem(16)};
  font-size: ${pxToRem(16)};
  color: inherit;
  width: 100%;
  height: 100%;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${({ theme }) => theme.text.secondary.default.color};
  }
`;

const DEFAULT_VARIANT: InputVariant = "primary";

const getThemeable = (theme: DefaultTheme, variant: InputVariant) => {
  const inputTheme = theme.input[variant];
  return css`
    background-color: ${inputTheme.default["background-color"]};
    color: ${inputTheme.default["color"]};
    border-color: ${inputTheme.default["border-color"]};

    :focus-visible {
      background-color: ${inputTheme.active["background-color"]};
      color: ${inputTheme.active["color"]};
      border-color: ${inputTheme.active["border-color"]};
    }
  `;
};

export const StyledTextInputFrame = styled.div<Pick<TextInputProps, "variant">>`
  display: inline-flex;

  height: ${pxToRem(50)};
  width: 100%;

  border-style: solid;
  border-width: ${pxToRem(1)};
  border-radius: 100vh;

  ${({ theme, variant }) => getThemeable(theme, variant ?? DEFAULT_VARIANT)}
`;
