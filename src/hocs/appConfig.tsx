import { useEffect } from 'react';
import { useAppConfigStore } from '@stores/appConfig';
import { Typography } from 'antd';

const { Title } = Typography;

export const withAppConfig = (Component: React.FC): React.FC => {
  return (props: any) => {
    const {
      isAppConfigLoaded,
      getAppConfigFromApi,
    } = useAppConfigStore()

    useEffect(() => {
      getAppConfigFromApi();
    }, []);

    if (isAppConfigLoaded) {
      return (<Component {...props} />)
    }

    return (<Title>App is loading, please wait</Title>)
  };
};