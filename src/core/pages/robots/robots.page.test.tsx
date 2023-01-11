import { render, screen } from '@testing-library/react';
import RobotsPage from './robots.page';

describe('Given HomePage component', () => {
    describe('When it has been render', () => {
        render(<RobotsPage></RobotsPage>);

        test(`Then the title should be in the screen`, () => {
            const element = screen.getByRole('heading', {
                name: 'Robots Page',
            });
            expect(element).toBeInTheDocument();
        });
    });
});
