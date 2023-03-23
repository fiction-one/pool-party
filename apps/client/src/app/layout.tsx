import React from "react";
import StyledComponentsRegistry from "../lib/styled-components-registry";
import ClientProviders from "../lib/client-providers";
import { GlobalStyle } from "../lib/global-style";

export const metadata = {
  title: "🌎",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <StyledComponentsRegistry>
          <ClientProviders>
            <GlobalStyle />
            {children}
          </ClientProviders>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
