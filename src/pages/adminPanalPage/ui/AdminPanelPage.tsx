import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/page';

const AdminPanelPage = () => {
    const { t } = useTranslation('about');

    return (
        <Page>
            {t('admin.panel')}
        </Page>
    );
};

export default AdminPanelPage;
