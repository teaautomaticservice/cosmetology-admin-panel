import type { List } from "./common";
import type { ID } from "../common";

export interface History {
  id: ID;
  date: Date;
  owner: string;
  message: string;
}

export type HistoryList = List<History>;