import { Theme, useTheme } from 'app/providers';
import { FC } from 'react';
import { classNames } from 'shared/lib';
import cls from './themeSwitcher.module.scss';
import LightIcon from 'shared/asserts/icons/theme-light.svg';
import DarkIcon from 'shared/asserts/icons/theme-dark.svg';
import { Button, ThemeButton } from '../button';

interface IThemeSwitcherProps {
    className?: string;
}

const ThemeSwitcher: FC<IThemeSwitcherProps> = (props) => {
    const { className } = props;
    const {theme, toggleTheme} = useTheme();
    return (
        <Button theme={ThemeButton.CLEAR} className={classNames(cls.appLink, {}, [className])} onClick={toggleTheme}>
            {theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon />}
        </Button>
    );
};

export default ThemeSwitcher;

