import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui';
import { classNames } from 'shared/lib/classNames';

interface ILangSwitcherProps {
    className?: string;
    short?: boolean;
}

const LangSwitcher = ({ className, short }: ILangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const onToggle = async () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            className={classNames('', {}, [className])}
            theme={ButtonTheme.CLEAR}
            onClick={onToggle}
        >
            {short ? t('lang.short') : t('lang')}
        </Button>

    );
};

export default LangSwitcher;
