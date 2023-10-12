import {
    ChangeEvent, memo, useMemo,
} from 'react';
import { EMods, classNames } from 'shared/lib';
import cls from './select.module.scss';

export interface ISelectOption<T extends string> {
    value: T;
    content: string;
}

interface ISelectProps<T extends string> {
    className?: string;
    label?: string;
    options?: ISelectOption<T>[];
    value?: T;
    onChange?: (value: T) => void;
    readonly?: boolean;
}

export const Select = memo(<T extends string>(props: ISelectProps<T>) => {
    const {
        className,
        label,
        options,
        onChange,
        value,
        readonly,
    } = props;

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        if (onChange) {
            onChange(e.target.value as T);
        }
    };

    const optionsList = useMemo(() => options?.map((opt) => (
        <option
            className={cls.option}
            value={opt.value}
            key={opt.value}
        >
            {opt.content}
        </option>
    )), [options]);

    const mods: EMods = {};

    return (
        <div className={classNames(cls.wrapper, mods, [className])}>
            {label && (
                <span className={cls.label}>
                    {label}
                </span>
            )}
            <select
                disabled={readonly}
                className={cls.select}
                value={value}
                onChange={onChangeHandler}
            >
                {optionsList}
            </select>
        </div>
    );
});
