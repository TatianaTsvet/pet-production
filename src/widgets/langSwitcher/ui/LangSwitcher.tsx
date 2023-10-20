import { useTranslation } from 'react-i18next';
import { Button, EButtonTheme } from 'shared/ui';
import { classNames } from 'shared/lib/classNames';

interface ILangSwitcherProps {
    className?: string;
    short?: boolean;
}

const LangSwitcher = ({ className, short }: ILangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const onToggle = async () => {
        await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            className={classNames('', {}, [className])}
            theme={EButtonTheme.CLEAR}
            onClick={onToggle}
        >
            {short ? t('lang') : t('language')}
        </Button>

    );
};

export default LangSwitcher;
