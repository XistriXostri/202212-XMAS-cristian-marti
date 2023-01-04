import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from '../../../features/home/pages/home.page';
import RobotsPage from '../../../features/robots/pages/robots.page';

import { MenuItems } from '../../types/menu.item';

export function AppRoutes({ items }: { items: MenuItems }) {
    return (
        <Routes>
            <Route path={''} element={<HomePage></HomePage>}></Route>
            <Route path={items[0].path} element={<HomePage></HomePage>}></Route>
            <Route
                path={items[1].path}
                element={<RobotsPage></RobotsPage>}
            ></Route>
            <Route
                path={'*'}
                element={<Navigate to="" replace></Navigate>}
            ></Route>
        </Routes>
    );
}
