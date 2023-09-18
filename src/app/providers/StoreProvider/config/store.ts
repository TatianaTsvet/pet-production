import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { loginReducer } from 'features';
import { userReducer } from 'entities/user';
import { IStateSchema } from './StateSchema';

export function createReduxStore(initialState?: IStateSchema) {
    const rootReducer: ReducersMapObject<IStateSchema> = {
        user: userReducer,
        loginForm: loginReducer,
    };

    return configureStore<IStateSchema>({
        reducer: rootReducer,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}
