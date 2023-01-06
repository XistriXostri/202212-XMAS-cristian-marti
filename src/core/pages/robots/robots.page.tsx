import { Add } from '../../components/robot/add/robot.add';
import { List } from '../../components/robot/list/robot.list';
import { Robot, RobotStructure } from '../../types/robot';

export default function RobotsPage({
    robots,
    handleDelete,
    handleAdd,
    handleUpdate,
}: {
    handleDelete: (id: string) => Promise<void>;
    handleUpdate: (robot: Partial<RobotStructure>) => Promise<void>;
    robots: Array<RobotStructure>;
    handleAdd: (robot: Robot) => void;
}) {
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
