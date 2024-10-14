import { paths } from '@router/paths';
import { routerConfig } from '@router/routerConfig'
import { useAppConfigStore } from '@stores/appConfig';
import { UserTypeEnum } from '@typings/api/user';
import { Navigate,useLocation } from 'react-router-dom';

export const withRoutes = (Component: React.FC): React.FC => () => {
  const { pathname } = useLocation();
  const { appConfigStore } = useAppConfigStore();
  const currentConfig = routerConfig.find(({ path }) => path === pathname);
  
  if (currentConfig?.roles == null) {
    return <Component />
  }

  const { currentUser } = appConfigStore;
  const { roles } = currentConfig;

  if (roles.includes('unauthorized') && currentUser != null) {
    return <Navigate to={paths.main} replace />
  }

  if (!roles.includes('unauthorized') && currentUser == null) {
    return <Navigate to={paths.login} replace />
  }

  if (currentUser == null) {
    return <Component />
  }

  if ([UserTypeEnum.OPERATOR, UserTypeEnum.CLIENT].includes(currentUser.type) && [
    UserTypeEnum.SUPER_ADMINISTRATOR,
    UserTypeEnum.ADMINISTRATOR,
    UserTypeEnum.OPERATOR,
  ].some((roleChecked) => roles.includes(roleChecked))) {
    return <Navigate to={paths.login} replace />
  }

  if (currentUser.type === UserTypeEnum.ADMINISTRATOR && roles.includes(
    UserTypeEnum.SUPER_ADMINISTRATOR,
  )) {
    return <Navigate to={paths.main} replace />
  }

  return <Component />
}