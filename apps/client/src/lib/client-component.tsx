"use client";

import React from "react";
import { Layer, InputControl, TextInput, Typography } from "@f1/ui-core";
import { pxToRem } from "@f1/ui-utils";
import { Frame, Section } from "./layout";

export default function ClientComponent() {
  const [search, setSearch] = React.useState("");
  return (
    <Layer
      as="main"
      variant="page"
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <Frame
        style={{
          marginTop: pxToRem(104),
        }}
      >
        <Section
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography as="h3" fontWeight="semi" letterSpacing="wide">
            CASTIFY | beta
          </Typography>
        </Section>
        <Section>
          <InputControl label="Search" fullWidth={true}>
            <TextInput
              placeholder="Search fname or wallet address"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </InputControl>
        </Section>
        <Section>Table</Section>
      </Frame>
    </Layer>
  );
}
