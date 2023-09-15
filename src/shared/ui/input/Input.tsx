import {
    InputHTMLAttributes, useEffect, useRef, useState, type FC, type PropsWithChildren, memo, ChangeEvent,
} from 'react';
import { classNames } from 'shared/lib';
import cls from './input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface IInputProps extends HTMLInputProps {
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    autofocus?: boolean;
}

const Input: FC<IInputProps> = memo((props: PropsWithChildren<IInputProps>) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        autofocus,
        ...otherProps
    } = props;
    const ref = useRef<HTMLInputElement>(null);
    const [isFocused, setIsFocused] = useState(false);

    useEffect(() => {
        if (autofocus) {
            setIsFocused(true);
            ref.current?.focus();
        }
    }, [autofocus]);

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <div className={classNames(cls.inputWrapper, {}, [className])}>

            <input
                ref={ref}
                type={type}
                value={value}
                onChange={onChangeHandler}
                className={cls.input}
                placeholder={placeholder}
                {...otherProps}
            />

        </div>
    );
});

export default Input;
