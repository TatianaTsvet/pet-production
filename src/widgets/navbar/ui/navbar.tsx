import { FC, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames';
import {
    AppLink, AppLinkTheme, Button, ButtonTheme,
} from 'shared';
import { useTranslation } from 'react-i18next';
import { LoginModal } from 'features';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/user';
import cls from './navbar.module.scss';

interface INavbarProps {
    className?: string;
}

export const Navbar: FC<INavbarProps> = ({ className }) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);
    const dispatch = useDispatch();

    const onOpenModal = useCallback(() => {
        setIsAuthModal(!isAuthModal);
    }, [isAuthModal]);

    const onLogOut = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.links}>
                {authData ? (
                    <Button
                        theme={ButtonTheme.CLEAR_INVERTED}
                        className={cls.links}
                        onClick={onLogOut}
                    >
                        {t('log.out')}
                    </Button>
                ) : (
                    <>
                        <Button
                            theme={ButtonTheme.CLEAR_INVERTED}
                            className={cls.links}
                            onClick={onOpenModal}
                        >
                            {t('enter')}
                        </Button>
                        {isAuthModal && (
                            <LoginModal isOpen={isAuthModal} onClose={onOpenModal}>
                                {t('enter')}
                            </LoginModal>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};
