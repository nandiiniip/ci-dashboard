import ContentContainer from "../../styled-components/ContentContainer";
import { useState, useEffect } from "react";
import type { Build } from "./models/Build";
import type { TransformedBuild } from "./models/BuildInfo";
import MUIDataTable from "mui-datatables";
import type {
  MUIDataTableColumnDef,
  MUIDataTableCustomHeadRenderer,
  MUIDataTableOptions,
  MUISortOptions,
} from "mui-datatables";
import { Box, TableCell, TableSortLabel } from "@mui/material";
import CircularProgressKPI from "../../components/CircularProgressKPI";
import Loader from "../../components/CircularLoader";

const Overview = () => {
  const [builds, setBuilds] = useState<Build[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getBuildData();
  }, []);

  async function getBuildData() {
    try {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 2000));
      const response = await fetch("http://localhost:3001/builds");
       // Simulate a delay for loading effect
      const data: Build[] = await response.json();
      setBuilds(data);
    } catch (error) {
      console.error("Error fetching build data:", error);
    } finally {
      setLoading(false);
    }
  }

  const buildData: TransformedBuild[] = builds.map((build) => {
    const tags = build.tags || [];
    const lastTagName = tags.length > 0 ? tags[tags.length - 1].name : null;
    const preFlightKpi = build.gateKPIs?.find(
      (k) => k.name === "preFlightKpiScore"
    );
    const gateKpi = build.gateKPIs?.find((k) => k.name === "kpiScore");

    return {
      seriesName: build.series.name,
      buildName: build.buildName,
      lastTagName: lastTagName || "--",
      buildDate: build.buildDate,
      preFlightKpiScore:
        preFlightKpi && preFlightKpi.value !== 0 ? preFlightKpi.value : "--",
      gateKpiScore: gateKpi && gateKpi.value !== 0 ? gateKpi.value : "--",
      definitionName: build.definition?.name || "--",
      team: !build.team || build.team === "undefined" ? "SOL-CI" : build.team,
    };
  });

  const columns = (builds: TransformedBuild[]): MUIDataTableColumnDef[] => [
    {
      name: "seriesName",
      label: "Series",
      options: {
        sort: true,
        filter: true,
        filterType: "multiselect",
        customHeadRender: (
          columnMeta: MUIDataTableCustomHeadRenderer,
          sortColumn: (columnIndex: number) => void,
          sortOrder: MUISortOptions
        ) => {
          return (
            <TableCell
              key={columnMeta.index}
              onClick={() => sortColumn(columnMeta.index)}
              style={{
                fontWeight: "800",
                fontSize: "0.75rem",
                cursor: "pointer",
                paddingLeft: "2.5rem",
                textAlign: "center",
              }}
            >
              <TableSortLabel
                active={sortOrder.name === columnMeta.name}
                direction={sortOrder.direction || "asc"}
              >
                {columnMeta.label}
              </TableSortLabel>
            </TableCell>
          );
        },
        setCellProps: () => ({
          style: {
            fontSize: "0.65rem",
            textAlign: "center",
          },
        }),
      },
    },
    {
      name: "buildName",
      label: "Build Name",
      options: {
        sort: true,
        filter: false,
        customHeadRender: (
          columnMeta: MUIDataTableCustomHeadRenderer,
          sortColumn: (columnIndex: number) => void,
          sortOrder: MUISortOptions
        ) => {
          return (
            <TableCell
              key={columnMeta.index}
              onClick={() => sortColumn(columnMeta.index)}
              style={{
                fontWeight: "800",
                fontSize: "0.75rem",
                paddingLeft: "1rem",
                cursor: "pointer",
              }}
            >
              <TableSortLabel
                active={sortOrder.name === columnMeta.name}
                direction={sortOrder.direction || "asc"}
              >
                {columnMeta.label}
              </TableSortLabel>
            </TableCell>
          );
        },
        setCellProps: () => ({
          style: {
            fontSize: "0.65rem",
          },
        }),
      },
    },
    {
      name: "lastTagName",
      label: "Status",
      options: {
        sort: true,
        customHeadRender: (
          columnMeta: MUIDataTableCustomHeadRenderer,
          sortColumn: (columnIndex: number) => void,
          sortOrder: MUISortOptions
        ) => {
          return (
            <TableCell
              key={columnMeta.index}
              onClick={() => sortColumn(columnMeta.index)}
              style={{
                fontWeight: "800",
                fontSize: "0.75rem",
                paddingLeft: "1rem",
                cursor: "pointer",
              }}
            >
              <TableSortLabel
                active={sortOrder.name === columnMeta.name}
                direction={sortOrder.direction || "asc"}
              >
                {columnMeta.label}
              </TableSortLabel>
            </TableCell>
          );
        },
        setCellProps: () => ({
          style: {
            fontSize: "0.65rem",
          },
        }),
      },
    },
    {
      name: "buildDate",
      label: "Creation Date",
      options: {
        filter: false,
        sort: true,
        setCellProps: () => ({
          style: {
            fontSize: "0.65rem",
          },
        }),
        customHeadRender: (
          columnMeta: MUIDataTableCustomHeadRenderer,
          sortColumn: (columnIndex: number) => void,
          sortOrder: MUISortOptions
        ) => {
          return (
            <TableCell
              key={columnMeta.index}
              onClick={() => sortColumn(columnMeta.index)}
              style={{
                fontWeight: "800",
                fontSize: "0.75rem",
                paddingLeft: "1rem",
                cursor: "pointer",
              }}
            >
              <TableSortLabel
                active={sortOrder.name === columnMeta.name}
                direction={sortOrder.direction || "asc"}
              >
                {columnMeta.label}
              </TableSortLabel>
            </TableCell>
          );
        },
        customBodyRenderLite: (dataIndex: number) => {
          const dateString = builds[dataIndex].buildDate;
          return dateString
            ? new Date(dateString).toLocaleString("en-US", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
              })
            : "-";
        },
      },
    },
    {
      name: "preFlightKpiScore",
      label: "Pre-Flight KPI",
      options: {
        sort: false,
        filter: false,
        customHeadRender: () => {
          return (
            <td
              key={"Pre-Flight KPI"}
              style={{
                fontWeight: "800",
                fontSize: "0.75rem",
              }}
            >
              Pre-Flight KPI
            </td>
          );
        },
        setCellProps: () => ({
          style: {
            fontSize: "0.65rem",
          },
        }),
        customBodyRenderLite: (dataIndex: number) => {
          const value = buildData[dataIndex].preFlightKpiScore;
          return value && value !== "--" ? (
            <CircularProgressKPI value={Number(value)} />
          ) : (
            "--"
          );
        },
      },
    },
    {
      name: "gateKpiScore",
      label: "Gate KPI",
      options: {
        sort: false,
        filter: false,
        customHeadRender: () => {
          return (
            <td
              key={"Gate KPI"}
              style={{
                fontWeight: "800",
                fontSize: "0.75rem",
              }}
            >
              Gate KPI
            </td>
          );
        },
        setCellProps: () => ({
          style: {
            fontSize: "0.65rem",
          },
        }),
        customBodyRenderLite: (dataIndex: number) => {
          const value = buildData[dataIndex].gateKpiScore;
          return value && value !== "--" ? (
            <CircularProgressKPI value={Number(value)} />
          ) : (
            "--"
          );
        },
      },
    },
    {
      name: "definitionName",
      label: "Branch",
      options: {
        sort: true,
        filter:true,
        filterType: "multiselect",
        customHeadRender: (
          columnMeta: MUIDataTableCustomHeadRenderer,
          sortColumn: (columnIndex: number) => void,
          sortOrder: MUISortOptions
        ) => {
          return (
            <TableCell
              key={columnMeta.index}
              onClick={() => sortColumn(columnMeta.index)}
              style={{
                fontWeight: "800",
                fontSize: "0.75rem",
                paddingLeft: "1rem",
                cursor: "pointer",
              }}
            >
              <TableSortLabel
                active={sortOrder.name === columnMeta.name}
                direction={sortOrder.direction || "asc"}
              >
                {columnMeta.label}
              </TableSortLabel>
            </TableCell>
          );
        },
        setCellProps: () => ({
          style: {
            fontSize: "0.65rem",
          },
        }),
      },
    },
    {
      name: "team",
      label: "Team",
      options: {
        sort: true,
        customHeadRender: (
          columnMeta: MUIDataTableCustomHeadRenderer,
          sortColumn: (columnIndex: number) => void,
          sortOrder: MUISortOptions
        ) => {
          return (
            <TableCell
              key={columnMeta.index}
              onClick={() => sortColumn(columnMeta.index)}
              style={{
                fontWeight: "800",
                fontSize: "0.75rem",
                paddingLeft: "1rem",
                cursor: "pointer",
              }}
            >
              <TableSortLabel
                active={sortOrder.name == columnMeta.name}
                direction={sortOrder.direction || "asc"}
              >
                {columnMeta.label}
              </TableSortLabel>
            </TableCell>
          );
        },
        setCellProps: () => ({
          style: {
            fontSize: "0.65rem",
          },
        }),
      },
    },
  ];

  const options: MUIDataTableOptions = {
    filterType: "dropdown",
    rowsPerPage: 10,
    rowsPerPageOptions: [5, 10, 15],
    responsive: "standard",
    selectableRows: "none",
    elevation: 4,
    print: false,
    download: false,
  };

  return (
    <ContentContainer sx={{ overflowX: "hidden" }}>
      <Box sx={{ width: "100%",height: "100%" }}>
        {loading ?<Loader />:
        <MUIDataTable
          title="Builds"
          data={buildData}
          columns={columns(buildData)}
          options={options}
        />}
      </Box>
    </ContentContainer>
  );
};

export default Overview;
