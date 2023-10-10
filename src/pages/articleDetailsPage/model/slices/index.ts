import { combineReducers } from '@reduxjs/toolkit';
import { IArticleDetailsPageSchema } from '../types';
import { articleDetailsCommentsReducer } from './articleDetailsCommentsSlice';
import { articleDetailsPageRecommendationsReducer } from './articleDetailsPageRecommendationSlice';

export { getArticleComments } from './articleDetailsCommentsSlice';
export { getArticleRecommendations } from './articleDetailsPageRecommendationSlice';

// bad example, just for studying
export const articleDetailsPageReducer = combineReducers<IArticleDetailsPageSchema>({
    recommendations: articleDetailsPageRecommendationsReducer,
    comments: articleDetailsCommentsReducer,
});
