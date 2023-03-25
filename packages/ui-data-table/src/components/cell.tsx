import React from "react";
import { CellProps } from "react-table";
import { Chip } from "@f1/ui-core";

export const ChipCellRenderer = <T extends Record<string, unknown>>(
  props: CellProps<T>
) => {
  const { cell } = props;

  return (
    <Chip size="small" variant={cell.value.variant}>
      {cell.value.value}
    </Chip>
  );
};
