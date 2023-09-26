import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ECountry } from 'entities/country';
import { ECurrency } from 'entities/currency';
import ProfileCard from './ProfileCard';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    profileData: {
        username: 'admin',
        age: 22,
        country: ECountry.Belarus,
        lastName: 'Tsvet',
        first: 'asd',
        city: 'asf',
        currency: ECurrency.EUR,
    },
};

export const withError = Template.bind({});
withError.args = {
    error: 'true',
};

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};
