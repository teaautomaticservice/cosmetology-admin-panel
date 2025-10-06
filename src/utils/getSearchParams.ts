export const getSearchParams = <T extends object>(stringParams: string = window.location.search) => {
  const objectParams = Object.fromEntries(new URLSearchParams(stringParams));
  return objectParams as T;
};
