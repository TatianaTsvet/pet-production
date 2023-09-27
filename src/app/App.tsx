import { classNames } from 'shared/lib/classNames';
import { useTheme, AppRouter } from 'app/providers';
import { Suspense, useEffect } from 'react';
import { Navbar } from 'widgets/navbar/ui';
import { Sidebar } from 'widgets/sidebar/ui';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInit, userActions } from 'entities/user';

const App = () => {
    const { theme } = useTheme();
    const dispatch = useDispatch();
    const isInit = useSelector(getUserInit);

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    {isInit && <AppRouter />}
                </div>
            </Suspense>
        </div>
    );
};

export default App;
