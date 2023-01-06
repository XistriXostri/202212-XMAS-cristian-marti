import { List } from '../../components/robot/list/robot.list';
import { RobotStructure } from '../../types/robot';

export default function FavouritesPage({
    robots,
    handleDelete,
    handleUpdate,
}: {
    handleDelete: (id: string) => Promise<void>;
    handleUpdate: (robot: Partial<RobotStructure>) => Promise<void>;
    robots: Array<RobotStructure>;
}) {
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
