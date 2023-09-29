import { createAsyncThunk } from '@reduxjs/toolkit';
import { IThunkConfig } from 'app/providers';
import { IArticle } from '../../types';

export const fetchArticleById = createAsyncThunk<
    IArticle,
    string,
    IThunkConfig<string>
    >(
        'articleDetails/fetchArticleById',
        async (articleId, thunkApi) => {
            const { extra, rejectWithValue } = thunkApi;

            try {
                const response = await extra.api.get<IArticle>(`/articles/${articleId}`);

                if (!response.data) {
                    throw new Error();
                }

                return response.data;
            } catch (e) {
                console.log(e);
                return rejectWithValue('error');
            }
        },
    );
