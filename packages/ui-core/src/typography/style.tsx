import React from "react";
import styled, { css } from "styled-components";
import { TypographyProps } from "./types";
import { pxToRem } from "@f1/ui-utils/src";

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

export const StyledTypography = styled.span<TypographyProps>`
  ${({ lineHeight, fontSize, fontWeight }) => css`
    line-height: ${getLineHeight(lineHeight)};
    font-size: ${fontSize ? pxToRem(fontSize) : "inherit"};
    font-weight: ${fontWeight ? getFontWeight(fontWeight) : "initial"};
  `}
`;
