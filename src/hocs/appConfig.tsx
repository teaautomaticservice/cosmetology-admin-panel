import { useEffect } from 'react';
import { useAppConfigStore } from '@stores/appConfig';
import { Typography } from 'antd';

const { Title } = Typography;

export const withAppConfig = (Component: React.FC): React.FC => {
  return (props: any) => {
    const {
      isAppConfigLoading,
      getAppConfigFromApi,
    } = useAppConfigStore()

    useEffect(() => {
      getAppConfigFromApi();
    }, []);

    if (isAppConfigLoading) {
      return (<Title>App is loading, please wait</Title>)
    }

    return (<Component {...props} />)
  };
};