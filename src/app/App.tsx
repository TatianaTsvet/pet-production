import './styles/index.scss';
import { classNames } from 'shared/lib/classNames';
import { useTheme, AppRouter } from 'app/providers';
import { Navbar } from 'widgets';
import { Sidebar } from 'widgets/sidebar/ui';


const App = () => {
    const {theme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />  
            <div className="content-page">
                <Sidebar />
                <AppRouter />
            </div>
            
        </div>
    );
};

export default App;
