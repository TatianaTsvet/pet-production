import { EntityState } from '@reduxjs/toolkit';
import { IArticle, EArticleView } from 'entities/article';

export interface IArticlesPageSchema extends EntityState<IArticle> {
    isLoading?: boolean;
    error?: string;

    view: EArticleView;

    // pagination
    page: number;
    limit?: number;
    hasMore: boolean;
}
