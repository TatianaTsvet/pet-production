import {FC, useState} from "react";
import { classNames } from 'shared/lib';
import cls from './sidebar.module.scss';
import { ThemeSwitcher } from 'shared/ui';

interface ISidebarProps {
    className?: string;
}

const Sidebar: FC<ISidebarProps> = ({className}) => {
    const [collapsed, setCollapsed] = useState(false)

    const onToggle = () => {
        setCollapsed(prev => !prev);
    }

    return (
        <div
            className={classNames(cls.sidebar, {[cls.collapsed]: collapsed}, [className])}
        >
            <button onClick={onToggle}>toggle</button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
            </div>
        </div>
    );
};
export default Sidebar;
