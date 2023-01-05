import { RobotStructure } from '../../models/robot';

export function Item({
    item,
    handleUpdate,
    handleDelete,
}: {
    item: RobotStructure;
    handleUpdate: (robot: Partial<RobotStructure>) => void;
    handleDelete: (id: RobotStructure['id']) => void;
}) {
    const handleClick = (action: string) => {
        switch (action) {
            case 'delete':
                handleDelete(item.id);
                break;
            case 'modify':
                item.isFavourite = !item.isFavourite;
                handleUpdate(item);
                break;
            case 'fav':
                break;
        }
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
                    onClick={() => handleClick('fav')}
                >
                    ⭐
                </span>
                <span
                    role="button"
                    className="robot__button"
                    onClick={() => handleClick('modify')}
                >
                    🛠
                </span>
                <span
                    role="button"
                    className="robot__button"
                    onClick={() => handleClick('delete')}
                >
                    🗑️
                </span>
            </div>
        </li>
    );
}
