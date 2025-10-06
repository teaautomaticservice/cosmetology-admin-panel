export type EventBus<T = unknown> = Record<string, T>;

export const eventBusFactory = <EventBus>() => {
  const eventBus = new EventTarget();

  const emit = <EventName extends keyof EventBus = keyof EventBus>(
    eventName: EventName,
    payload?: EventBus[EventName]
  ) => {
    eventBus.dispatchEvent(new CustomEvent(eventName as string, { detail: payload }));
  };

  const on = <EventName extends keyof EventBus = keyof EventBus>(
    eventName: EventName,
    handler: (payload: EventBus[EventName], event: CustomEvent<EventBus[EventName]>) => void,
  ) => {
    const listener = (event: Event) => {
      handler((event as CustomEvent<EventBus[EventName]>).detail, event as CustomEvent<EventBus[EventName]>);
    };
    eventBus.addEventListener(eventName as string, listener as EventListener);

    return () => {
      eventBus.removeEventListener(eventName as string, listener as EventListener);
    };
  };

  return { emit, on };
};
