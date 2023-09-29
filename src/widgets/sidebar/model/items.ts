import React, { SVGProps, VFC } from 'react';
import { RoutePath } from 'shared/config';
import AboutIcon from 'shared/asserts/icons/about.svg';
import HomeIcon from 'shared/asserts/icons/home.svg';
import ProfileIcon from 'shared/asserts/icons/profile.svg';
import ArticleIcon from 'shared/asserts/icons/article.svg';

export interface ISidebarItemType {
    path: string;
    text: string;
    icon: VFC<SVGProps<SVGSVGElement>>;
    authOnly?: boolean,
}

export const SidebarItemsList: ISidebarItemType[] = [

    {
        path: RoutePath.main,
        icon: HomeIcon,
        text: 'Main',
    },
    {
        path: RoutePath.about,
        icon: AboutIcon,
        text: 'About',
    },
    {
        path: RoutePath.profile,
        icon: ProfileIcon,
        text: 'Profile',
        authOnly: true,
    },
    {
        path: RoutePath.articles,
        icon: ArticleIcon,
        text: 'Articles',
        authOnly: true,
    },
];
