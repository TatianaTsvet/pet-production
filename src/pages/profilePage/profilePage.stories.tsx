import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers';
import { ECountry } from 'entities/country';
import { ECurrency } from 'entities/currency';
import { ThemeDecorator, StoreDecorator } from 'shared/config';
import ProfilePage from './ProfilePage';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
// Normal.decorators = [StoreDecorator({
//     profile: {
//         form: {
//             userName: 'admin',
//             age: 22,
//             country: Country.Ukraine,
//             lastName: 'ulbi tv',
//             first: 'asd',
//             city: 'asf',
//             currency: Currency.USD,
//         },
//     },
// })];

// export const Dark = Template.bind({});
// Dark.args = {};
// Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
//     profile: {
//         form: {
//             userName: 'admin',
//             age: 22,
//             country: ECountry.Ukraine,
//             lastName: 'ulbi tv',
//             first: 'asd',
//             city: 'asf',
//             currency: ECurrency.USD,
//         },
//     },
// })];
