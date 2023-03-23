"use client";

import React from "react";
import { darkTheme, ThemeProvider } from "@f1/ui-theme";

export default function ClientProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>;
}
