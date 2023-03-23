import React from "react";
import { useTable } from "react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableHeaderRow,
  TableRow,
} from "@f1/ui-core/src";
import { TableProps } from "./types";

export const DataTable = <T extends Record<string, unknown>>(
  props: TableProps<T>
) => {
  const { getTableProps, getTableBodyProps, headerGroups, prepareRow, rows } =
    useTable<T>({
      columns: props.columns,
      data: props.data,
    });

  return (
    <Table {...getTableProps()}>
      <TableHeader>
        {headerGroups.map((headerGroup, i) => (
          <TableHeaderRow {...headerGroup.getHeaderGroupProps()} key={i}>
            {headerGroup.headers.map((column, i) => (
              <TableHeaderCell {...column.getHeaderProps()} key={i}>
                {column.render("Header")}
              </TableHeaderCell>
            ))}
          </TableHeaderRow>
        ))}
      </TableHeader>
      <TableBody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <TableRow {...row.getRowProps()} key={i}>
              {row.cells.map((cell, i) => (
                <TableCell {...cell.getCellProps()} key={i}>
                  {cell.render("Cell")}
                </TableCell>
              ))}
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};
