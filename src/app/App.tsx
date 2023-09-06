import {Link} from 'react-router-dom';
import './styles/index.scss';
import { classNames } from 'shared/lib/classNames';
import { useTheme, AppRouter } from 'app/providers';
import { Navbar } from 'widgets/navbar';


const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <button onClick={toggleTheme}>TOGGLE</button>
            
            <AppRouter />
        </div>
    );
};

export default App;
