import { classNames } from 'shared/lib/classNames';
import { useTheme, AppRouter } from 'app/providers';
import { Suspense } from 'react';
import { Navbar } from 'widgets/navbar';
import { Sidebar } from 'widgets/sidebar';

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
