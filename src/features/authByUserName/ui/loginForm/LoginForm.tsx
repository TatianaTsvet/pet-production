import type { FC, PropsWithChildren } from 'react';
import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { Button, Input } from 'shared/ui';
import cls from './loginForm.module.scss';

interface ILoginFormProps {
 className?: string;
}

const LoginForm: FC<ILoginFormProps> = (props: PropsWithChildren<ILoginFormProps>) => {
    const { className } = props;
    const { t } = useTranslation('authorization');

    return (
        <div className={classNames(cls.loginForm, {}, [className])}>
            <Input
                autofocus
                type="text"
                className={cls.input}
                placeholder={t('enter.user.name')}
            />
            <Input
                type="text"
                className={cls.input}
                placeholder={t('enter.password')}
            />
            <Button
                className={cls.loginBtn}
            >
                {t('enter.button')}
            </Button>
        </div>
    );
};

export default LoginForm;
