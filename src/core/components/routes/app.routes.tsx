import { Routes, Route, Navigate } from 'react-router-dom';
import FavouritesPage from '../../pages/favourites/favourites.page';
import HomePage from '../../pages/home/home.page';
import RobotsPage from '../../pages/robots/robots.page';
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
                path={items[2].path}
                element={<FavouritesPage></FavouritesPage>}
            ></Route>
            <Route
                path={'*'}
                element={<Navigate to="" replace></Navigate>}
            ></Route>
        </Routes>
    );
}
