import React from 'react';
import { MenuItem } from '../../types/menu.item';
import { AppRoutes } from '../routes/app.routes';

import './App.css';

function App() {
    const items: MenuItems = [
        { path: '/home', label: 'Home' },
        { path: '/robots', label: 'Robots' },
    ];

    return (
        <>
            <AppRoutes items={items}></AppRoutes>
        </>
    );
}

export default App;
