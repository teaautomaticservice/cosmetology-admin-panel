import { paths } from '@router/paths';
import { routerConfig } from '@router/routerConfig';
import { useAppConfigStore } from '@stores/appConfig';
import { UserTypeEnum } from '@typings/api/users';
import { Navigate, useLocation } from 'react-router-dom';

export const withRoles = (Component: React.FC): React.FC => () => {
  const { pathname } = useLocation();
  const { appConfigStore } = useAppConfigStore();
  const currentConfig = routerConfig.find(({ path }) => path === pathname);

  if (!currentConfig?.roles) {
    return <Component />;
  }

  const { currentUser } = appConfigStore;
  const { roles } = currentConfig;

  const isUnauthorizedRoute = roles.includes('unauthorized');

  if (isUnauthorizedRoute && currentUser) {
    return <Navigate to={paths.main} replace />;
  }

  if (!isUnauthorizedRoute && !currentUser) {
    return <Navigate to={paths.login} replace />;
  }

  if (!currentUser) {
    return <Component />;
  }

  const allowedRoles = [
    UserTypeEnum.SUPER_ADMINISTRATOR,
    UserTypeEnum.ADMINISTRATOR,
  ];

  if ([UserTypeEnum.OPERATOR, UserTypeEnum.CLIENT].includes(currentUser.type) &&
    allowedRoles.some((roleChecked) => roles.includes(roleChecked))) {
    return <Navigate to={paths.login} replace />;
  }

  if (currentUser.type === UserTypeEnum.ADMINISTRATOR && roles.includes(
    UserTypeEnum.SUPER_ADMINISTRATOR,
  )) {
    return <Navigate to={paths.main} replace />;
  }

  return <Component />;
};
