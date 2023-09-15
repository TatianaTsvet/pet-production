import { configureStore } from '@reduxjs/toolkit';
import { IStateSchema } from './StateSchema';

export function createReduxStore(initialState?: IStateSchema) {
    return configureStore<IStateSchema>({
        reducer: {},
        devTools: __IS_DEV__,
    });
}

