import { createAsyncThunk } from '@reduxjs/toolkit';
import { IThunkConfig } from 'app/providers';
import { IArticle } from 'entities/article';

export const fetchArticlesList = createAsyncThunk<
    IArticle[],
    void,
    IThunkConfig<string>
    >(
        'articlesPage/fetchArticlesList',
        async (_, thunkApi) => {
            const { extra, rejectWithValue } = thunkApi;

            try {
                const response = await extra.api.get<IArticle[]>('/articles', {
                    params: {
                        _expand: 'user',
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
