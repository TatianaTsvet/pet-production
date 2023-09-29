import { EntityState } from '@reduxjs/toolkit';
import { IComment } from 'entities/comment';

export interface IArticleDetailsCommentsSchema extends EntityState<IComment>{
    isLoading?: boolean;
    error?: string;
}
