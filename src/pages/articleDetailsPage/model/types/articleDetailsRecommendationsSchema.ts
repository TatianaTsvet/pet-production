import { EntityState } from '@reduxjs/toolkit';
import { IArticle } from 'entities/article';

export interface IArticleDetailsRecommendationsSchema extends EntityState<IArticle>{
    isLoading?: boolean;
    error?: string;
}
