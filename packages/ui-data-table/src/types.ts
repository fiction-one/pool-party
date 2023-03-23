import { Column } from "react-table";

export interface TableProps<T extends Record<string, unknown>> {
  columns: Column<T>[];
  data: T[];
  fetchData?: (pageIndex: number, pageSize: number) => void;
  loading?: boolean;
  totalCount?: number;
  pageCount?: number;
}
