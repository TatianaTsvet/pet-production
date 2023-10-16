import { Story } from '@storybook/react';
import { IStateSchema, StoreProvider } from 'app/providers';
import { ReducersList } from 'shared/lib/hooks';

// const defaultAsyncReducers: ReducersList = {
//     loginForm: loginReducer,
//     profile: profileReducer,
//      articleDetails: articleDetailsReducer,
//      articleDetailsComments: articleDetailsCommentsReducer,
//      addCommentForm: addCommentFormReducer,
// };

// export const StoreDecorator = (
//     state: DeepPartial<StateSchema>,
//     asyncReducers?: ReducersList,
// ) => (StoryComponent: Story) => (
//     <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
//         <StoryComponent />
//     </StoreProvider>
// );

export const StoreDecorator = () => {};
