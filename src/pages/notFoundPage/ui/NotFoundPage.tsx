import type { FC, PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib';
import { Page } from 'widgets/page';
import cls from './notFoundPage.module.scss';

interface INotFoundPageProps {
 className?: string;
}

const NotFoundPage: FC<INotFoundPageProps> = (props: PropsWithChildren<INotFoundPageProps>) => {
    const { className } = props;
    const { t } = useTranslation('main');

    return (
        <Page className={classNames(cls.notFoundPage, {}, [className])}>{t('page.not.found')}</Page>
    );
};

export default NotFoundPage;
