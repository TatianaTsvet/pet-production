import { DeepPartial } from '@reduxjs/toolkit';
import { Story } from '@storybook/react';
import { IStateSchema, StoreProvider } from 'app/providers';

// const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
//     loginForm: loginReducer,
//     profile: profileReducer,
// };

// export const StoreDecorator = (
//     state: DeepPartial<StateSchema>,
//     asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>,
// ) => (StoryComponent: Story) => (
//     <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
//         <StoryComponent />
//     </StoreProvider>
// );

export const StoreDecorator = () => {};
