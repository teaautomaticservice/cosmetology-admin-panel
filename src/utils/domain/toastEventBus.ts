import { eventBusFactory } from '@utils/eventBusFactory'

export type ToastProps = {
  description: string;
}

type ToastEventBus = {
  addToast: ToastProps;
}

export const toastEventBus = eventBusFactory<ToastEventBus>();