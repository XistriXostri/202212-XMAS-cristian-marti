import { render, screen } from '@testing-library/react';
import HomePage from './home.page';

describe('Given "List" component', () => {
    describe('When it is initially instantiated', () => {
        render(<HomePage></HomePage>);

        test(`Then component should be render the heading`, () => {
            const elements = [
                screen.getByRole('heading', {
                    name: 'Home',
                }),
                screen.getByRole('img'),
                screen.getByText('Robots: 0'),
            ];

            expect(elements[0]).toBeInTheDocument();
            expect(elements[1]).toHaveAttribut('alt', 'robot');
            expect(elements[3]).toBeInTheDocument();
        });
    });
});
