import {
    FC, memo, useCallback, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames';
import {
    AppLink,
    EAppLinkTheme,
    Button,
    EButtonTheme,
    Dropdown,
    Avatar,
} from 'shared/ui';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, isUserAdmin, isUserManager, userActions } from 'entities/user';
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

    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onOpenModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onLogOut = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    const isAdminPanelAvailable = isAdmin || isManager;

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
                        <Dropdown
                            className={cls.dropdown}
                            items={[
                                ...(isAdminPanelAvailable ? [{
                                    content: t('admin.panel'),
                                    href: RoutePath.admin_panel,
                                }] : []),
                                {
                                    content: t('log.out'),
                                    onClick: onLogOut,
                                },
                                {
                                    content: t('page.profile'),
                                    href: RoutePath.profile + authData.id,
                                },
                            ]}
                            trigger={(
                                <Avatar
                                    size={30}
                                    src={authData.avatar}
                                />
                            )}
                            direction="bottom left"
                        />
                        {/* <Button
                            theme={EButtonTheme.CLEAR_INVERTED}
                            className={cls.links}
                            onClick={onLogOut}
                        >
                            {t('log.out')}
                        </Button> */}
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
