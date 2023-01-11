/* eslint-disable testing-library/no-unnecessary-act */
import { act, render, screen, waitFor } from '@testing-library/react';
import { useRobots } from '../../hooks/use.robots';
import { Robot } from '../../types/robot';
import FavouritesPage from './favourites.page';

jest.mock('../../hooks/use.robots');

const mockFavourites = [new Robot('Test name', 1, 1, 'creator user')];

describe('Given favouritesPage component', () => {
    beforeEach(() => {
        (useRobots as jest.Mock).mockReturnValue({
            robots: mockFavourites,
            handleLoad: jest.fn(),
            handleUpdate: jest.fn(),
        });
        mockFavourites[0].isFavourite = true;
    });
    describe('When it has been render', () => {
        beforeEach(async () => {
            await act(async () => {
                render(<FavouritesPage></FavouritesPage>);
            });
        });

        test(`Then the title should be in the screen`, () => {
            const element = screen.getByRole('heading', {
                name: 'Favourite robots',
            });
            expect(element).toBeInTheDocument();
        });

        test(`Then it should be render the data`, async () => {
            const elementList = await screen.findByRole('list'); // <ul />
            expect(elementList).toBeInTheDocument();
            await waitFor(() => {
                expect(useRobots().handleLoad).toHaveBeenCalled();
            });
            const elementItem = await screen.findByText(/Test name/i);
            expect(elementItem).toBeInTheDocument();
        });
    });
});
