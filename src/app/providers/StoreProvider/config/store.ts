import {
    CombinedState, Reducer, ReducersMapObject, configureStore,
} from '@reduxjs/toolkit';
import { userReducer } from 'entities/user';
import { API } from 'shared/api';
import { createReducerManager } from './reduceManager';
import { IStateSchema, IThunkExtraArg } from './stateTypes';

export function createReduxStore(
    initialState?: IStateSchema,
    asyncReducers?: ReducersMapObject<IStateSchema>,
) {
    const rootReducers: ReducersMapObject<IStateSchema> = {
        ...asyncReducers,
        user: userReducer,
    };

    const reducerManager = createReducerManager(rootReducers);

    const extraArg: IThunkExtraArg = {
        api: API,
    };

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<IStateSchema>>,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument: extraArg,
            },
        }),
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
