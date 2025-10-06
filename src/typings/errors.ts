import { AxiosError, AxiosResponse } from 'axios';

interface ErrorResponse extends AxiosResponse<unknown, any> {
  data: {
    status: number;
    message?: string;
    cause?: undefined;
  }
}

export interface ApiError extends AxiosError {
  response: ErrorResponse | undefined;
}
