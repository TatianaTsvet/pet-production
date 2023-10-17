import { screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests';
import { IProfile } from 'entities/profile';
import { ECurrency } from 'entities/currency';
import { ECountry } from 'entities/country';
import userEvent from '@testing-library/user-event';
import { API } from 'shared/api';
import { profileReducer } from '../../model/slice/profileSlice';
import EditableProfileCard from './EditableProfileCard';

const profile: IProfile = {
    id: '1',
    first: 'admin',
    lastName: 'admin',
    age: 22,
    currency: ECurrency.EUR,
    country: ECountry.Armenia,
    city: 'Moscow',
    userName: 'admin',
};

const options = {
    initialState: {
        profile: {
            readonly: true,
            data: profile,
            form: profile,
            isLoading: false,
        },
        user: {
            authData: { id: '1' },
        },
    },
    asyncReducers: {
        profile: profileReducer,
    },
};

describe('editableProfileCard', () => {
    test('change to save and cancel buttons', async () => {
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(screen.getByTestId('editableProfileCard.EditButton'));
        expect(screen.getByTestId('editableProfileCard.SaveButton')).toBeInTheDocument();
    });

    test('cancel editing profile', async () => {
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(screen.getByTestId('editableProfileCard.EditButton'));

        await userEvent.clear(screen.getByTestId('profileCard.firstName'));
        await userEvent.clear(screen.getByTestId('profileCard.lastName'));

        await userEvent.type(screen.getByTestId('profileCard.firstName'), 'user');
        await userEvent.type(screen.getByTestId('profileCard.lastName'), 'user');

        expect(screen.getByTestId('profileCard.firstName')).toHaveValue('user');
        expect(screen.getByTestId('profileCard.lastName')).toHaveValue('user');

        await userEvent.click(screen.getByTestId('editableProfileCard.CancelButton'));

        expect(screen.getByTestId('profileCard.firstName')).toHaveValue('admin');
        expect(screen.getByTestId('profileCard.lastName')).toHaveValue('admin');
    });

    test('should appear error', async () => {
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(screen.getByTestId('editableProfileCard.EditButton'));

        await userEvent.clear(screen.getByTestId('profileCard.firstName'));

        await userEvent.click(screen.getByTestId('editableProfileCard.SaveButton'));

        expect(screen.getByTestId('editableProfileCard.Error.Paragraph')).toBeInTheDocument();
    });

    test('PUT request ', async () => {
        const mockPutReq = jest.spyOn(API, 'put');
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(screen.getByTestId('editableProfileCard.EditButton'));

        await userEvent.type(screen.getByTestId('profileCard.firstName'), 'user');

        await userEvent.click(screen.getByTestId('editableProfileCard.SaveButton'));

        expect(mockPutReq).toHaveBeenCalled();
    });
});
