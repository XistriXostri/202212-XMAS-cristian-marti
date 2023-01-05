import { RobotStructure } from '../../models/robot';

export function Item({
    item,
    handleUpdate,
    handleDelete,
}: {
    item: RobotStructure;
    handleUpdate: (note: Partial<RobotStructure>) => void;
    handleDelete: (id: RobotStructure['id']) => void;
}) {
    // const handleChange = () => {
    //     item.isImportant = !item.isImportant;
    //     handleUpdate(item);
    // };

    const handleClick = () => {
        handleDelete(item.id);
    };

    return (
        <li className="robot" key={item.id}>
            <div>
                <img
                    className="robot__image"
                    src={item.image}
                    alt={item.name}
                />
            </div>
            <div>
                <h2 className="robot__title">{item.name}</h2>
                <p className="robot__feature">Velocity: {item.velocity}</p>
                <p className="robot__feature">Strength: {item.strength}</p>
                <p className="robot__feature">Creator: {item.creator}</p>
                <p className="robot__feature">
                    Creation date: {item.creationDate}
                </p>
            </div>
            <div>
                <span
                    role="button"
                    className="robot__button"
                    onClick={handleClick}
                >
                    ⭐
                </span>
                <span
                    role="button"
                    className="robot__button"
                    onClick={handleClick}
                >
                    🛠
                </span>
                <span
                    role="button"
                    className="robot__button"
                    onClick={handleClick}
                >
                    🗑️
                </span>
            </div>
        </li>
    );
}
