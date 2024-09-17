import { CSSProperties } from "react";

import { colors } from '@ant/colors';

export const style: Record<string, CSSProperties> = {
  layout: {
    minHeight: '100vh',
  },
  leftSider: {
    padding: "65px 0",
    background: colors.red3,
  },
  header: {
    padding: 0,
    fontSize: '1.17em'
  },
  content: {
    margin: '16px',
  },
  tableWrap: {
    width: "100%",
  },
};
