import { Story } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

export const RouteDecorator = (story: () => Story) => (
    story()
    // <BrowserRouter>
    //     {story()}
    // </BrowserRouter>
);

// export const RouteDecorator = (StoryComponent: Story) => (

//     // <BrowserRouter>
//     //     <StoryComponent />
//     // </BrowserRouter>
// );
