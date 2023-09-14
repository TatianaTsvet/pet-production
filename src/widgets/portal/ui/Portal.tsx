import type { FC, PropsWithChildren, ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface IPortalProps {
    children: ReactNode;
    element?: HTMLElement;
}

const Portal: FC<IPortalProps> = (props: PropsWithChildren<IPortalProps>) => {
    const {
        children,
        element = document.body,
    } = props;

    return createPortal(children, element);
};

export default Portal;
