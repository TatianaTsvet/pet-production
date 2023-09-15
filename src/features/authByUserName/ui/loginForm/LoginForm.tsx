import { useCallback, type FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import {
    Button, Input, ButtonTheme, Text, TextTheme,
} from 'shared/ui';
import { useDispatch, useSelector } from 'react-redux';
import { getLoginState, loginActions, loginByUserName } from 'features/authByUserName';
import cls from './loginForm.module.scss';

interface ILoginFormProps {
 className?: string;
}

const LoginForm: FC<ILoginFormProps> = memo((props: ILoginFormProps) => {
    const { className } = props;
    const { t } = useTranslation('authorization');
    const dispatch = useDispatch();
    const {
        userName, password, error, isLoading,
    } = useSelector(getLoginState);

    const onChangeUserName = useCallback((value: string) => {
        dispatch(loginActions.setUserName(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        dispatch(loginByUserName({ userName, password }));
    }, [dispatch, password, userName]);

    return (
        <div className={classNames(cls.loginForm, {}, [className])}>
            <Text title={t('form.auth.title')} />
            {error && (
                <Text text={error} theme={TextTheme.ERROR} />
            )}
            <Input
                autofocus
                type="text"
                className={cls.input}
                placeholder={t('enter.user.name')}
                onChange={onChangeUserName}
                value={userName}
            />
            <Input
                type="text"
                className={cls.input}
                placeholder={t('enter.password')}
                onChange={onChangePassword}
                value={password}
            />
            <Button
                theme={ButtonTheme.OUTLINE}
                className={cls.loginBtn}
                onClick={onLoginClick}
                disabled={isLoading}
            >
                {t('enter.button')}
            </Button>
        </div>
    );
});

export default LoginForm;
