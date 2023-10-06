import { IStateSchema } from 'app/providers/StoreProvider';
import { createSelector } from '@reduxjs/toolkit';

export const getScrollSave = (state: IStateSchema) => state.saveScroll.scroll;

export const getScrollSaveByPath = createSelector(
    getScrollSave,
    (state: IStateSchema, path: string) => path,
    (scroll, path) => scroll[path] || 0,
);
