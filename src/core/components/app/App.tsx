import React, { useEffect } from 'react';
import { useRobots } from '../../hooks/use.robots';
import { MenuItems } from '../../types/menu.item';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';
import { Menu } from '../menu/menu';
import { AppRoutes } from '../routes/app.routes';

import './App.css';

function App() {
    const items: MenuItems = [
        { path: '/home', label: 'Home' },
        { path: '/robots', label: 'Robots' },
    ];

    const { robots, handleDelete, handleAdd, handleUpdate, handleLoad } =
        useRobots();

    useEffect(() => {
        handleLoad();
    }, [handleLoad]);

    return (
        <>
            <Header>
                <Menu items={items}></Menu>
            </Header>
            <AppRoutes
                items={items}
                handleDelete={handleDelete}
                handleUpdate={handleUpdate}
                robots={robots}
                handleAdd={handleAdd}
            ></AppRoutes>
            <Footer></Footer>
        </>
    );
}

export default App;
