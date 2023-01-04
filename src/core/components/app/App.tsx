import React from 'react';
import { MenuItems } from '../../types/menu.item';
import { Layout } from '../layout/layout';
import { AppRoutes } from '../routes/app.routes';

import './App.css';

function App() {
    const items: MenuItems = [
        { path: '/home', label: 'Home' },
        { path: '/robots', label: 'Robots' },
    ];

    return (
        <>
            <Layout items={items}>
                <AppRoutes items={items}></AppRoutes>
            </Layout>
        </>
    );
}

export default App;
