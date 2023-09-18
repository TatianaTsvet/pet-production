import { DeepPartial } from '@reduxjs/toolkit';
import { Story } from '@storybook/react';
import { IStateSchema, StoreProvider } from 'app/providers';

// export const StoreDecorator = (state: DeepPartial<IStateSchema>) => (StoryComponent: Story) => (
//     <StoreProvider initialState={state}>
//         <StoryComponent />
//     </StoreProvider
// );

export const StoreDecorator = () => {};
