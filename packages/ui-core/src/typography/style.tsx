import React from "react";
import styled, { css, DefaultTheme } from "styled-components";
import { pxToRem } from "@f1/ui-utils";
import { TextVariant } from "@f1/ui-theme";
import { TypographyProps } from "./types";

const getLineHeight = (size: TypographyProps["lineHeight"]) => {
  if (size === "small") {
    return "1.5";
  }
  return "1.8";
};

const getFontWeight = (weight: TypographyProps["fontWeight"]) => {
  if (weight === "light") {
    return "300";
  } else if (weight === "semi") {
    return "500";
  } else if (weight === "bold") {
    return "600";
  } else {
    return "400";
  }
};

const getLetterSpacing = (size: TypographyProps["letterSpacing"]) => {
  if (size === "wide") {
    return "0.2em";
  }
  return "initial";
};

const getThemeable = (theme: DefaultTheme, variant: TextVariant) => {
  const textTheme = theme.text[variant];
  return css`
    color: ${textTheme.default["color"]};
  `;
};

export const StyledTypography = styled.span<TypographyProps>`
  ${({ lineHeight }) => css`
    line-height: ${getLineHeight(lineHeight)};
  `}
  ${({ fontSize }) =>
    fontSize &&
    css`
      font-size: ${pxToRem(fontSize)};
    `}
  ${({ fontWeight }) =>
    fontWeight &&
    css`
      font-weight: ${getFontWeight(fontWeight)};
    `}
  ${({ letterSpacing }) =>
    letterSpacing &&
    css`
      letter-spacing: ${getLetterSpacing(letterSpacing)};
    `}
  
  ${({ theme, variant }) => variant && getThemeable(theme, variant)}
`;
