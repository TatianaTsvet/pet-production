import {
    AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject, Store,
} from '@reduxjs/toolkit';
import { IUserSchema } from 'entities/user';
import { ILoginSchema } from 'features/authByUserName';

export interface IStateSchema {
    user: IUserSchema;
    // async reducers
    loginForm?: ILoginSchema;
}

export type StateSchemaKey = keyof IStateSchema

export interface IReducerManager {
    getReducerMap: () => ReducersMapObject<IStateSchema>;
    reduce: (state: IStateSchema, action: AnyAction) => CombinedState<IStateSchema>;
    add: (key: StateSchemaKey, reducer:Reducer) => void;
    remove: (key: StateSchemaKey) => void;
}

export interface IReduxStoreWithManager extends EnhancedStore<ILoginSchema> {
    reducerManager: IReducerManager;
}
