import {useTranslation} from "react-i18next";
import { Button, ThemeButton } from 'shared/ui';
import { classNames } from 'shared/lib';

interface LangSwitcherProps {
    className?: string;
}

const LangSwitcher = ({className}: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const onToggle = async () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    }

    return (
        <Button
            className={classNames('', {}, [className])}
            theme={ThemeButton.CLEAR}
            onClick={onToggle}
        >
            {t('home')}
            {t('lang')}
        </Button>
        
    );
};

export default LangSwitcher;

