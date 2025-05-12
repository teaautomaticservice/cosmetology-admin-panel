import { History } from '@typings/api/historyMessage';
import { User } from '@typings/api/users';
import { MODALS_TYPE } from '@typings/modals';
import { storeFactory } from "@utils/storeFactory";

type MapModalProps = {
  [MODALS_TYPE.HISTORY]: History,
  [MODALS_TYPE.ADD_USER]: User,
}

interface ModalStore<
  T extends MODALS_TYPE | null = MODALS_TYPE | null,
  O = T extends MODALS_TYPE ? MapModalProps[T] : null,
> {
  type: T;
  props?: O;
}

const { useStore, useChangeEvent } = storeFactory<ModalStore>({
  type: null,
});

export const useModalStore = () => {
  const [store, setStore] = useStore();

  const close = useChangeEvent<void>((state) => ({
    ...state,
    type: null,
    props: null,
  }));

  const open = <T extends MODALS_TYPE>(type: T, props?: MapModalProps[T]) => {
    setStore({
      type: type,
      props,
    })
  };

  const isOpen = store.type === null ? false : true;

  return {
    isOpen,
    modalType: store.type,
    modalProps: store.props,
    close,
    open,
  };
};
