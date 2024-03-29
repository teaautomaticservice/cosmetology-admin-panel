import type { Event } from "effector";
import type { AxiosError } from "axios";
import { createStore, createEvent, createEffect } from "effector";
import { useStore, useEvent } from "effector-react";

type Reducer<State, Payload> = (state: State, payload: Payload) => State | void;

type UsedStore<State> = [
  ReturnType<typeof useStore<State>>,
  ((payload: State) => State),
];

export const storeFactory = <State>(initValue: State) => {
  const $currentStore = createStore<State>(initValue);

  const subscribeTriggerOnStore = <Payload>(event: Event<Payload>, reducer: Reducer<State, Payload>) => {
    $currentStore.on(event, reducer);
  };
  
  const createStoreEvent = <Payload = State>(reducer: Reducer<State, Payload>) => {
    const event = createEvent<Payload>();
    subscribeTriggerOnStore(event, reducer);
    return event;
  };

  const useCreateEffect = <Params>(handler: Function) => {
    const effect = createEffect<Params, State, AxiosError>(handler);
    subscribeTriggerOnStore(effect.doneData, (_, payload) => payload);
    return useEvent(effect);
  };

  const changeEvent = createStoreEvent<State>((_, payload) => payload);

  return {
    useStore: (): UsedStore<State> => [
      useStore($currentStore),
      useEvent(changeEvent),
    ],
    useCreateEffect,
    createStoreEvent,
    useEvent: <Payload = State>(event: Event<Payload>) => useEvent(event),
    useChangeEvent: <Payload = State>(reducer: Reducer<State, Payload>) => useEvent(createStoreEvent(reducer)),
    useNewEvent: (reducer: Reducer<State, State>) => useEvent(createStoreEvent(reducer)),
  };
};
