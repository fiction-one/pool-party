import React from "react";
import styled, { css, DefaultTheme } from "styled-components";
import { pxToRem } from "@f1/ui-utils";
import { ChipProps } from "./types";

const getHeight = (size: ChipProps["size"]): string => {
  if (size === "small") {
    return pxToRem(18);
  } else {
    return pxToRem(24);
  }
};

const getPaddingHorizontal = (size: ChipProps["size"]): string => {
  if (size === "small") {
    return pxToRem(12);
  } else {
    return pxToRem(12);
  }
};

const getFontSize = (size: ChipProps["size"]): string => {
  if (size === "small") {
    return pxToRem(12);
  } else {
    return pxToRem(14);
  }
};

const getThemeable = (
  theme: DefaultTheme,
  variant: keyof DefaultTheme["chip"]
) => {
  const buttonTheme = theme.chip[variant];
  return css`
    background-color: ${buttonTheme.default["background-color"]};
    color: ${buttonTheme.default["color"]};
    border-color: ${buttonTheme.default["border-color"]};
  `;
};

const DEFAULT_VARIANT: ChipProps["variant"] = "info";

const DEFAULT_SIZE: ChipProps["size"] = "regular";

export const StyledChip = styled.div<ChipProps>`
  ${({ size }) => css`
    display: inline-flex;
    align-items: center;

    padding: 0 ${getPaddingHorizontal(size ?? DEFAULT_SIZE)};
    height: ${getHeight(size ?? DEFAULT_SIZE)};
    font-size: ${getFontSize(size ?? DEFAULT_SIZE)};

    border-style: solid;
    border-width: 1px;
    border-radius: ${getHeight(size ?? DEFAULT_SIZE)};

    transition: 150ms;
  `}

  ${({ theme, variant }) => getThemeable(theme, variant ?? DEFAULT_VARIANT)}
`;
