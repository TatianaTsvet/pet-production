import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Avatar from './Avatar';

const avatarImg = 'https://asteriya-salon.ru/wp-content/uploads/5/d/5/5d568e0648f18dee96083635d2496b66.jpeg';

export default {
    title: 'shared/Avatar',
    component: Avatar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    size: 150,
    src: avatarImg,
};

export const Small = Template.bind({});
Small.args = {
    size: 50,
    src: avatarImg,
};
