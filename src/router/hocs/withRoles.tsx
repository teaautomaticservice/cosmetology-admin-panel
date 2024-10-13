import { useEffect } from 'react'
import { paths } from '@router/paths';
import { routerConfig } from '@router/routerConfig'
import { useAppConfigStore } from '@stores/appConfig';
import { UserTypeEnum } from '@typings/api/user';
import { useLocation, useNavigate } from 'react-router-dom';

export const withRoutes = (Component: React.FC): React.FC => () => {
  const { pathname } = useLocation();
  const { appConfigStore, isAppConfigLoaded } = useAppConfigStore();
  const navigate = useNavigate();

  const checkRedirect = () => {
    const currentConfig = routerConfig.find(({ path }) => path === pathname);
    const { currentUser } = appConfigStore;

    if (currentConfig?.roles == null) {
      return;
    }

    const { roles } = currentConfig;

    if (roles.includes('unauthorized') && currentUser != null) {
      navigate(paths.main, { replace: true });
      return;
    }

    if (currentUser == null) {
      navigate(paths.login, { replace: true });
      return;
    }

    if ([UserTypeEnum.OPERATOR, UserTypeEnum.CLIENT].includes(currentUser.type) && [
      UserTypeEnum.SUPER_ADMINISTRATOR,
      UserTypeEnum.ADMINISTRATOR,
      UserTypeEnum.OPERATOR,
    ].some((roleChecked) => roles.includes(roleChecked))) {
      navigate(paths.login, { replace: true });
      return;
    }

    if (currentUser.type === UserTypeEnum.ADMINISTRATOR && roles.includes(
      UserTypeEnum.SUPER_ADMINISTRATOR,
    )) {
      navigate(paths.main, { replace: true });
      return;
    }
  }

  useEffect(() => {
    if (isAppConfigLoaded) {
      checkRedirect();
    }
  }, [pathname, appConfigStore.currentUser, isAppConfigLoaded]);

  return <Component />
}