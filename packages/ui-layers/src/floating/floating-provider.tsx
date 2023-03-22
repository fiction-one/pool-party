import * as React from "react";
import {
  autoUpdate,
  flip,
  offset,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useFocus,
  useHover,
  useInteractions,
  useRole,
} from "@floating-ui/react";
import { LayerOptions } from "./types";

export const useTooltip = ({
  defaultVisible = false,
  placement = "top",
  trigger = "click",
  distance = 8,
  visible,
  onTrigger,
}: LayerOptions = {}) => {
  const controlled = visible && onTrigger;
  const [uncontrolledVisible, setVisible] = React.useState(defaultVisible);

  const open = controlled ? visible : uncontrolledVisible;
  const setOpen = controlled ? onTrigger : setVisible;

  const data = useFloating({
    placement,
    open,
    onOpenChange: setOpen,
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(distance),
      flip({
        fallbackAxisSideDirection: "start",
      }),
      shift({ padding: 4 }),
    ],
  });

  const context = data.context;

  const interactions = useInteractions([
    useHover(context, {
      enabled: trigger === "hover",
    }),
    useFocus(context, {
      enabled: trigger === "focus",
    }),
    useClick(context, {
      enabled: trigger === "click",
    }),
    useDismiss(context),
    useRole(context, { role: "tooltip" }),
  ]);

  return React.useMemo(
    () => ({
      open,
      setOpen: setOpen,
      ...interactions,
      ...data,
    }),
    [open, setOpen, interactions, data]
  );
};

type ContextType = ReturnType<typeof useTooltip> | null;

const LayerContext = React.createContext<ContextType>(null);

export const FloatingProvider = ({
  children,
  layerInterface,
}: {
  children: React.ReactNode;
  layerInterface: ContextType;
}) => {
  return (
    <LayerContext.Provider value={layerInterface}>
      {children}
    </LayerContext.Provider>
  );
};

export const useLayer = () => {
  const context = React.useContext(LayerContext);

  if (context === null) {
    throw new Error(
      "Floating components must be wrapped in a <FloatingProvider />"
    );
  }

  return context;
};
