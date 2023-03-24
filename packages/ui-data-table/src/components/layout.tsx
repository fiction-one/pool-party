import styled from "styled-components";
import { pxToRem } from "@f1/ui-utils";

export const StyledFrame = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const StyledTableFrame = styled.div`
  display: flex;
  min-height: 0;
  overflow-x: auto;
`;

export const StyledFooterFrame = styled.div`
  padding: ${pxToRem(16)};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledFooterGroup = styled.div`
  display: flex;
  flex: 1 1 auto;

  & > * {
    margin: 0 ${pxToRem(4)};
  }
`;
