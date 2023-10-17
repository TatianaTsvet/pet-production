import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Text, VStack } from 'shared/ui/';
import { useTranslation } from 'react-i18next';
import { IComment } from '../../model';
import cls from './commentList.module.scss';
import { CommentCard } from '../commentCard';

interface ICommentListProps {
    className?: string;
    comments?: IComment[];
    isLoading?: boolean;
}

const CommentList = memo((props: ICommentListProps) => {
    const { className, isLoading, comments } = props;
    const { t } = useTranslation('comments');

    if (isLoading) {
        return (
            <VStack max className={classNames('', {}, [className])}>
                <CommentCard isLoading />
                <CommentCard isLoading />
                <CommentCard isLoading />
            </VStack>
        );
    }

    return (
        <VStack max className={classNames('', {}, [className])}>
            {comments?.length
                ? comments.map((comment) => (
                    <CommentCard
                        isLoading={isLoading}
                        className={cls.comment}
                        comment={comment}
                        key={comment.id}
                    />
                ))
                : <Text text={t('comments.absent')} />}
        </VStack>
    );
});

export default CommentList;
