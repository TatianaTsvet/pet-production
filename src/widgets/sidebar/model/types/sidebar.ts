import { VFC, SVGProps } from 'react';

export interface ISidebarItemType {
    path: string;
    text: string;
    icon: VFC<SVGProps<SVGSVGElement>>;
    authOnly?: boolean,
}
