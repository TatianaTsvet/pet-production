import { createAsyncThunk } from '@reduxjs/toolkit';
import { IThunkConfig } from 'app/providers';
import { getArticlesPageInited } from '../../selectors';
import { articlesPageActions } from '../../slices';
import { fetchArticlesList } from '../fetchArticlesList';

export const initArticlesPage = createAsyncThunk<
    void,
    void,
    IThunkConfig<string>
    >(
        'articlesPage/initArticlesPage',
        async (_, thunkApi) => {
            const { getState, dispatch } = thunkApi;
            const isInited = getArticlesPageInited(getState());

            if (!isInited) {
                dispatch(articlesPageActions.initState());
                dispatch(fetchArticlesList({
                    page: 1,
                }));
            }
        },
    );
