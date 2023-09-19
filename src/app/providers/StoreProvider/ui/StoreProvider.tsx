import React, { FC, PropsWithChildren, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { ReducersMapObject, Store } from '@reduxjs/toolkit';
import { createReduxStore } from '../config/store';
import { IStateSchema } from '../config';

interface IStoreProviderProps {
 initialState?: IStateSchema;
 asyncReducers?: ReducersMapObject<IStateSchema>;
}

const StoreProvider: FC<IStoreProviderProps> = ({ children, initialState, asyncReducers }: PropsWithChildren<IStoreProviderProps>) => {
    const store = createReduxStore(
        initialState as IStateSchema,
        asyncReducers as ReducersMapObject<IStateSchema>,
    );

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};

export default StoreProvider;
