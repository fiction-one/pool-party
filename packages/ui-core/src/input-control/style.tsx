import styled, { css } from "styled-components";
import { pxToRem } from "@f1/ui-utils";
import { InputControlProps } from "./types";

export const StyledFrame = styled.div<Pick<InputControlProps, "fullWidth">>`
  display: inline-flex;
  flex-direction: column;
  gap: ${pxToRem(8)};

  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `}
`;

export const StyledLabel = styled.label`
  font-size: ${pxToRem(14)};

  ${({ theme }) => css`
    color: ${theme.text.secondary.default["color"]};
  `}
`;

export const StyledHelpText = styled.label`
  font-size: ${pxToRem(14)};

  ${({ theme }) => css`
    color: ${theme.text.caption.default["color"]};
  `}
`;
