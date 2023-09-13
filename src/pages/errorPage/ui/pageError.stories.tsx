import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import PageError from './PageError';

export default {
    title: 'page/ErrorPage',
    component: PageError,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof PageError>;

const Template: ComponentStory<typeof PageError> = (args) => <PageError {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
// Dark.decorators = [ThemeDecorator(Theme.DARK)];
