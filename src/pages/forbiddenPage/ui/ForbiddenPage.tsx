import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/page';

const ForbiddenPage = () => {
    const { t } = useTranslation();

    return (
        <Page>
            {t('page.forbidden')}
        </Page>
    );
};

export default ForbiddenPage;
