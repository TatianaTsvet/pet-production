import React, { FC, PropsWithChildren, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from '../config/store';
import { IStateSchema } from '../config';

interface IStoreProviderProps {
 initialState?: IStateSchema;
}

const StoreProvider: FC<IStoreProviderProps> = ({ children, initialState }: PropsWithChildren<IStoreProviderProps>) => {
    const store = createReduxStore(initialState);

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};

export default StoreProvider;
