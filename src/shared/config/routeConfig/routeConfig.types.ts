export enum EAppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    ARTICLES = 'articles',
    CREATE = 'article_create',
    EDIT = 'article_edit',
    ARTICLE_DETAILS = 'article',
    ADMIN_PANEL = 'admin_panel',
    FORBIDDEN = 'forbidden',
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
    [EAppRoutes.ADMIN_PANEL]: '/admin',
    [EAppRoutes.FORBIDDEN]: '/forbidden',
    [EAppRoutes.NOT_FOUND]: '*',
};
