import React from "react";
import styled, { css, DefaultTheme } from "styled-components";
import { LayerProps } from "./types";
import { LayerVariant } from "@f1/ui-theme";

const getThemeable = (theme: DefaultTheme, variant: LayerVariant) => {
  const layerTheme = theme.layer[variant];
  return css`
    background-color: ${layerTheme.default["background-color"]};
    border-color: ${layerTheme.default["border-color"]};
  `;
};

export const StyledLayer = styled.div<LayerProps>`
  ${({ theme, variant }) => getThemeable(theme, variant)}
`;
