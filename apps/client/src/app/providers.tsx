"use client";

import React from "react";
import { ThemeProvider } from "@f1/ui-theme";

export default function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return <ThemeProvider theme="dark">{children}</ThemeProvider>;
}
