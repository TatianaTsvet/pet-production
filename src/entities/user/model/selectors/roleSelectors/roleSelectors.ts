import { createSelector } from '@reduxjs/toolkit';
import { IStateSchema } from 'app/providers';
import { EUserRole } from '../../consts';

export const getUserRoles = (state: IStateSchema) => state.user.authData?.role;

export const isUserAdmin = createSelector(getUserRoles, (roles) => Boolean(roles?.includes(EUserRole.ADMIN)));
export const isUserManager = createSelector(getUserRoles, (roles) => Boolean(roles?.includes(EUserRole.MANAGER)));
