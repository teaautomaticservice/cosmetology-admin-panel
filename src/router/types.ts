import { FC } from 'react';
import { type UserType } from '@typings/api/user';

export type RouterRole = UserType | 'unauthorized';

export type RouterPage = {
  path: string;
  Component: FC;
  Layout?: FC;
  roles?: RouterRole[];
};