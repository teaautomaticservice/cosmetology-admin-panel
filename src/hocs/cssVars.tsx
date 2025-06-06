import { colors } from '../ant/colors';

export const cssVars = {
  '--accent': colors.red7,
  '--light-accent': colors.red3,
} as React.CSSProperties;


export const withCssVars = (Component: React.FC): React.FC => {
  return (props: any) => {
    return (
      <div style={cssVars}>
        <Component {...props} />
      </div>
    );
  };
};