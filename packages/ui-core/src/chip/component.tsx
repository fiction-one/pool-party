import React from "react";
import { StyledChip } from "./style";
import { ChipProps } from "./types";
import { Typography } from "../typography";

export const Chip = React.forwardRef<HTMLDivElement, ChipProps>(
  (props, ref) => {
    return (
      <StyledChip {...props} ref={ref}>
        <Typography lineHeight="small" fontWeight="semi">
          {props.children}
        </Typography>
      </StyledChip>
    );
  }
);

Chip.displayName = "Chip";
