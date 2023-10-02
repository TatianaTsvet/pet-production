import { createAsyncThunk } from '@reduxjs/toolkit';
import { IThunkConfig } from 'app/providers';
import { IComment } from 'entities/comment';
import { getUserAuthData } from 'entities/user';
import { getArticleDetailsData } from 'entities/article';
import { getAddCommentFormError } from '../../selectors';
import { addCommentFormActions } from '../../slices/addCommentFormSlice';

export const sendComment = createAsyncThunk<IComment, void, IThunkConfig<string>>(
    'profile/sendComment',
    async (_, thunkApi) => {
        const { extra, rejectWithValue, getState } = thunkApi;

        const userData = getUserAuthData(getState());
        const text = getAddCommentFormError(getState());
        const article = getArticleDetailsData(getState());

        if (!userData || !text || !article) {
            return rejectWithValue('no data');
        }

        try {
            const response = await extra.api.post<IComment>('/comments', {
                articleId: article.id,
                userId: userData.id,
                text,
            });

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (err) {
            console.log(err);
            return rejectWithValue('error');
        }
    },
);
