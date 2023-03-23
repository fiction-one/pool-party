import React from "react";
import { StyledLayer } from "./style";
import { LayerProps } from "./types";

export const Layer = React.forwardRef<HTMLElement, LayerProps>((props, ref) => {
  return (
    <StyledLayer {...props} ref={ref}>
      {props.children}
    </StyledLayer>
  );
});

Layer.displayName = "Layer";
