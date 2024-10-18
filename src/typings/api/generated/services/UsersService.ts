/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UsersPaginatedDto } from '../models/UsersPaginatedDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class UsersService {
    /**
     * @returns UsersPaginatedDto List of users successful has been got
     * @throws ApiError
     */
    public static usersControllerGetUsers({
        page,
        pageSize,
    }: {
        page?: number,
        pageSize?: number,
    }): CancelablePromise<UsersPaginatedDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users',
            path: {
                'page': page,
                'pageSize': pageSize,
            },
        });
    }
}
