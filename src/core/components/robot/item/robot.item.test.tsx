import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Robot } from '../../../types/robot';
import { Item } from './robot.item';

describe('Given "Item" component', () => {
    const handleUpdate = jest.fn();
    const handleDelete = jest.fn();
    const mockName = 'Test_name';
    const mockVelocity = 1;
    const mockStrenght = 2;
    const mockCreator = 'Test creation';
    const date = new Date().toLocaleDateString('es-UE');

    const mockRobot = new Robot(
        mockName,
        mockVelocity,
        mockStrenght,
        mockCreator
    );
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
                screen.getByText(`Creation date: ${date}`),
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

            userEvent.click(elements[6]);
            expect(handleUpdate).toHaveBeenCalledTimes(1);
            userEvent.click(elements[8]);
            expect(handleDelete).toHaveBeenCalledTimes(1);
        });
    });
});
