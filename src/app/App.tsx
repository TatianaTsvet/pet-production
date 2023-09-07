import './styles/index.scss';
import { classNames } from 'shared/lib/classNames';
import { useTheme, AppRouter } from 'app/providers';
import { Navbar } from 'widgets';
import { Sidebar } from 'widgets/sidebar/ui';
import { Suspense } from 'react';

const App = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
