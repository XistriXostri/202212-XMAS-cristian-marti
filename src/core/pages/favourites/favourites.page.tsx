import { useEffect } from 'react';
import { List } from '../../components/robot/list/robot.list';
import { useRobots } from '../../hooks/use.robots';

export default function FavouritesPage() {
    const { robots, handleDelete, handleLoad, handleUpdate } = useRobots();

    useEffect(() => {
        handleLoad();
    }, [handleLoad]);

    return (
        <>
            <h2 className="page__title">Favourite robots</h2>
            <List
                handleDelete={handleDelete}
                handleUpdate={handleUpdate}
                robots={robots.filter((robot) => robot.isFavourite)}
            ></List>
        </>
    );
}
