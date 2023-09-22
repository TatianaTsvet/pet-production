import { useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { Reducer } from '@reduxjs/toolkit';
import { StateSchemaKey, IReduxStoreWithManager } from 'app/providers';

export type ReducersList = {
    [name: string]: Reducer | undefined;
}

export const useDynamicModuleLoader = (reducers?: ReducersList, removeAfterUnmount?: boolean): void => {
    const store = useStore() as IReduxStoreWithManager;
    const dispatch = useDispatch();

    useEffect(() => {
        if (reducers) {
            Object.entries(reducers).forEach(([name, reducer]) => {
                store.reducerManager.add(name as StateSchemaKey, reducer as Reducer);
                dispatch({ type: `@INIT ${name} reducer` });
            });
        }

        return () => {
            if (removeAfterUnmount && reducers) {
                Object.entries(reducers).forEach(([name]) => {
                    store.reducerManager.remove(name as StateSchemaKey);
                    dispatch({ type: `@DESTROY ${name} reducer` });
                });
            }
        };
        // eslint-disable-next-line
    }, []);

};
