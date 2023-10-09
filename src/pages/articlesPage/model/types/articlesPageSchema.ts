import { EntityState } from '@reduxjs/toolkit';
import { IArticle, EArticleView, EArticleSortField, EArticleType } from 'entities/article';
import { SortOrder } from 'shared/types';

export interface IArticlesPageSchema extends EntityState<IArticle> {
    isLoading?: boolean;
    error?: string;

    // pagination
    page: number;
    limit: number;
    hasMore: boolean;
    // filters
    view: EArticleView;
    order: SortOrder;
    sort: EArticleSortField;
    search: string;
    type: EArticleType;

    _inited: boolean;

}
