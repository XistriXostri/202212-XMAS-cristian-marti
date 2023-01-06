import { RobotStructure } from '../../../types/robot';

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
            case 'fav':
                item.isFavourite = !item.isFavourite;
                handleUpdate(item);
                break;
        }
    };

    return (
        <>
            <div>
                <img
                    className="robot__image"
                    src={item.image}
                    alt={item.name}
                />
            </div>
            <div className="robot__features">
                <h2 className="robot__title">{item.name}</h2>
                <p>Velocity: {item.velocity}</p>
                <p>Strength: {item.strength}</p>
                <p>Creator: {item.creator}</p>
                <p>Creation date: {item.creationDate}</p>
            </div>
            <div className="robot__buttons">
                <span role="button" onClick={() => handleClick('fav')}>
                    {item.isFavourite ? '⭐' : '✩'}
                </span>
                <span role="button">🛠</span>
                <span role="button" onClick={() => handleClick('delete')}>
                    🗑️
                </span>
            </div>
        </>
    );
}
