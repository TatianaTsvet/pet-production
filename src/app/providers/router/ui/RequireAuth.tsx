import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/user';
import { Navigate, useLocation } from 'react-router-dom';
import { RoutePath } from 'shared/config';

const RequireAuth = (props: { children: JSX.Element; }) => {
    const { children } = props;
    const auth = useSelector(getUserAuthData);
    const location = useLocation();

    if (!auth) {
        return <Navigate to={RoutePath.main} state={{ from: location }} replace />;
    }
    return children;
};

export default RequireAuth;
