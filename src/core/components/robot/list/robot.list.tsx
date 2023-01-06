import { RobotStructure } from '../../../types/robot';
import { Item } from '../item/robot.item';

export function List({
    handleDelete,
    handleUpdate,
    robots,
}: {
    handleDelete: (id: string) => Promise<void>;
    handleUpdate: (robot: Partial<RobotStructure>) => Promise<void>;
    robots: Array<RobotStructure>;
}) {
    return (
        <>
            <div className="list__section">
                <h3 className="list__title">Robots list</h3>

                <ul className="list__robots">
                    {robots.map((item) => {
                        return (
                            <li className="robot" key={item.id}>
                                <Item
                                    item={item}
                                    handleUpdate={handleUpdate}
                                    handleDelete={handleDelete}
                                ></Item>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </>
    );
}
