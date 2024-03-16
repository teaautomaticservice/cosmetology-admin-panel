import type { List } from "./common";
import type { ID } from "../common";

export interface Logs {
  id: ID;
  timestamp: Date;
  key: string | null;
  level: string;
  authorizedUserId: string | null;
  message: string;
  meta: string | null;
}

export type LogsList = List<Logs>;