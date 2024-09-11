import { transport } from '../../../../utils/transport';
import { ApiRequestOptions } from './ApiRequestOptions';
import type { OpenAPIConfig } from './OpenAPI';
import { CancelablePromise } from './CancelablePromise';

export const request = <T>(config: OpenAPIConfig, options: ApiRequestOptions): CancelablePromise<T> => {
  return new CancelablePromise((resolve, reject, onCancel) => {
    transport.request<T>({
      url: options.url,
      method: options.method,
      params: new URLSearchParams(options.path),
      data: options.body,
    })
      .then(({ data }) => resolve(data))
      .catch((error) => reject(error));
  })
}
