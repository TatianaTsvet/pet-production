import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import ListIcon from 'shared/asserts/icons/list.svg';
import TiledIcon from 'shared/asserts/icons/tiled.svg';
import { EArticleView } from 'entities/article/model';
import { Button, ButtonTheme, Icon } from 'shared/ui';
import cls from './articleViewSelector.module.scss';

interface IArticleViewSelectorProps {
    className?: string;
    view: EArticleView,
    onViewClick?: (view: EArticleView) => void;
}

const viewTypes = [
    {
        view: EArticleView.SMALL,
        icon: TiledIcon,
    },
    {
        view: EArticleView.BIG,
        icon: ListIcon,
    },
];

const ArticleViewSelector = memo((props: IArticleViewSelectorProps) => {
    const { className, view, onViewClick } = props;

    const onClick = (newView: EArticleView) => () => {
        onViewClick?.(newView);
    };

    return (
        <div className={classNames(cls.articleViewSelector, {}, [className])}>
            {viewTypes.map((viewType) => (
                <Button
                    theme={ButtonTheme.CLEAR}
                    onClick={onClick(viewType.view)}
                >
                    <Icon
                        Svg={viewType.icon}
                        className={classNames('', { [cls.notSelected]: viewType.view === view })}
                    />
                </Button>
            ))}
        </div>
    );
});

export default ArticleViewSelector;
