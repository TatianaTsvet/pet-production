import { createAsyncThunk } from '@reduxjs/toolkit';
import { IThunkConfig } from 'app/providers';
import { EArticleType, IArticle } from 'entities/article';
import { addQueryParams } from 'shared/lib';
import {
    getArticlesPageLimit,
    getArticlesPageNum,
    getArticlesPageOrder,
    getArticlesPageSearch,
    getArticlesPageSort,
    getArticlesPageType,
} from '../../selectors';

interface IFetchArticlesListProps {
    replace?: boolean,
}

export const fetchArticlesList = createAsyncThunk<
    IArticle[],
    IFetchArticlesListProps,
    IThunkConfig<string>
    >(
        'articlesPage/fetchArticlesList',
        async (props, thunkApi) => {
            const { extra, rejectWithValue, getState } = thunkApi;
            const limit = getArticlesPageLimit(getState());
            const sort = getArticlesPageSort(getState());
            const order = getArticlesPageOrder(getState());
            const search = getArticlesPageSearch(getState());
            const page = getArticlesPageNum(getState());
            const type = getArticlesPageType(getState());
            try {
                addQueryParams({
                    sort, order, search, type,
                });
                const response = await extra.api.get<IArticle[]>('/articles', {
                    params: {
                        _expand: 'user',
                        _limit: limit,
                        _page: page,
                        _sort: sort,
                        _order: order,
                        q: search, // q - search string
                        type: type === EArticleType.ALL ? undefined : type,
                    },
                });

                if (!response.data) {
                    throw new Error();
                }

                return response.data;
            } catch (e) {
                return rejectWithValue('error');
            }
        },
    );
