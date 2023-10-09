import { createAsyncThunk } from '@reduxjs/toolkit';
import { IThunkConfig } from 'app/providers';
import { SortOrder } from 'shared/types';
import { EArticleSortField, EArticleType } from 'entities/article';
import { getArticlesPageInited } from '../../selectors';
import { articlesPageActions } from '../../slices';
import { fetchArticlesList } from '../fetchArticlesList';

export const initArticlesPage = createAsyncThunk<
    void,
    URLSearchParams,
    IThunkConfig<string>
    >(
        'articlesPage/initArticlesPage',
        async (searchParams, thunkApi) => {
            const { getState, dispatch } = thunkApi;
            const isInited = getArticlesPageInited(getState());
            if (isInited) return;
            if (!isInited) {
                // const orderFromUrl = searchParams.get('order');
                // const sortFromUrl = searchParams.get('sort');
                // const searchFromUrl = searchParams.get('search');

                searchParams.forEach((value, key) => {
                    // eslint-disable-next-line default-case
                    switch (key) {
                    case 'order':
                        dispatch(articlesPageActions.setOrder(value as SortOrder));
                        break;
                    case 'sort':
                        dispatch(articlesPageActions.setSort(value as EArticleSortField));
                        break;
                    case 'type':
                        dispatch(articlesPageActions.setType(value as EArticleType));
                        break;
                    case 'search':
                        dispatch(articlesPageActions.setSearch(value));
                        break;
                    }
                });

                dispatch(articlesPageActions.initState());
                dispatch(fetchArticlesList({}));
            }
        },
    );
