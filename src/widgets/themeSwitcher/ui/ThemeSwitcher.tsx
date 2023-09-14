import { Theme, useTheme } from 'app/providers';
import { FC } from 'react';
import { classNames } from 'shared/lib/classNames';
import LightIcon from 'shared/asserts/icons/theme-light.svg';
import DarkIcon from 'shared/asserts/icons/theme-dark.svg';
import { Button, ButtonTheme } from 'shared/ui';

interface IThemeSwitcherProps {
    className?: string;
}

const ThemeSwitcher: FC<IThemeSwitcherProps> = (props) => {
    const { className } = props;
    const { theme, toggleTheme } = useTheme();
    return (
        <Button
            theme={ButtonTheme.CLEAR}
            className={classNames('', {}, [className])}
            onClick={toggleTheme}
        >
            {theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon />}
        </Button>
    );
};

export default ThemeSwitcher;
