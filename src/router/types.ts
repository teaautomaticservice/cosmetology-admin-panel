import { FC } from 'react';

export type RouterPage = {
  path: string;
  Component: FC;
  Layout?: FC;
};