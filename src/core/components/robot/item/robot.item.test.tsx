import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { robotMock } from '../../data/mock.robots';
import { Item } from './robot.item';

describe('Given "Item" component', () => {
    const handleUpdate = jest.fn();
    const handleDelete = jest.fn();

    const mockName = 'wally';
    const mockVelocity = 1;
    const mockStrenght = 1;
    const mockCreator = 'Cristian';

    const mockRobot = robotMock;
    describe('When data are provided in the component', () => {
        test('Then user could interact with them', async () => {
            render(
                <Item
                    item={mockRobot}
                    handleUpdate={handleUpdate}
                    handleDelete={handleDelete}
                ></Item>
            );

            const elements = [
                screen.getByRole('img'),
                screen.getByRole('heading', { name: mockName }),
                screen.getByText(`Velocity: ${mockVelocity}`),
                screen.getByText(`Strength: ${mockStrenght}`),
                screen.getByText(`Creator: ${mockCreator}`),
                ...screen.getAllByRole('button'),
            ];

            expect(elements[0]).toHaveAttribute(
                'src',
                `https://robohash.org/${mockName}.png`
            );
            expect(elements[1]).toBeInTheDocument();
            expect(elements[2]).toBeInTheDocument();
            expect(elements[3]).toBeInTheDocument();
            expect(elements[4]).toBeInTheDocument();
            expect(elements[5]).toBeInTheDocument();

            userEvent.click(elements[5]);
            expect(handleUpdate).toHaveBeenCalledTimes(1);
            userEvent.click(elements[7]);
            expect(handleDelete).toHaveBeenCalledTimes(1);
        });
    });
});
