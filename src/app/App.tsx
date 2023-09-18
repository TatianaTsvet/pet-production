import { classNames } from 'shared/lib/classNames';
import { useTheme, AppRouter } from 'app/providers';
import { Suspense, useEffect } from 'react';
import { Navbar } from 'widgets/navbar/ui';
import { Sidebar } from 'widgets/sidebar/ui';
import { useDispatch } from 'react-redux';
import { userActions } from 'entities/user';

const App = () => {
    const { theme } = useTheme();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

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
