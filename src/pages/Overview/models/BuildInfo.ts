export interface TransformedBuild {
  seriesName: string;
  buildName: string;
  lastTagName: string | "--";
  buildDate: string | null;
  preFlightKpiScore: number | "--";
  gateKpiScore: number | "--";
  definitionName: string | "--";
  team: string;
}