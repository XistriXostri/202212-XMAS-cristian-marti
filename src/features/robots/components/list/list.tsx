import { useEffect } from 'react';
import { useRobots } from '../../hooks/use.robots';
import { Add } from '../add/add';
import { Item } from '../item/item';
import './list.css';

export function List() {
    const { getRobots, handleLoad, handleAdd, handleDelete, handleUpdate } =
        useRobots();

    useEffect(() => {
        handleLoad();
    }, [handleLoad]);

    return (
        <>
            <Add handleAdd={handleAdd}></Add>
            <h3>Lista de notas</h3>
            {!getRobots().length ? (
                <p>Loading ....</p>
            ) : (
                <ul className="note-list">
                    {getRobots().map((item) => {
                        return (
                            <li key={item.id}>
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
        </>
    );
}
