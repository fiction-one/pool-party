import styled from "styled-components";
import { pxToRem } from "@f1/ui-utils";

export const StyledTable = styled.table`
  width: 100%;
  border-spacing: ${pxToRem(1)};
  border-radius: ${pxToRem(4)};
`;

export const StyledTableHeaderRow = styled.tr`
  background-color: ${({ theme }) =>
    theme.layer.highlight.default["background-color"]};
  border-bottom-width: ${pxToRem(1)};
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) =>
    theme.layer.highlight.default["border-color"]};
`;

export const StyledTableHeaderCell = styled.th`
  font-size: ${pxToRem(14)};
  font-weight: 600;
  padding: ${pxToRem(16)} ${pxToRem(24)};
  color: ${({ theme }) => theme.text.secondary.default.color};
  text-align: left;
  vertical-align: inherit;
`;

export const StyledTableHeader = styled.thead`
  ${StyledTableHeaderRow}:first-of-type ${StyledTableHeaderCell}:first-child {
    border-top-left-radius: ${pxToRem(8)};
  }

  ${StyledTableHeaderRow}:first-of-type ${StyledTableHeaderCell}:last-child {
    border-top-right-radius: ${pxToRem(8)};
  }
`;

export const StyledTableRow = styled.tr`
  vertical-align: middle;
  background-color: ${({ theme }) =>
    theme.layer.surface.default["background-color"]};
  border-bottom-width: ${pxToRem(1)};
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) =>
    theme.layer.surface.default["border-color"]};
`;

export const StyledTableCell = styled.td`
  font-size: ${pxToRem(14)};
  font-weight: 600;
  padding: ${pxToRem(16)} ${pxToRem(24)};
  color: ${({ theme }) => theme.text.primary.default.color};
  text-align: left;
`;

export const StyledTableBody = styled.tbody`
  ${StyledTableRow}:last-of-type ${StyledTableCell}:first-child {
    border-bottom-left-radius: ${pxToRem(8)};
  }

  ${StyledTableRow}:last-of-type ${StyledTableCell}:last-child {
    border-bottom-right-radius: ${pxToRem(8)};
  }
`;
