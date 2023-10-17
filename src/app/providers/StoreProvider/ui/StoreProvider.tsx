import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from 'app/providers/StoreProvider/config/store';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { IStateSchema } from '../config';

interface StoreProviderProps {
    children?: ReactNode;
    initialState?: DeepPartial<IStateSchema>;
    asyncReducers?: DeepPartial<ReducersMapObject<IStateSchema>>
}

export const StoreProvider = (props: StoreProviderProps) => {
    const {
        children,
        initialState,
        asyncReducers,
    } = props;

    // const navigate = useNavigate();

    const store = createReduxStore(
        initialState as IStateSchema,
        asyncReducers as ReducersMapObject<IStateSchema>,
        // navigate,
    );

    console.log('RENDER');

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
