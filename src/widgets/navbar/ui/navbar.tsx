import { FC, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames';
import { AppLink, AppLinkTheme, Button, ButtonTheme } from 'shared';
import { useTranslation } from 'react-i18next';
import cls from './navbar.module.scss';
import { Modal } from 'widgets/modal';

interface INavbarProps {
    className?: string;
}

export const Navbar: FC<INavbarProps> = ({ className }) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.links}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.links}
                onClick={onToggleModal}
            >
                {t('enter')}
            </Button>
                <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid commodi consequatur eligendi impedit incidunt necessitatibus possimus quis saepe sunt totam.'
            </Modal>
            </div>
        </div>
    );
};
