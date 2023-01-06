import { render, screen } from '@testing-library/react';
import { arrayRobotMock } from '../../components/data/mock.robots';
import RobotsPage from './robots.page';

describe('Given "List" component', () => {
    describe('When it is initially instantiated', () => {
        const handleUpdate = jest.fn();
        const handleDelete = jest.fn();
        const handleAdd = jest.fn();
        const mockRobots = arrayRobotMock;

        render(
            <RobotsPage
                handleUpdate={handleUpdate}
                handleDelete={handleDelete}
                handleAdd={handleAdd}
                robots={mockRobots}
            ></RobotsPage>
        );

        test(`Then component should be render the heading`, () => {
            const elementTitle = screen.getByRole('heading', {
                name: 'Robots Page',
            }); // <h2>

            expect(elementTitle).toBeInTheDocument();
        });
    });
});
