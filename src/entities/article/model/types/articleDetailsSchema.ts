import { IArticle } from './article.types';

export interface IArticleDetailsSchema {
    isLoading: boolean;
    error?: string;
    data?: IArticle;
}
