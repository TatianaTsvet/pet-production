import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { userReducer } from 'entities/user';
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
    });
    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}
