import React, { SVGProps, VFC } from 'react';
import { RoutePath } from 'shared/config';
import AboutIcon from 'shared/asserts/icons/about.svg';
import HomeIcon from 'shared/asserts/icons/home.svg';
import ProfileIcon from 'shared/asserts/icons/profile.svg';

export interface ISidebarItemType {
    path: string;
    text: string;
    icon: VFC<SVGProps<SVGSVGElement>>;
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
    },
];
