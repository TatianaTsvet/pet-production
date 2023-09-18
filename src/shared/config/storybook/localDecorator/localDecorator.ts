import { DeepPartial } from '@reduxjs/toolkit';
import { Story } from '@storybook/react';
import { IStateSchema, StoreProvider } from 'app/providers';
import { I18nextProvider } from 'react-i18next';
import { i18n } from 'shared/config/i18n';

// export const LocalDecorator = (StoryComponent: Story) => (
// <I18nextProvider i18n={i18n}>
//     <Suspense fallback="">
//          <StoryComponent />
//     </Suspense>
//     </I18nextProvider
// );

export const LocalDecorator = () => {};
