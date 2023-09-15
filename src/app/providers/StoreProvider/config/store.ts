import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { userReducer } from 'entities';
import { IStateSchema } from './StateSchema';

export function createReduxStore(initialState?: IStateSchema) {
    const rootReducer: ReducersMapObject<IStateSchema> = {
        user: userReducer,
    };

    return configureStore<IStateSchema>({
        reducer: rootReducer,
        devTools: __IS_DEV__,
    });
}
