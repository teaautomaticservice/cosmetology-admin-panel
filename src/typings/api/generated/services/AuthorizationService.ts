/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LoginFormDto } from '../models/LoginFormDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AuthorizationService {
    /**
     * @returns any User success login
     * @throws ApiError
     */
    public static authorizationControllerLogin({
        requestBody,
    }: {
        /**
         * User update
         */
        requestBody: LoginFormDto,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/authorization/login',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
