import type { Event } from "effector";
import type { AxiosError } from "axios";
import { createStore, createEvent, createEffect } from "effector";
import { useStore, useEvent } from "effector-react";

type Reducer<State> = (state: State, payload: State) => State | void;

export const storeFactory = <State>(initValue: State) => {
  const $currentStore = createStore<State>(initValue);

  const subscribeTriggerOnStore = (event: Event<State>, reducer: Reducer<State>) => {
    $currentStore.on(event, reducer);
  };
  
  const createStoreEvent = (reducer: Reducer<State>) => {
    const event = createEvent<State>();
    subscribeTriggerOnStore(event, reducer);
    return event;
  };

  const useCreateStoreEffect = <Params>(handler: Function) => {
    const effect = createEffect<Params, State, AxiosError>(handler);
    subscribeTriggerOnStore(effect.doneData, (_, newVal) => newVal);
    return useEvent(effect);
  };

  const changeEvent = createStoreEvent((_, newVal) => newVal);

  return {
    subscribeTriggerOnStore,
    useStore: () => useStore($currentStore),
    useChangeEvent: () => useEvent(changeEvent),
    useNewEvent: (reducer: Reducer<State>) => useEvent(createStoreEvent(reducer)),
    useCreateStoreEffect,
  };
};
