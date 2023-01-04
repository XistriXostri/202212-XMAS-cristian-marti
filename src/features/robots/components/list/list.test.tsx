/* eslint-disable testing-library/no-unnecessary-act */
import { render, screen, waitFor, act } from '@testing-library/react';
import { List } from './list';
import { useRobots } from '../../hooks/use.robots';
import { Robot } from '../../models/robot';

jest.mock('../../hooks/use.robots');

const mockRobots = [new Robot(0, 0, 'user')];

describe('Given "List" component', () => {
    beforeEach(() => {
        (useRobots as jest.Mock).mockReturnValue({
            getRobots: jest.fn(),
            handleLoad: jest.fn(),
            handleAdd: jest.fn(),
            handleDelete: jest.fn(),
            handleUpdate: jest.fn(),
        });
    });
    describe('When it is initially instantiated without data', () => {
        beforeEach(() => {
            (useRobots().getRobots as jest.Mock).mockReturnValue([]);
        });
        beforeEach(async () => {
            await act(async () => {
                render(<List></List>);
            });
        });
        test(`Then component should be render the loading`, () => {
            const elementTitle = screen.getByRole('heading', {
                name: 'Lista de robots',
            }); // <h3>
            const addLabel = /Añadir nota/i;
            const loadingLabel = /Loading/i;
            const elementAdd = screen.getByText(addLabel);
            const elementLoading = screen.getByText(loadingLabel);
            expect(elementTitle).toBeInTheDocument();
            expect(elementAdd).toBeInTheDocument();
            expect(elementLoading).toBeInTheDocument();
            expect(useRobots().getRobots).toHaveBeenCalled();
        });
    });

    describe('When it load the data from getNote', () => {
        beforeEach(() => {
            (useRobots().getRobots as jest.Mock).mockReturnValue(mockRobots);
        });
        beforeEach(async () => {
            await act(async () => {
                render(<List></List>);
            });
        });
        test(`Then it should be render the data`, async () => {
            const elementList = await screen.findByRole('list'); // <ul />
            expect(elementList).toBeInTheDocument();
            await waitFor(() => {
                expect(useRobots().handleLoad).toHaveBeenCalled();
            });
            const elementItem = await screen.findByText(/Test note/i);
            expect(elementItem).toBeInTheDocument();
        });
    });
});
