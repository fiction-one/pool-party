import {
  Column,
  TableOptions,
  TableState,
  UsePaginationOptions,
  UsePaginationState,
  UseSortByColumnOptions,
  UseSortByOptions,
  UseSortByState,
} from "react-table";

export interface TableProps<T extends Record<string, unknown>>
  extends TableOptions<T> {
  columns: (Column<T> & UseSortByColumnOptions<T>)[];
  loading?: boolean;
  fetchData?: (pageIndex: number, pageSize: number) => void;
  initialState?: Partial<TableState<T>>;
  sorting?: {
    props: UseSortByOptions<T>;
    initialState: UseSortByState<T>;
  };
  pagination?: {
    props: UsePaginationOptions<T>;
    initialState: UsePaginationState<T>;
    extra: {
      totalCount: number;
    };
  };
}
