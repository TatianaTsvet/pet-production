import { Story } from '@storybook/react';
import { IStateSchema, StoreProvider } from 'app/providers';
import { I18nextProvider } from 'react-i18next';
import { initI18nProd } from 'shared/config/i18n';

// export const LocalDecorator = (StoryComponent: Story) => (
// <I18nextProvider i18n={initI18nProd}>
//     <Suspense fallback="">
//          <StoryComponent />
//     </Suspense>
//     </I18nextProvider
// );

export const LocalDecorator = () => {};
