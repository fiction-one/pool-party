import * as React from "react";
import styled from "styled-components";
import { FloatingPortal, useMergeRefs } from "@floating-ui/react";
import { Layer } from "@f1/ui-core";
import { pxToRem } from "@f1/ui-utils";
import { useLayer } from "./floating-provider";

export const Trigger = React.forwardRef<
  HTMLElement,
  React.HTMLProps<HTMLElement>
>(function Trigger({ children, ...props }, propRef) {
  const context = useLayer();
  const childrenRef = (children as any).ref;
  const ref = useMergeRefs([context.refs.setReference, propRef, childrenRef]);

  if (React.isValidElement(children)) {
    return React.cloneElement(
      children,
      context.getReferenceProps({
        ref,
        ...props,
        ...children.props,
        "data-active": context.open,
      })
    );
  } else {
    throw new Error("Trigger must be a valid element");
  }
});

export const ContentPortal = React.forwardRef<
  HTMLDivElement,
  React.HTMLProps<HTMLDivElement>
>(function Content(props, propRef) {
  const context = useLayer();
  const ref = useMergeRefs([context.refs.setFloating, propRef]);

  return (
    <FloatingPortal>
      {context.open && (
        <div
          ref={ref}
          style={{
            position: context.strategy,
            top: context.y ?? 0,
            left: context.x ?? 0,
            visibility: context.x === null ? "hidden" : "visible",
            ...props.style,
          }}
          {...context.getFloatingProps(props)}
        />
      )}
    </FloatingPortal>
  );
});

export const TooltipLayer = styled(Layer).attrs({ variant: "floating" })`
  border-radius: ${pxToRem(4)};
  padding: ${pxToRem(4)} ${pxToRem(8)};
  color: ${({ theme }) => theme.text.primary.default.color};
`;

export const PopoverLayer = styled(Layer).attrs({ variant: "floating" })`
  border-radius: ${pxToRem(4)};
  padding: ${pxToRem(4)} ${pxToRem(8)};
  color: ${({ theme }) => theme.text.primary.default.color};
`;
