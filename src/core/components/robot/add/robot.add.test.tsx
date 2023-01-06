import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Add } from './robot.add';

describe('Given "Add" component in "Robots" feature', () => {
    const handleAdd = jest.fn();

    beforeEach(() => {
        render(<Add handleAdd={handleAdd}></Add>);
    });

    describe('When component is call with a DOM implementation', () => {
        test(`Then it should be render with its title`, () => {
            const robotHeader = screen.getByRole('heading', {
                name: 'Create Robot',
            }); // <h2>

            expect(robotHeader).toBeInTheDocument();
        });
    });

    describe('When data are provided in the form', () => {
        const mockName = 'Test name';
        const mockCreator = 'Test creator';
        let inputTextElements: Array<HTMLElement>;
        let elementButton: HTMLElement;
        beforeEach(() => {
            inputTextElements = screen.getAllByRole('textbox'); // <input text>
            elementButton = screen.getByRole('button');
        });
        test('Then form could be used for type content', () => {
            expect(inputTextElements[0]).toBeInTheDocument();
            expect(inputTextElements[1]).toBeInTheDocument();
            userEvent.type(inputTextElements[0], mockName);
            userEvent.type(inputTextElements[1], mockCreator);
            expect(inputTextElements[0]).toHaveValue(mockName);
            expect(inputTextElements[1]).toHaveValue(mockCreator);
        });
        test('Then form could be used for send the function received in props', () => {
            userEvent.type(inputTextElements[0], mockName);
            userEvent.type(inputTextElements[1], mockCreator);
            userEvent.click(elementButton);
            expect(handleAdd).toHaveBeenCalled();
        });
        test('Then form could be used also without value for responsible', () => {
            userEvent.type(inputTextElements[0], mockCreator);
            userEvent.click(elementButton);
            expect(handleAdd).toHaveBeenCalled();
        });
    });
});
