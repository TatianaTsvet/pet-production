import { AboutPage } from 'pages/aboutPage';
import { ArticleDetailsPage } from 'pages/articleDetailsPage';
import { ArticleEditPage } from 'pages/articleEditPage';
import { ArticlesPage } from 'pages/articlesPage';
import { MainPage } from 'pages/mainPage';
import { NotFoundPage } from 'pages/notFoundPage';
import { ProfilePage } from 'pages/profilePage';
import { RouteProps } from 'react-router-dom';

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
}

export enum EAppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    ARTICLES = 'articles',
    CREATE = 'article_create',
    EDIT = 'article_edit',
    ARTICLE_DETAILS = 'article',
    // last
    NOT_FOUND = 'not_found'
}

export const RoutePath: Record<EAppRoutes, string> = {
    [EAppRoutes.MAIN]: '/',
    [EAppRoutes.ABOUT]: '/about',
    [EAppRoutes.PROFILE]: '/profile/',
    [EAppRoutes.ARTICLES]: '/articles',
    [EAppRoutes.CREATE]: '/article/new',
    [EAppRoutes.EDIT]: '/article/:id/edit',
    [EAppRoutes.ARTICLE_DETAILS]: '/article/', // + id
    [EAppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<EAppRoutes, AppRoutesProps> = {
    [EAppRoutes.MAIN]: {
        path: RoutePath[EAppRoutes.MAIN],
        element: <MainPage />,
    },
    [EAppRoutes.ABOUT]: {
        path: RoutePath[EAppRoutes.ABOUT],
        element: <AboutPage />,
    },
    [EAppRoutes.PROFILE]: {
        path: `${RoutePath[EAppRoutes.PROFILE]}:id`,
        element: <ProfilePage />,
        authOnly: true,
    },
    [EAppRoutes.ARTICLES]: {
        path: RoutePath[EAppRoutes.ARTICLES],
        element: <ArticlesPage />,
        authOnly: true,
    },
    [EAppRoutes.CREATE]: {
        path: RoutePath[EAppRoutes.CREATE],
        element: <ArticleEditPage />,
        authOnly: true,
    },
    [EAppRoutes.ARTICLE_DETAILS]: {
        path: `${RoutePath[EAppRoutes.ARTICLE_DETAILS]}:id`,
        element: <ArticleDetailsPage />,
        authOnly: true,
    },
    [EAppRoutes.EDIT]: {
        path: RoutePath[EAppRoutes.EDIT],
        element: <ArticleEditPage />,
        authOnly: true,
    },

    [EAppRoutes.NOT_FOUND]: {
        path: RoutePath[EAppRoutes.NOT_FOUND],
        element: <NotFoundPage />,
    },
};
