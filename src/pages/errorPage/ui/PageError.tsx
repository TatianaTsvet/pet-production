import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui';
import { classNames } from 'shared/lib';
import cls from './pageError.module.scss';

interface IPageErrorProps {
 className?: string;
}

const PageError: FC<IPageErrorProps> = ({ className }) => {
    const { t } = useTranslation('error');

    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <div className={classNames(cls.errorPage, {}, [className])}>
            <p>{t('error.unexpected')}</p>
            <Button onClick={reloadPage}>
                {t('error.page.upload')}
            </Button>
        </div>
    );
};

export default PageError;
