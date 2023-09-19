import { IStateSchema } from 'app/providers';

export const getLoginState = (state: IStateSchema) => state?.loginForm;

export const getLoginUserName = (state: IStateSchema) => state?.loginForm?.userName || '';

export const getLoginPassword = (state: IStateSchema) => state?.loginForm?.password || '';

export const getLoginError = (state: IStateSchema) => state?.loginForm?.error;

export const getLoginLoading = (state: IStateSchema) => state?.loginForm?.isLoading || false;
