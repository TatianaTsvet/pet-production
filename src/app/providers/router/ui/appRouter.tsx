import React, { FC, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared';

const AppRouter: FC = () => {
    const { t } = useTranslation('main');

    return (
        <Suspense fallback={(
            <div>
                {t('page.loading')}
                ...
            </div>
        )}
        >
            <Routes>
                {Object.values(routeConfig).map(({ element, path }) => (
                    <Route
                        key={path}
                        path={path}
                        element={<div className="page-wrapper">{element}</div>}
                    />
                ))}
            </Routes>
        </Suspense>
    );
};

export default AppRouter;
