import React from "react";
import {
  useTable,
  useFlexLayout,
  usePagination,
  PluginHook,
  TableInstance,
  UsePaginationOptions,
  UsePaginationInstanceProps,
  Row,
  UseTableInstanceProps,
  TableState,
  UsePaginationState,
} from "react-table";
import {
  Frame,
  TableFrame,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableHeaderRow,
  TableRow,
  FooterFrame,
  FooterGroup,
} from "./components";
import { TableProps } from "./types";
import { Button, Typography } from "@f1/ui-core";

interface CombinedState<T extends Record<string, unknown>>
  extends TableState<T>,
    Partial<UsePaginationState<T>> {}

interface CombinedInstance<T extends Record<string, unknown>>
  extends UseTableInstanceProps<T>,
    Partial<UsePaginationInstanceProps<T>> {
  state: CombinedState<T>;
}

const PaginationControls = <T extends Record<string, unknown>>({
  instance,
}: {
  instance: CombinedInstance<T>;
}) => {
  const {
    pageCount,
    canPreviousPage,
    canNextPage,
    previousPage,
    nextPage,
    state: { pageIndex },
  } = instance;

  return (
    <FooterFrame>
      <FooterGroup>
        <Typography>
          Page {pageIndex! + 1} of {pageCount}
        </Typography>
      </FooterGroup>
      <FooterGroup style={{ justifyContent: "flex-end" }}>
        <Button
          variant="secondary"
          disabled={!canPreviousPage}
          onClick={previousPage}
        >
          Previous
        </Button>
        <Button variant="secondary" disabled={!canNextPage} onClick={nextPage}>
          Next
        </Button>
      </FooterGroup>
    </FooterFrame>
  );
};

export const DataTable = <T extends Record<string, unknown>>({
  // for pagination
  fetchData,
  loading,
  // pagination props
  pagination,
  // table options
  initialState,
  ...tableOptions
}: TableProps<T>) => {
  const pluginHooks: PluginHook<T>[] = [useFlexLayout, usePagination];

  const instance: CombinedInstance<T> = useTable<T>(
    {
      ...tableOptions,
      ...pagination?.props,
      initialState: {
        ...initialState,
        ...pagination?.initialState,
      },
    },
    ...pluginHooks
  );

  const {
    // element prop getters
    getTableProps,
    getTableBodyProps,
    // header
    headerGroups,
    prepareRow,
    rows,
    state,
  } = instance;

  const currentPageIndex = state.pageIndex;
  const pageSize = state.pageSize;
  const fetchingPageIndex = React.useRef(currentPageIndex);
  const paginationEnabled = fetchData && pagination;

  React.useEffect(() => {
    if (paginationEnabled && fetchingPageIndex.current !== currentPageIndex) {
      fetchData(currentPageIndex!, pageSize!);
      fetchingPageIndex.current = currentPageIndex;
    }
  }, [currentPageIndex, fetchData, pageSize, paginationEnabled]);

  return (
    <Frame>
      <TableFrame>
        <Table {...getTableProps()}>
          <TableHeader>
            {headerGroups.map((headerGroup) => (
              <TableHeaderRow
                {...headerGroup.getHeaderGroupProps()}
                key={headerGroup.getHeaderGroupProps().key}
              >
                {headerGroup.headers.map((column) => (
                  <TableHeaderCell
                    {...column.getHeaderProps()}
                    key={column.getHeaderProps().key}
                  >
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
                <TableRow {...row.getRowProps()} key={row.getRowProps().key}>
                  {row.cells.map((cell, i) => (
                    <TableCell
                      {...cell.getCellProps()}
                      key={cell.getCellProps().key}
                    >
                      {cell.render("Cell")}
                    </TableCell>
                  ))}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableFrame>
      {paginationEnabled && <PaginationControls<T> instance={instance} />}
    </Frame>
  );
};
