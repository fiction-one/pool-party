"use client";

import React from "react";
import useSWR from "swr";
import { Surface, InputControl, TextInput, Typography } from "@f1/ui-core";
import { DataTable, TableProps } from "@f1/ui-data-table";
import { pxToRem } from "@f1/ui-utils";
import { Frame, Section } from "./layout-components";

interface FormattedItem extends Record<string, unknown> {
  name: string;
  status: string;
  owner: string;
  expiresIn: string;
  registeredDate: string;
}

interface ResponseItem {
  fname: string;
  custodyAddr: string;
  expirationTimestamp: string | null;
  createdAtTimestamp: string;
}

interface ResponseData {
  fnames: ResponseItem[];
}

const columns: TableProps<FormattedItem>["columns"] = [
  {
    Header: "NAME",
    accessor: "name",
    minWidth: 100,
    width: 150,
    maxWidth: 200,
  },
  {
    Header: "STATUS",
    accessor: "status",
    minWidth: 100,
    width: 150,
    maxWidth: 200,
  },
  {
    Header: "OWNER",
    accessor: "owner",
    minWidth: 100,
    width: 150,
    maxWidth: 200,
  },
  {
    Header: "EXPIRES IN",
    accessor: "expiresIn",
    minWidth: 100,
    width: 150,
    maxWidth: 200,
  },
  {
    Header: "REGISTERED DATE",
    accessor: "registeredDate",
    minWidth: 100,
    width: 150,
    maxWidth: 200,
  },
];

const truncateRegex = /^(0x[a-zA-Z0-9]{4})[a-zA-Z0-9]+([a-zA-Z0-9]{4})$/;

const truncateEthAddress = (address: string) => {
  const match = address.match(truncateRegex);
  if (!match) return address;
  return `${match[1]}…${match[2]}`;
};

const useMapData = (data?: ResponseItem[]) =>
  React.useMemo(
    () =>
      (data ?? []).map(
        (d): FormattedItem => ({
          name: d.fname,
          status: "status",
          owner: truncateEthAddress(d.custodyAddr),
          expiresIn: "TBD",
          registeredDate: new Date(
            +d.createdAtTimestamp * 1000
          ).toLocaleDateString(),
        })
      ),
    [data]
  );

const PAGE_SIZE = 10;

export default function ClientComponent() {
  const [search, setSearch] = React.useState("");
  const [pageIndex, setPageIndex] = React.useState(0);

  const { data, error, isLoading } = useSWR<ResponseData>(
    `
    {
      fnames(first: ${PAGE_SIZE}, skip: ${
      PAGE_SIZE * pageIndex
    }, orderBy: createdAtTimestamp, orderDirection: desc) {
        fname
        custodyAddr
        expirationTimestamp
        createdAtTimestamp
      }
    }
  `
  );

  const mappedData = useMapData(data?.fnames);

  const fetchData: TableProps<Record<string, unknown>>["fetchData"] = (
    pageIndex,
    pageSize
  ) => {
    setPageIndex(pageIndex);
  };

  return (
    <Surface
      as="main"
      variant="page"
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <Frame
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <Section
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: pxToRem(64),
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
        <Section
          style={{
            flex: "1 1 auto",
            overflow: "hidden",
          }}
        >
          <DataTable
            columns={columns}
            data={mappedData}
            loading={isLoading}
            fetchData={fetchData}
            pagination={{
              props: {
                manualPagination: true,
                pageCount: 10,
              },
              initialState: {
                pageSize: 20,
                pageIndex: 0,
              },
              extra: {
                totalCount: 200,
              },
            }}
          />
        </Section>
      </Frame>
    </Surface>
  );
}
