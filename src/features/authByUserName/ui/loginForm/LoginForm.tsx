import { useCallback, type FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import {
    Button, Input, ButtonTheme, Text, TextTheme,
} from 'shared/ui';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { DynamicModuleLoader, useDynamicModuleLoader } from 'shared/lib';
import { ReducersList } from 'shared/lib/hooks/useDynamicModuleLoader';
import {
    loginReducer, getLoginPassword, getLoginError, loginActions, loginByUserName, getLoginUserName, getLoginLoading,
} from 'features/authByUserName/module';
import cls from './loginForm.module.scss';

interface ILoginFormProps {
 className?: string;
}

const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

const LoginForm: FC<ILoginFormProps> = memo(({ className }: ILoginFormProps) => {
    const { t } = useTranslation('authorization');
    const dispatch = useDispatch();
    const userName = useSelector(getLoginUserName);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginLoading);
    const error = useSelector(getLoginError);

    useDynamicModuleLoader(initialReducers, true);

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
        // <DynamicModuleLoader
        //     removeAfterUnmount
        //     reducers={initialReducers}
        // >
        <div className={classNames(cls.loginForm, {}, [className])}>
            <Text title={t('form.auth.title')} />
            {error && (
                <Text text={t('error.login.or.password')} theme={TextTheme.ERROR} />
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
        // </DynamicModuleLoader>
    );
});

export default LoginForm;
