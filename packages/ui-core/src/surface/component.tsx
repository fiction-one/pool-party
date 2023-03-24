import React from "react";
import { StyledSurface } from "./style";
import { SurfaceProps } from "./types";

export const Surface = React.forwardRef<HTMLElement, SurfaceProps>(
  (props, ref) => {
    return (
      <StyledSurface {...props} ref={ref}>
        {props.children}
      </StyledSurface>
    );
  }
);

Surface.displayName = "Surface";
