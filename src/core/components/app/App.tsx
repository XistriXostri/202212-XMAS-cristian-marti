import { MenuItems } from '../../types/menu.item';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';
import { Menu } from '../menu/menu';
import { AppRoutes } from '../routes/app.routes';

import './App.css';

export function App() {
    const items: MenuItems = [
        { path: '/home', label: 'Home' },
        { path: '/robots', label: 'Robots' },
        { path: '/favourites', label: 'Favourites' },
    ];

    return (
        <>
            <Header>
                <Menu items={items}></Menu>
            </Header>
            <AppRoutes items={items}></AppRoutes>
            <Footer></Footer>
        </>
    );
}

export default App;
