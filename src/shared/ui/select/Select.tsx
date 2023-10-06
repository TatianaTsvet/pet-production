import {
    ChangeEvent, memo, useMemo, type FC,
} from 'react';
import { Mods, classNames } from 'shared/lib';
import cls from './select.module.scss';

interface ISelectOption {
    value: string;
    content: string;
}

interface ISelectProps {
    className?: string;
    label?: string;
    options?: ISelectOption[];
    value?: string;
    onChange?: (value: string) => void;
    readonly?: boolean;
}

const Select: FC<ISelectProps> = memo((props: ISelectProps) => {
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
            onChange(e.target.value);
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

    const mods: Mods = {};

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

export default Select;
