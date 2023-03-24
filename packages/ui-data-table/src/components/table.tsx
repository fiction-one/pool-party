import styled from "styled-components";
import { pxToRem } from "@f1/ui-utils";

export const StyledTable = styled.table`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  height: 100%;
  border-spacing: 0;
`;

// overflow styling for scrollable body that aligns with header
export const StyledTableHeader = styled.thead`
  flex-shrink: 0;
  overflow-y: scroll;
  overflow-x: hidden;
  position: sticky;
  top: 0;
  z-index: 1;
`;

export const StyledTableHeaderRow = styled.tr`
  background-color: ${({ theme }) =>
    theme.surface.highlight.default["background-color"]};

  :last-of-type {
    border-bottom-width: ${pxToRem(1)};
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) =>
      theme.surface.highlight.default["border-color"]};
  }

  :first-of-type {
    border-top-left-radius: ${pxToRem(8)};
    border-top-right-radius: ${pxToRem(8)};
  }
`;

export const StyledTableHeaderCell = styled.th`
  font-size: ${pxToRem(14)};
  font-weight: 600;
  padding: ${pxToRem(16)} ${pxToRem(24)};
  color: ${({ theme }) => theme.text.secondary.default.color};
  text-align: left;
  vertical-align: inherit;
  position: relative;
  white-space: nowrap;
`;

export const StyledTableBody = styled.tbody`
  overflow-y: scroll;
  overflow-x: hidden;
`;

export const StyledTableRow = styled.tr`
  vertical-align: middle;
  background-color: ${({ theme }) =>
    theme.surface.surface.default["background-color"]};

  :not(:last-of-type) {
    border-bottom-width: ${pxToRem(1)};
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) =>
      theme.surface.surface.default["border-color"]};
  }

  :last-of-type {
    border-bottom-left-radius: ${pxToRem(8)};
    border-bottom-right-radius: ${pxToRem(8)};
  }
`;

export const StyledTableCell = styled.td`
  font-size: ${pxToRem(14)};
  font-weight: 600;
  padding: ${pxToRem(16)} ${pxToRem(24)};
  color: ${({ theme }) => theme.text.primary.default.color};
  text-align: left;
  position: relative;
`;
