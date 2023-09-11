import { render, screen, fireEvent } from '@testing-library/react';
import { withTranslation } from 'react-i18next';
import React from 'react';
import { renderWithTranslation } from 'shared/lib/tests';
import Sidebar from './Sidebar';

describe('sidebar', () => {
    test('with only one param', () => {
        renderWithTranslation(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });
    test('test toggle', () => {
        renderWithTranslation(<Sidebar />);
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
        screen.debug();
    });
});
