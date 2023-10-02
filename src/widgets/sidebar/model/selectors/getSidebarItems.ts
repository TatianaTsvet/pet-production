import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/user';
import { RoutePath } from 'shared/config';
import AboutIcon from 'shared/asserts/icons/about.svg';
import HomeIcon from 'shared/asserts/icons/home.svg';
import ProfileIcon from 'shared/asserts/icons/profile.svg';
import ArticleIcon from 'shared/asserts/icons/article.svg';
import { ISidebarItemType } from '../types';

export const getSidebarItems = createSelector(
    getUserAuthData,
    (userData) => {
        const sidebarItemsList: ISidebarItemType[] = [

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

        ];

        if (userData) {
            sidebarItemsList.push(
                {
                    path: RoutePath.profile + userData.id,
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
            );
        }
        return sidebarItemsList;
    },
);
