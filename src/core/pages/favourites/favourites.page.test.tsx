import { render, screen } from '@testing-library/react';
import { arrayRobotMock } from '../../components/data/mock.robots';
import FavouritesPage from './favourites.page';

describe('Given "List" component', () => {
    describe('When it is initially instantiated', () => {
        const handleUpdate = jest.fn();
        const handleDelete = jest.fn();
        const mockRobots = arrayRobotMock;

        render(
            <FavouritesPage
                handleUpdate={handleUpdate}
                handleDelete={handleDelete}
                robots={mockRobots}
            ></FavouritesPage>
        );

        test(`Then component should be render the heading`, () => {
            const elementTitle = screen.getByRole('heading', {
                name: 'Favourite robots',
            }); // <h2>

            expect(elementTitle).toBeInTheDocument();
        });
    });
});
