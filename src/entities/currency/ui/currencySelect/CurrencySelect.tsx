import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { Select } from 'shared/ui';
import { ECurrency } from '../../model';

interface ICurrencySelectProps {
    className?: string;
    value?: ECurrency;
    onChange?: (value: ECurrency) => void;
    readonly?: boolean;
}

const options = [
    { value: ECurrency.RUB, content: ECurrency.RUB },
    { value: ECurrency.EUR, content: ECurrency.EUR },
    { value: ECurrency.USD, content: ECurrency.USD },
];

const CurrencySelect = memo(({
    className, value, onChange, readonly,
}: ICurrencySelectProps) => {
    const { t } = useTranslation();

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as ECurrency);
    }, [onChange]);

    return (
        <Select
            className={classNames('', {}, [className])}
            label={t('choose.currency')}
            options={options}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
        />
    );
});

export default CurrencySelect;
