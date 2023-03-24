import {
  TableOptions,
  TableState,
  UsePaginationOptions,
  UsePaginationState,
} from "react-table";

export interface TableProps<T extends Record<string, unknown>>
  extends TableOptions<T> {
  loading?: boolean;
  fetchData?: (pageIndex: number, pageSize: number) => void;
  initialState?: Partial<TableState<T>>;
  pagination?: {
    props: UsePaginationOptions<T>;
    initialState: UsePaginationState<T>;
    extra: {
      totalCount: number;
    };
  };
}
