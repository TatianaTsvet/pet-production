import {FC, useState} from "react";
import { classNames } from 'shared/lib';
import cls from './sidebar.module.scss';
import { LangSwitcher, ThemeSwitcher } from "widgets";


interface ISidebarProps {
    className?: string;
}

const Sidebar: FC<ISidebarProps> = ({className}) => {
    const [collapsed, setCollapsed] = useState(false);

   
    
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
                <LangSwitcher className={cls.lang_button} />
            </div>
        </div>
    );
};
export default Sidebar;
