import { SyntheticEvent, useState } from 'react';
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
    const [updating, setUpdating] = useState(false);

    const [updateData, setUpdateData] = useState(item);

    const handleInput = (event: SyntheticEvent) => {
        const element = event.target as HTMLFormElement;
        setUpdateData({ ...updateData, [element.name]: element.value });
    };

    const handleClick = (event: SyntheticEvent) => {
        const action = (event.target as HTMLElement).id;
        switch (action) {
            case 'delete':
                handleDelete(item.id);
                break;
            case 'modify':
                if (updating) handleUpdate(updateData);
                setUpdating(!updating);
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
                {!updating && (
                    <>
                        <h2 className="robot__title">{item.name}</h2>
                        <p>Velocity: {item.velocity}</p>
                        <p>Strength: {item.strength}</p>
                        <p>Creator: {item.creator}</p>
                        <p>Creation date: {item.creationDate}</p>
                    </>
                )}
                {updating && (
                    <>
                        <h2 className="robot__title">
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={updateData.name}
                                onInput={handleInput}
                                required
                            />
                        </h2>
                        <p>
                            Velocity:
                            <input
                                type="range"
                                name="velocity"
                                id="velocity"
                                min="0"
                                max="10"
                                value={updateData.velocity}
                                onInput={handleInput}
                                required
                            />
                            <output>{updateData.velocity}</output>
                        </p>
                        <p>
                            Strength:
                            <input
                                type="range"
                                name="strength"
                                id="strength"
                                min="0"
                                max="10"
                                value={updateData.strength}
                                onInput={handleInput}
                                required
                            />
                            <output>{updateData.strength}</output>
                        </p>
                    </>
                )}
            </div>
            <div className="robot__buttons">
                <span role="button" id="fav" onClick={handleClick}>
                    {item.isFavourite ? '⭐' : '✩'}
                </span>
                <span role="button" id="modify" onClick={handleClick}>
                    🛠
                </span>
                <span role="button" id="delete" onClick={handleClick}>
                    🗑️
                </span>
            </div>
        </>
    );
}
