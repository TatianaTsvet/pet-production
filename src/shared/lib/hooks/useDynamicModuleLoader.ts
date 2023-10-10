import { useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { Reducer } from '@reduxjs/toolkit';
import { StateSchemaKey, IReduxStoreWithManager, IStateSchema } from 'app/providers';

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer<NonNullable<IStateSchema[name]>>;
}

export const useDynamicModuleLoader = (reducers?: ReducersList, removeAfterUnmount = true): void => {
    const store = useStore() as IReduxStoreWithManager;
    const dispatch = useDispatch();

    useEffect(() => {
        if (reducers) {
            const mountedReducers = store.reducerManager.getMountedReducers();
            Object.entries(reducers).forEach(([name, reducer]) => {
                const mounted = mountedReducers[name as StateSchemaKey];
                if (!mounted) {
                    // add only if reducer is absent
                    store.reducerManager.add(name as StateSchemaKey, reducer as Reducer);
                    dispatch({ type: `@INIT ${name} reducer` });
                }
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
