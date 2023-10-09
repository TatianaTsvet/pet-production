import { BugButton } from 'app/providers';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/page';

const MainPage = () => {
    const { t } = useTranslation('main');
    return (
        <Page>
            {/* <BugButton /> */}
            {t('main.page')}
        </Page>
    );
};

export default MainPage;
