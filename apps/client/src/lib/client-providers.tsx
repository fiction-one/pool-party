"use client";

import React from "react";
import { SWRConfig } from "swr";
import { request } from "graphql-request";
import { darkTheme, ThemeProvider } from "@f1/ui-theme";

const SUBGRAPH_ENDPOINT =
  "https://api.thegraph.com/subgraphs/name/nicky-ru/castify";

const fetcher = (query: string) => request(SUBGRAPH_ENDPOINT, query);

export default function ClientProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={darkTheme}>
      <SWRConfig
        value={{
          fetcher,
        }}
      >
        {children}
      </SWRConfig>
    </ThemeProvider>
  );
}
