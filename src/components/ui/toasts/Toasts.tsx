import { useEffect } from 'react';
import { toastEventBus, ToastProps } from '@utils/domain/toastEventBus';
import { notification } from 'antd';

export const Toasts: React.FC = () => {
  const [api, contextHolder] = notification.useNotification();

  const addToast = (props: ToastProps) => {
    api.success({
      message: 'Success',
      ...props,
    })
  }

  useEffect(() => {
    const unsubscribe = toastEventBus.on('addToast', (payload) => {
      addToast(payload);
    });

    return () => {
      unsubscribe();
    }
  }, [])

  return (
    <>
      {contextHolder}
    </>
  )
}