import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { ReducersList, useAppDispatch, useDynamicModuleLoader } from 'shared/lib';
import { Button, ButtonTheme, Input } from 'shared/ui';
import { addCommentFormActions, addCommentFormReducer } from '../../model/slices/addCommentFormSlice';
import { getAddCommentFormError, getAddCommentFormText } from '../../model/selectors/addCommentFormSelectors';
import cls from './addCommentForm.module.scss';

export interface IAddCommentFormProps {
    className?: string;
    onSendComment: (text: string) => void;
}

const reducers: ReducersList = {
    addCommentForm: addCommentFormReducer,
};

const AddCommentForm = memo((props: IAddCommentFormProps) => {
    const { className, onSendComment } = props;
    const { t } = useTranslation('comments');
    const text = useSelector(getAddCommentFormText);
    const error = useSelector(getAddCommentFormError);
    const dispatch = useAppDispatch();

    useDynamicModuleLoader(reducers);

    const onCommentTextChange = useCallback((value: string) => {
        dispatch(addCommentFormActions.setText(value));
    }, [dispatch]);

    const onSendHandler = useCallback(() => {
        onSendComment(text || '');
        onCommentTextChange('');
    }, [onCommentTextChange, onSendComment, text]);

    return (
        <div className={classNames(cls.addCommentForm, {}, [className])}>
            <Input
                className={cls.input}
                placeholder={t('comments.enter.text')}
                value={text}
                onChange={onCommentTextChange}
            />
            <Button
                theme={ButtonTheme.OUTLINE}
                onClick={onSendHandler}
            >
                {t('comments.send')}
            </Button>
        </div>
    );
});

export default AddCommentForm;
