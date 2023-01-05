import { useEffect } from 'react';
import { useRobots } from '../../hooks/use.robots';
import { Add } from '../add/add';
import { Item } from '../item/item';

export function List() {
    const { getRobots, handleLoad, handleAdd, handleDelete, handleUpdate } =
        useRobots();

    useEffect(() => {
        handleLoad();
    }, [handleLoad]);

    return (
        <>
            <Add handleAdd={handleAdd}></Add>
            <div className="list__section">
                <h3 className="list__title">Robots list</h3>
                {!getRobots().length ? (
                    <p>Loading ....</p>
                ) : (
                    <ul className="list__robots">
                        {getRobots().map((item) => {
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
                )}
            </div>
        </>
    );
}
