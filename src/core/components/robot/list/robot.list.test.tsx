/* eslint-disable testing-library/no-unnecessary-act */
import { render, screen, waitFor, act } from '@testing-library/react';
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
    });
});
