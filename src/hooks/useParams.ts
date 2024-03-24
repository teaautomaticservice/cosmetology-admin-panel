import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

type Params = Record<string, string | string[]>;

export const useParams = <T extends Params = Params>(defaultInit?: T) => {
  const [searchParams, setSearchParams] = useSearchParams(defaultInit);
  const [ params, setCurrentParams ] = useState<T>(defaultInit ?? {} as T);

  const setParams = (params: T) => {
    if (params.page === '1') {
      delete params.page;
    }

    if (params.pageSize === '10') {
      delete params.pageSize;
    }

    setSearchParams(params);
  }

  useEffect(() => {
    let newParams = {} as T;
    searchParams.forEach((val, key) => {
      newParams = {
        ...newParams,
        [key]: val,
      };
    });
    setCurrentParams(newParams);
  }, [searchParams]);

  return { params, setParams };
}; 