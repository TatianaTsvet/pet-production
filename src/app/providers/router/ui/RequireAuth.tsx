import { useSelector } from 'react-redux';
import { EUserRole, getUserAuthData, getUserRoles } from 'entities/user';
import { Navigate, useLocation } from 'react-router-dom';
import { RoutePath } from 'shared/config';
import { useMemo } from 'react';

interface IRequireAuthProps {
    children: JSX.Element;
    roles?: EUserRole[];
}
const RequireAuth = ({ children, roles }: IRequireAuthProps) => {
    const auth = useSelector(getUserAuthData);
    const location = useLocation();
    const userRoles = useSelector(getUserRoles);

    const hasRequiredRoles = useMemo(() => {
        if (!roles) {
            return true;
        }
        return roles.some((role) => userRoles?.includes(role));
    }, [roles, userRoles]);

    if (!auth) {
        return <Navigate to={RoutePath.forbidden} state={{ from: location }} replace />;
    }
    if (!hasRequiredRoles) {
        return <Navigate to={RoutePath.main} state={{ from: location }} replace />;
    }

    return children;
};

export default RequireAuth;
