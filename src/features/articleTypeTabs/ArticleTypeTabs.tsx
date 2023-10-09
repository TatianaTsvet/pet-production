import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useMemo } from 'react';
import { EArticleType } from 'entities/article';
import { TabItem, Tabs } from 'shared/ui';

interface EArticleTypeTabsProps {
    className?: string;
    value: EArticleType;
    onChangeType: (type: EArticleType) => void;
}

const ArticleTypeTabs = memo((props: EArticleTypeTabsProps) => {
    const { className, value, onChangeType } = props;
    const { t } = useTranslation('article-details');

    const typeTabs = useMemo<TabItem[]>(() => [
        {
            value: EArticleType.ALL,
            content: t('articles.all'),
        },
        {
            value: EArticleType.IT,
            content: 'IT',
        },
        {
            value: EArticleType.ECONOMICS,
            content: t('articles.economics'),
        },
        {
            value: EArticleType.SCIENCE,
            content: t('articles.science'),
        },
    ], [t]);

    const onTabClick = useCallback((tab: TabItem) => {
        onChangeType(tab.value as EArticleType);
    }, [onChangeType]);

    return (
        <Tabs
            tabs={typeTabs}
            value={value}
            onTabClick={onTabClick}
            className={classNames('', {}, [className])}
        />
    );
});

export default ArticleTypeTabs;
