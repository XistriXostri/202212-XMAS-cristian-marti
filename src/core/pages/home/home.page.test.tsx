import { render, screen } from '@testing-library/react';
import HomePage from './home.page';

describe('Given HomePage component', () => {
    describe('When it has been render', () => {
        render(<HomePage></HomePage>);

        test(`Then the title should be in the screen`, () => {
            const elements = [
                screen.getByRole('heading', {
                    name: 'Home',
                }),
                screen.getByRole('img'),
            ];

            expect(elements[0]).toBeInTheDocument();
            expect(elements[1]).toBeInTheDocument();
        });
    });
});
