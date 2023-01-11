import { render, screen } from '@testing-library/react';
import { arrayRobotMock } from '../../data/mock.robots';
import { List } from './robot.list';

describe('Given "List" component', () => {
    describe('When it is initially instantiated', () => {
        const handleUpdate = jest.fn();
        const handleDelete = jest.fn();
        const mockRobots = arrayRobotMock;

        render(
            <List
                handleUpdate={handleUpdate}
                handleDelete={handleDelete}
                robots={mockRobots}
            ></List>
        );

        test(`Then component should be render the heading`, () => {
            const elementTitle = screen.getByRole('heading', {
                name: 'Robots list',
            }); // <h3>
            expect(elementTitle).toBeInTheDocument();
        });

        test(`Then the list have been called from fauvorites should be render the heading`, () => {
            const elementTitle = screen.getByRole('heading', {
                name: 'Robots list',
            }); // <h3>
            expect(elementTitle).toBeInTheDocument();
        });
    });
});
