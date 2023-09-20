import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { userReducer } from 'entities/user';
import { API } from 'shared/api';
import { createReducerManager } from './reduceManager';
import { IReducerManager, IStateSchema } from './stateTypes';

export function createReduxStore(
    initialState?: IStateSchema,
    asyncReducers?: ReducersMapObject<IStateSchema>,
) {
    const rootReducer: ReducersMapObject<IStateSchema> = {
        ...asyncReducers,
        user: userReducer,

    };

    const reducerManager = createReducerManager(rootReducer);

    // конфигурируем хранилище
    const store = configureStore<IStateSchema>({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware: (arg0: { thunk: { extraArgument: { api: any; }; }; }) => any) => getDefaultMiddleware({
            thunk: {
                extraArgument: {
                    api: API,
                },
            },
        }),
    });
    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
