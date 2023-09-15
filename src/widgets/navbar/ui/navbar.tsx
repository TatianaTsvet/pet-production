import { FC, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames';
import {
    AppLink, AppLinkTheme, Button, ButtonTheme,
} from 'shared';
import { useTranslation } from 'react-i18next';
import { Modal } from 'widgets/modal';
import { LoginModal } from 'features';
import cls from './navbar.module.scss';

interface INavbarProps {
    className?: string;
}

export const Navbar: FC<INavbarProps> = ({ className }) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onOpenModal = useCallback(() => {
        setIsAuthModal(!isAuthModal);
    }, [isAuthModal]);
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.links}>
                <Button
                    theme={ButtonTheme.CLEAR_INVERTED}
                    className={cls.links}
                    onClick={onOpenModal}
                >
                    {t('enter')}
                </Button>
                <LoginModal isOpen={isAuthModal} onClose={onOpenModal}>
                    {t('enter')}
                </LoginModal>
            </div>
        </div>
    );
};
