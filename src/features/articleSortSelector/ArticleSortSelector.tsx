import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useMemo } from 'react';
import { SortOrder } from 'shared/types';
import { EArticleSortField } from 'entities/article';
import { ISelectOption, Select } from 'shared/ui';
import cls from './articleSortSelector.module.scss';

interface IArticleSortSelectorProps {
    className?: string;
    sort: EArticleSortField;
    order: SortOrder;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newSort: EArticleSortField) => void;
}

const ArticleSortSelector = memo((props: IArticleSortSelectorProps) => {
    const {
        className, onChangeOrder, onChangeSort, order, sort,
    } = props;
    const { t } = useTranslation('article-details');

    const orderOptions = useMemo<ISelectOption<SortOrder>[]>(() => [
        {
            value: 'asc',
            content: t('articles.sort.asc'),
        },
        {
            value: 'desc',
            content: t('articles.sort.desc'),
        },
    ], [t]);

    const sortFieldOptions = useMemo<ISelectOption<EArticleSortField>[]>(() => [
        {
            value: EArticleSortField.CREATED,
            content: t('articles.sort.date'),
        },
        {
            value: EArticleSortField.TITLE,
            content: t('articles.sort.name'),
        },
        {
            value: EArticleSortField.VIEWS,
            content: t('articles.sort.views'),
        },
    ], [t]);

    return (
        <div className={classNames(cls.articleSortSelector, {}, [className])}>
            <Select
                options={sortFieldOptions}
                label={t('articles.sort.by')}
                value={sort}
                onChange={(select) => onChangeSort(select as EArticleSortField)}
            />
            <Select
                options={orderOptions}
                label={t('articles.sort.by.short')}
                value={order}
                onChange={(select) => onChangeOrder(select as SortOrder)}
                className={cls.order}
            />
        </div>
    );
});

export default ArticleSortSelector;
