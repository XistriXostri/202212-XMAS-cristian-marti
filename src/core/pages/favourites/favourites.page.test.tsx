import { render, screen } from '@testing-library/react';
import FavouritesPage from './favourites.page';

describe('Given HomePage component', () => {
    describe('When it has been render', () => {
        render(<FavouritesPage></FavouritesPage>);

        test(`Then the title should be in the screen`, () => {
            const element = screen.getByRole('heading', {
                name: 'Favourite robots',
            });

            expect(element).toBeInTheDocument();
        });
    });
});
