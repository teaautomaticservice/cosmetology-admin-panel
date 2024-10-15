import { useAppConfigStore } from '@stores/appConfig';

import { LoginForm } from './type';

export const useLoginServices = () => {
  const { login, isAuthLoading } = useAppConfigStore()
  const submit = async (form: LoginForm) => {
    try {
      await login(form);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
    }
  };
  
  return {
    isAuthLoading,
    submit,
  }
}