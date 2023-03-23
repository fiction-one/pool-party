"use client";

import React from "react";
import { Layer, InputControl, TextInput, Typography } from "@f1/ui-core";
import { DataTable, TableProps } from "@f1/ui-data-table";
import { pxToRem } from "@f1/ui-utils";
import { Frame, Section } from "./layout";

const columns: TableProps<Record<string, unknown>>["columns"] = [
  {
    Header: "FNAME",
    accessor: "fname",
  },
  {
    Header: "STATUS",
    accessor: "status",
  },
  {
    Header: "REGISTRANT",
    accessor: "registrant",
  },
  {
    Header: "EXPIRES IN",
    accessor: "expiresIn",
  },
  {
    Header: "REGISTERED DATE",
    accessor: "registeredDate",
  },
];

const data = [
  {
    fname: "fname",
    status: "status",
    registrant: "registrant",
    expiresIn: "expires in",
    registeredDate: "registered date",
  },
];

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
        <Section>
          <DataTable columns={columns} data={data} />
        </Section>
      </Frame>
    </Layer>
  );
}
