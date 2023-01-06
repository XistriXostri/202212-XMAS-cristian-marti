import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { MenuItems } from '../../types/menu.item';
import { mockArrayMenu } from '../data/mock.menu';
import { Menu } from './menu';

describe('Given Menu component', () => {
    const mockItems: MenuItems = mockArrayMenu;

    test('renders Menu', () => {
        render(
            <BrowserRouter>
                <Menu items={mockItems}></Menu>
            </BrowserRouter>
        );

        const elements = [
            screen.getByText(/Home/i),
            screen.getByText(/Robots/i),
            screen.getByText(/Favourites/i),
        ];

        expect(elements[0]).toBeInTheDocument();
        expect(elements[1]).toBeInTheDocument();
        expect(elements[2]).toBeInTheDocument();
    });
});
