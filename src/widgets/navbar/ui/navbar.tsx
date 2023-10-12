import {
    FC, memo, useCallback, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames';
import {
    AppLink,
    EAppLinkTheme,
    Button,
    EButtonTheme,
} from 'shared/ui';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/user';
import { LoginModal } from 'features/authByUserName';
import { RoutePath } from 'shared/config';
import cls from './navbar.module.scss';

interface INavbarProps {
    className?: string;
}

const Navbar: FC<INavbarProps> = memo(({ className }: INavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);
    const dispatch = useDispatch();

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onOpenModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onLogOut = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    return (
        <header className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.links}>
                {authData ? (
                    <div className={cls.main}>
                        <AppLink
                            to={RoutePath.article_create}
                            theme={EAppLinkTheme.SECONDARY}
                        >
                            {t('article.create')}
                        </AppLink>
                        <Button
                            theme={EButtonTheme.CLEAR_INVERTED}
                            className={cls.links}
                            onClick={onLogOut}
                        >
                            {t('log.out')}
                        </Button>
                    </div>
                ) : (
                    <div className={cls.main}>
                        <Button
                            theme={EButtonTheme.CLEAR_INVERTED}
                            className={cls.links}
                            onClick={onOpenModal}
                        >
                            {t('enter')}
                        </Button>
                        {isAuthModal && (
                            <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
                        )}
                    </div>
                )}
            </div>
        </header>
    );
});

export default Navbar;
