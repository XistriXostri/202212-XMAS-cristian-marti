import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from '../../pages/home/home.page';
import RobotsPage from '../../pages/robots/robots.page';
import { MenuItems } from '../../types/menu.item';
import { Robot, RobotStructure } from '../../types/robot';

export function AppRoutes({
    items,
    robots,
    handleAdd,
    handleUpdate,
    handleDelete,
}: {
    items: MenuItems;
    robots: Array<RobotStructure>;
    handleAdd: (robot: Robot) => void;
    handleUpdate: (robot: Partial<RobotStructure>) => Promise<void>;
    handleDelete: (id: string) => Promise<void>;
}) {
    return (
        <Routes>
            <Route path={''} element={<HomePage></HomePage>}></Route>
            <Route path={items[0].path} element={<HomePage></HomePage>}></Route>
            <Route
                path={items[1].path}
                element={
                    <RobotsPage
                        handleDelete={handleDelete}
                        handleUpdate={handleUpdate}
                        robots={robots}
                        handleAdd={handleAdd}
                    ></RobotsPage>
                }
            ></Route>
            <Route
                path={'*'}
                element={<Navigate to="" replace></Navigate>}
            ></Route>
        </Routes>
    );
}
