import React from "react";
import styled, { css, DefaultTheme } from "styled-components";
import { pxToRem } from "@f1/ui-utils";
import { ButtonProps } from "./types";

const getHeight = (size: ButtonProps["size"]): string => {
  if (size === "small") {
    return pxToRem(32);
  } else if (size === "regular") {
    return pxToRem(40);
  } else {
    return pxToRem(48);
  }
};

const getPaddingHorizontal = (size: ButtonProps["size"]): string => {
  if (size === "small") {
    return pxToRem(12);
  } else if (size === "regular") {
    return pxToRem(16);
  } else {
    return pxToRem(20);
  }
};

const getFontSize = (size: ButtonProps["size"]): string => {
  if (size === "small") {
    return pxToRem(12);
  } else if (size === "regular") {
    return pxToRem(14);
  } else {
    return pxToRem(18);
  }
};

const getThemeable = (
  theme: DefaultTheme,
  variant: keyof DefaultTheme["button"]
) => {
  const buttonTheme = theme.button[variant];
  return css`
    background-color: ${buttonTheme.default["background-color"]};
    color: ${buttonTheme.default["color"]};
    border-color: ${buttonTheme.default["border-color"]};

    :hover {
      background-color: ${buttonTheme.hover["background-color"]};
      color: ${buttonTheme.hover["color"]};
      border-color: ${buttonTheme.hover["border-color"]};
    }

    :focus-visible {
      background-color: ${buttonTheme.active["background-color"]};
      color: ${buttonTheme.active["color"]};
      border-color: ${buttonTheme.active["border-color"]};
    }

    :disabled {
      background-color: ${buttonTheme.disabled["background-color"]};
      color: ${buttonTheme.disabled["color"]};
      border-color: ${buttonTheme.disabled["border-color"]};
    }
  `;
};

const DEFAULT_VARIANT: ButtonProps["variant"] = "primary";

const DEFAULT_SIZE: ButtonProps["size"] = "regular";

export const StyledButton = styled.button<ButtonProps>`
  ${({ size }) => css`
    display: inline-flex;
    align-items: center;

    padding: 0 ${getPaddingHorizontal(size ?? DEFAULT_SIZE)};
    height: ${getHeight(size ?? DEFAULT_SIZE)};
    font-size: ${getFontSize(size ?? DEFAULT_SIZE)};

    border-style: solid;
    border-width: 1px;
    border-radius: ${pxToRem(8)};

    cursor: pointer;

    transition: 0.3s;

    &:focus {
      outline: none;
    }

    &:disabled {
      cursor: default;
    }
  `}

  ${({ theme, variant }) => getThemeable(theme, variant ?? DEFAULT_VARIANT)}
`;
