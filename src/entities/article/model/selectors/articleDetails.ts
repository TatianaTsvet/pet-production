import { createSelector } from '@reduxjs/toolkit';
import { IStateSchema } from 'app/providers';
import { getUserAuthData } from 'entities/user';

export const getArticleDetailsData = (state: IStateSchema) => state.articleDetails?.data;
export const getArticleDetailsIsLoading = (state: IStateSchema) => state.articleDetails?.isLoading || false;
export const getArticleDetailsError = (state: IStateSchema) => state.articleDetails?.error;

export const getCanEditArticle = createSelector(
    getArticleDetailsData,
    getUserAuthData,
    (article, user) => {
        if (!article || !user) {
            return false;
        }
        return article.user.id === user.id;
    },
);
