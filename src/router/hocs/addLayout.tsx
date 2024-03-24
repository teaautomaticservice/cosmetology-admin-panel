export const addLayout = (Component: React.FC, Layout?: React.FC<React.PropsWithChildren>): React.FC => () => {
  if (Layout == null) {
    return (<Component />);
  }

  return (
    <Layout>
      <Component />
    </Layout>
  )
}