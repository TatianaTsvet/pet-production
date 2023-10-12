import { render, screen } from '@testing-library/react';
import { EButtonTheme, Button } from '../button';

describe('btn', () => {
    test('Test render', () => {
        render(<Button>Test</Button>);
        expect(screen.getByText('Test')).toBeInTheDocument();
    });
    test('Test clear theme', () => {
        render(<Button theme={EButtonTheme.CLEAR}>Test</Button>);
        expect(screen.getByText('Test')).toHaveClass('clear');
        screen.debug();
    });
});
