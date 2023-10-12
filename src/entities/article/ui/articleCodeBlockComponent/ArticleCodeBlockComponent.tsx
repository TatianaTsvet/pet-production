import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Code } from 'shared/ui';
import { IArticleCodeBlock } from '../../model';
import cls from './articleCodeBlockComponent.module.scss';

interface ArticleCodeBlockComponentProps {
    className?: string;
    block: IArticleCodeBlock;
}

const ArticleCodeBlockComponent = memo((props: ArticleCodeBlockComponentProps) => {
    const { className, block } = props;

    return (
        <div className={classNames(cls.articleCodeBlockComponent, {}, [className])}>
            <Code text={block.code} />
        </div>
    );
});

export default ArticleCodeBlockComponent;
