"use client";

import React from "react";
import useSWR from "swr";
import {
  format,
  formatDuration,
  fromUnixTime,
  intervalToDuration,
  add,
  isAfter,
  differenceInDays,
  differenceInHours,
} from "date-fns";
import {
  Surface,
  InputControl,
  TextInput,
  Typography,
  ChipProps,
} from "@f1/ui-core";
import {
  DataTable,
  TableProps,
  ChipCellRenderer,
  SortHeaderRenderer,
} from "@f1/ui-data-table";
import { pxToRem } from "@f1/ui-utils";
import { Frame, Section } from "./layout-components";

interface RowData<T> {
  value: T;
}

interface FormattedItem extends Record<string, unknown> {
  name: RowData<string>;
  status: RowData<"expired" | "renewable" | "active" | null> & {
    variant: ChipProps["variant"];
  };
  owner: RowData<string>;
  expiresIn: RowData<string | null>;
  registeredDate: RowData<string>;
}

interface ResponseItem {
  fname: string;
  custodyAddr: string;
  expiryTs: string | null;
  createdAtTs: string;
}

interface AllResponse {
  fnames: ResponseItem[];
}

interface CountResponse {
  fname_total: {
    count: number;
  };
}

interface SearchResponse {
  fnameSearch: ResponseItem[];
}

const columns: TableProps<FormattedItem>["columns"] = [
  {
    Header: "NAME",
    accessor: (d) => d.name.value,
    minWidth: 100,
    width: 150,
    maxWidth: 200,
  },
  {
    Header: "STATUS",
    accessor: (d) => d.status,
    minWidth: 100,
    width: 150,
    maxWidth: 200,
    Cell: ChipCellRenderer,
    disableSortBy: true,
  },
  {
    Header: "OWNER",
    accessor: (d) => d.owner.value,
    minWidth: 100,
    width: 150,
    maxWidth: 200,
  },
  {
    Header: "EXPIRES IN",
    accessor: (d) => d.expiresIn.value,
    minWidth: 100,
    width: 150,
    maxWidth: 200,
  },
  {
    Header: "REGISTERED DATE",
    accessor: (d) => d.registeredDate.value,
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

const GRACE_PERIOD_DAYS = 30;

const getNowDate = () => new Date();

// name becomes available 30 days after expiry date
// name is renewable anytime between expiry date and 30 days after it
const getStatus = (expiryDate: Date, gracePeriodDays = GRACE_PERIOD_DAYS) => {
  const renewByDate = add(expiryDate, {
    days: gracePeriodDays,
  });
  const nowDate = getNowDate();

  if (isAfter(nowDate, renewByDate)) return "expired";
  if (isAfter(nowDate, expiryDate)) return "renewable";
  return "active";
};

const getChipVariantFromStatus = (status: FormattedItem["status"]["value"]) => {
  if (status === "expired") return "error";
  if (status === "renewable") return "warning";
  if (status === "active") return "success";
};

// expires in factors in the renewal period
const getExpiresIn = (
  expiryDate: Date,
  gracePeriodDays = GRACE_PERIOD_DAYS
) => {
  const renewByDate = add(expiryDate, {
    days: gracePeriodDays,
  });
  const nowDate = getNowDate();
  if (isAfter(nowDate, renewByDate)) return null;

  const duration = intervalToDuration({
    start: renewByDate,
    end: nowDate,
  });
  const days = differenceInDays(renewByDate, nowDate);
  const hours = differenceInHours(renewByDate, nowDate);

  return formatDuration(
    {
      days,
      hours: duration.days ? 0 : hours,
      minutes: duration.days ? 0 : duration.minutes,
    },
    {
      format: ["days", "hours", "minutes"],
    }
  );
};

const getRegisteredDate = (createdDate: Date) =>
  format(createdDate, "MM/dd/yyyy");

const useMapData = (data?: ResponseItem[]) =>
  React.useMemo(
    () =>
      (data ?? []).map((d): FormattedItem => {
        const expiryDate = d.expiryTs ? fromUnixTime(+d.expiryTs) : null;
        const createdDate = fromUnixTime(+d.createdAtTs);
        const status = expiryDate && getStatus(expiryDate);
        return {
          name: {
            value: d.fname,
          },
          status: {
            value: status,
            variant: getChipVariantFromStatus(status),
          },
          owner: {
            value: truncateEthAddress(d.custodyAddr),
          },
          expiresIn: {
            value: expiryDate && getExpiresIn(expiryDate),
          },
          registeredDate: {
            value: getRegisteredDate(createdDate),
          },
        };
      }),
    [data]
  );

const PAGE_SIZE = 10;

export default function ClientComponent() {
  // in production, we should be debouncing search
  const [search, setSearch] = React.useState("");
  const [pageIndex, setPageIndex] = React.useState(0);
  const [order, setOrder] = React.useState<{
    by: "createdAtTs" | "expiryTs";
    direction: "asc" | "desc";
  }>({
    by: "createdAtTs",
    direction: "desc",
  });

  // all data search, only run when no full text search
  const { data: allData } = useSWR<AllResponse>(
    `
    {
      fnames(first: ${PAGE_SIZE}, skip: ${PAGE_SIZE * pageIndex}, orderBy: ${
      order.by
    }, orderDirection: ${order.direction}) {
        fname
        custodyAddr
        expiryTs
        createdAtTs
      }
    }
  `,
    {
      isPaused: () => !!search,
    }
  );

  // prefetch next page for all data search, only run when no full text search
  useSWR(
    `
    {
      fnames(first: ${PAGE_SIZE}, skip: ${
      PAGE_SIZE * (pageIndex + 1)
    }, orderBy: ${order.by}, orderDirection: ${order.direction}) {
        fname
        custodyAddr
        expiryTs
        createdAtTs
      }
    }
  `,
    {
      isPaused: () => !!search,
    }
  );

  // only for pagination
  const { data: countData } = useSWR<CountResponse>(
    `
    {
      fname_total: count(id: "fname_count") {
        count
      }
    }
  `
  );

  // full text search. this is not a fuzzy search (yet) and will not paginate
  const { data: searchData } = useSWR<SearchResponse>(
    `
    {
      fnameSearch(text: "${search}") {
        fname
        custodyAddr
        expiryTs
        createdAtTs
      }
    }
  `,
    {
      isPaused: () => !search,
    }
  );

  const mappedData = useMapData(
    search ? searchData?.fnameSearch : allData?.fnames
  );

  const count = search ? mappedData.length : countData?.fname_total.count ?? 0;
  const pageCount = count ? Math.ceil(count / PAGE_SIZE) : 1;

  const fetchData: TableProps<Record<string, unknown>>["fetchData"] = (
    pageIndex
    // pageSize
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
            POOL PARTY | beta
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
            fetchData={fetchData}
            sorting={{
              props: {
                manualSortBy: true,
                autoResetSortBy: false,
                disableSortRemove: true,
              },
              initialState: {
                sortBy: [
                  {
                    id: order.by,
                    desc: order.direction === "desc",
                  },
                ],
              },
            }}
            pagination={
              search // since search is only full text, we do not need to paginate here
                ? undefined
                : {
                    props: {
                      autoResetPage: false,
                      manualPagination: true,
                      pageCount,
                    },
                    initialState: {
                      pageSize: PAGE_SIZE,
                      pageIndex,
                    },
                    extra: {
                      totalCount: count,
                    },
                  }
            }
          />
        </Section>
      </Frame>
    </Surface>
  );
}
