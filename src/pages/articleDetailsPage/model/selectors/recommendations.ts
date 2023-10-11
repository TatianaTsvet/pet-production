import { IStateSchema } from 'app/providers';

// export const getArticleRecommendationsIsLoading = (state: IStateSchema) => state.articleDetailsPage?.recommendations?.isLoading;

// export const getArticleRecommendationsError = (state: IStateSchema) => state.articleDetailsPage?.recommendations?.error;

export const getArticleRecommendationsIsLoading = (state: IStateSchema) => state.articleDetailsRecommendations?.isLoading;

export const getArticleRecommendationsError = (state: IStateSchema) => state.articleDetailsRecommendations?.error;
