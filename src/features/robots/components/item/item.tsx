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
        <div className="item-robot">
            <span className="item-robot__start">
                {/* <input
                    type="checkbox"
                    checked={item.isImportant}
                    onChange={handleChange}
                /> */}
                <span>{item.id}</span>
            </span>
            <span className="item-note__middle">
                <output>{item.velocity}</output>
                <output>{item.strength}</output>
                <output>{item.creationDate}</output>
                <output>{item.creator}</output>
            </span>
            <span
                role="button"
                className="item-robot__end button"
                onClick={handleClick}
            >
                🗑️
            </span>
        </div>
    );
}
