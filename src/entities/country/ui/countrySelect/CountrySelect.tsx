import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ListBox, Select } from 'shared/ui';
import { ECountry } from '../../model';

interface CountrySelectProps {
    className?: string;
    value?: ECountry;
    onChange?: (value: ECountry) => void;
    readonly?: boolean;
}

const options = [
    { value: ECountry.Armenia, content: ECountry.Armenia },
    { value: ECountry.Russia, content: ECountry.Russia },
    { value: ECountry.Belarus, content: ECountry.Belarus },
    { value: ECountry.Kazakhstan, content: ECountry.Kazakhstan },
    { value: ECountry.Ukraine, content: ECountry.Ukraine },
];

const CountrySelect = memo(({
    className, value, onChange, readonly,
}: CountrySelectProps) => {
    const { t } = useTranslation();

    const onChangeHandler = useCallback((value: string) => {
        if (onChange) onChange(value as ECountry);
    }, [onChange]);

    return (
        <ListBox
            className={classNames('', {}, [className])}
            label={t('choose.country')}
            defaultValue={t('choose.country')}
            items={options}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
        />
    );
});

export default CountrySelect;
