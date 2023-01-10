import { useEffect } from 'react';
import { Add } from '../../components/robot/add/robot.add';
import { List } from '../../components/robot/list/robot.list';
import { useRobots } from '../../hooks/use.robots';

export default function RobotsPage() {
    const { robots, handleDelete, handleAdd, handleLoad, handleUpdate } =
        useRobots();

    useEffect(() => {
        handleLoad();
    }, [handleLoad]);

    return (
        <>
            <h2 className="page__title">Robots Page</h2>
            <Add handleAdd={handleAdd}></Add>
            <List
                handleDelete={handleDelete}
                handleUpdate={handleUpdate}
                robots={robots}
            ></List>
        </>
    );
}
