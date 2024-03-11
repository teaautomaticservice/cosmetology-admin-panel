import { CSSProperties } from "react";
import { colors } from '../../ant/colors';

export const style: Record<string, CSSProperties> = {
  layout: {
    minHeight: '100vh',
  },
  leftSider: {
    padding: "60px 20px",
    background: colors.red3,
  },
  header: {
    padding: 0,
  },
  content: {
    margin: '16px',
  },
  tableWrap: {
    width: "100%",
  }
};
