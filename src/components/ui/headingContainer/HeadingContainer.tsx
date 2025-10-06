import s from './headingContainer.module.css';

type Props = React.PropsWithChildren

export const HeadingContainer: React.FC<Props> = ({ children }) => {
  if (!children) {
    return null;
  }

  return (
    <div className={s.root}>
      {children}
    </div>
  );
};
