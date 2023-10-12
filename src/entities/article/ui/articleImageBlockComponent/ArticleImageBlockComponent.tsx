import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ETextAlign, Text } from 'shared/ui';
import { IArticleImageBlock } from '../../model';
import cls from './articleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
    className?: string;
    block: IArticleImageBlock;
}

const ArticleImageBlockComponent = memo((props: ArticleImageBlockComponentProps) => {
    const { className, block } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.articleImageBlockComponent, {}, [className])}>
            <img src={block.src} alt={block.title} className={cls.img} />
            {block.title && (
                <Text text={block.title} align={ETextAlign.CENTER} />
            )}
        </div>
    );
});

export default ArticleImageBlockComponent;
