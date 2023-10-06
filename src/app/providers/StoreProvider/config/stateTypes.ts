import {
    AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject, Store,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { IUserSchema } from 'entities/user';
import { NavigateOptions } from 'react-router';
import { Href } from 'history';
import { IProfileSchema } from 'entities/profile';
import { ILoginSchema } from 'features/authByUserName';
import { IArticleDetailsSchema } from 'entities/article';
import { IArticleDetailsCommentsSchema } from 'pages/articleDetailsPage';
import { IArticlesPageSchema } from 'pages/articlesPage';
import { IAddCommentFormSchema } from 'features/addCommentForm';
import { IScrollSaveSchema } from 'widgets/scrollSave';

export interface IStateSchema {
    user: IUserSchema;
    saveScroll: IScrollSaveSchema;

    // async reducers
    loginForm?: ILoginSchema;
    profile?: IProfileSchema
    articleDetails?: IArticleDetailsSchema;
    articleDetailsComments?: IArticleDetailsCommentsSchema;
    addCommentForm?: IAddCommentFormSchema;
    articlesPage?: IArticlesPageSchema;
}

export type StateSchemaKey = keyof IStateSchema

export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>;

export interface IReducerManager {
    getReducerMap: () => ReducersMapObject<IStateSchema>;
    reduce: (state: IStateSchema, action: AnyAction) => CombinedState<IStateSchema>;
    add: (key: StateSchemaKey, reducer:Reducer) => void;
    remove: (key: StateSchemaKey) => void;
    // true - mounted, false - unmounted
    getMountedReducers: () => MountedReducers;
}

export interface IReduxStoreWithManager extends EnhancedStore<ILoginSchema> {
    reducerManager: IReducerManager;
}

export interface IThunkExtraArg {
    api: AxiosInstance;
}

export interface IThunkConfig<T> {
    rejectValue: T;
    extra: IThunkExtraArg;
    state: IStateSchema;
}
