import { classNames } from 'shared/lib/classNames/classNames';
import {
    MutableRefObject, ReactNode, useRef, UIEvent,
} from 'react';
import { useAppDispatch, useInfiniteScroll, useInitialEffect, useThrottle } from 'shared/lib';
import { getScrollSaveByPath, scrollSaveActions } from 'widgets/scrollSave';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IStateSchema } from 'app/providers';
import cls from './page.module.scss';

interface IPageProps {
    className?: string;
    children: ReactNode;
    onScrollEnd?: () => void;
}

const Page = (props: IPageProps) => {
    const { className, children, onScrollEnd } = props;
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
    const dispatch = useAppDispatch();
    const { pathname } = useLocation();
    const scrollPosition = useSelector((state: IStateSchema) => getScrollSaveByPath(state, pathname));
    useInfiniteScroll({
        triggerRef,
        wrapperRef,
        callback: onScrollEnd,
    });

    useInitialEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition;
    });

    const onHandleScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
        dispatch(scrollSaveActions.setScrollPosition({
            position: e.currentTarget.scrollTop,
            path: pathname,
        }));
    }, 500);

    return (
        <main
            ref={wrapperRef}
            className={classNames(cls.page, {}, [className])}
            onScroll={onHandleScroll}
        >
            {children}
            {onScrollEnd ? (<div className={cls.trigger} ref={triggerRef} />) : null}
        </main>
    );
};

export default Page;
