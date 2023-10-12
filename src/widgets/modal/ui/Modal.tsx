import { EMods, classNames } from 'shared/lib/classNames/classNames';
import {
    FC,
    PropsWithChildren, MouseEvent,
    ReactNode, useCallback, useEffect, useRef, useState,
} from 'react';
import { Portal } from 'widgets/portal';
import cls from './modal.module.scss';

interface IModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    // for decreasing bundles.
    // Open modals on mounting
    isLazy?: boolean;
}

const ANIMATION_DELAY = 300;

const Modal: FC<IModalProps> = (props: PropsWithChildren<IModalProps>) => {
    const {
        className,
        children,
        isOpen,
        onClose,
        isLazy,
    } = props;

    const [isClosing, setIsClosing] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout>>();

    useEffect(() => {
        if (isOpen) setIsMounted(true);
    }, [isOpen, isMounted]);

    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    }, [onClose]);

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeHandler();
        }
    }, [closeHandler]);

    const onContentClick = (e: MouseEvent) => {
        e.stopPropagation();
    };

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }

        return () => {
            clearTimeout(timerRef.current);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    const mods: EMods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    if (isLazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div className={classNames(cls.modal, mods, [className])}>
                <div className={cls.overlay} onClick={closeHandler}>
                    <div
                        className={cls.content}
                        onClick={onContentClick}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};

export default Modal;
