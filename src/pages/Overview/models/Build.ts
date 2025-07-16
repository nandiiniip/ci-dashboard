import type { Tag } from "./Tag";
import type { KPI } from "./KPI";

export interface Build {
  series: {
    name: string;
  };
  buildName: string;
  tags?: Tag[];
  buildDate: string;
  preflightKPIs?: KPI[];
  gateKPIs?: KPI[];
  definition: {
    name: string;
  };
  team: string;
}