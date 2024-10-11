import { useEffect } from 'react'
import { paths } from '@router/paths';
import { routerConfig } from '@router/routerConfig'
import { RouterPage, RouterRole } from '@router/types';
import { useAppConfigStore } from '@stores/appConfig';
import { UserTypeEnum } from '@typings/api/user';
import { useLocation, useNavigate } from 'react-router-dom';

const redirectUrls: Record<RouterRole, string> = {
  unauthorized: paths.login,
  superAdministrator: paths.logs,
  administrator: paths.main,
  operator: paths.main,
  client: paths.main,
}

export const withRoutes = (Component: React.FC, Layout?: React.FC<React.PropsWithChildren>): React.FC => () => {
  const { pathname } = useLocation();
  const { appConfigStore } = useAppConfigStore();
  const navigate = useNavigate();

  const { currentUser } = appConfigStore;

  const checkRedirect = (currentConfig: RouterPage | undefined) => {
    if (currentConfig?.roles == null) {
      return;
    }

    const { roles } = currentConfig;

    if (roles.includes('unauthorized') && currentUser != null) {
      navigate(paths.main, { replace: true });
      return;
    }

    if (currentUser == null) {
      navigate(redirectUrls.unauthorized, { replace: true });
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
    const currentConfig = routerConfig.find(({ path }) => path === pathname)
    checkRedirect(currentConfig)
  }, [pathname]);

  return <Component />
}