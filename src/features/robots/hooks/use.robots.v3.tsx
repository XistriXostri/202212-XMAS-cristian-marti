import { useCallback, useEffect, useMemo, useState } from 'react';
import { consoleDebug } from '../../../tools/debug';
import { Robot, RobotStructure } from '../models/robot';
import { RobotsRepo } from '../services/repository/repo.robots';

export type UseRobots = {
    robots: Array<RobotStructure>;
    handleLoad: () => Promise<void>;
    handleAdd: (robot: Robot) => Promise<void>;
    handleUpdate: (robotPayload: Partial<RobotStructure>) => Promise<void>;
    handleDelete: (id: RobotStructure['id']) => Promise<void>;
};

export function useRobots(): UseRobots {
    const repo = useMemo(() => new RobotsRepo(), []);

    consoleDebug('useRobots Instance'); //se puede quitar

    const initialState: Array<RobotStructure> = [];
    const [robots, setRobots] = useState(initialState);

    useEffect(() => {
        sessionStorage.setItem(
            'totalRobots', //ojo este nombre
            JSON.stringify(robots.length)
        );
    }, [robots]);

    const handleLoad = useCallback(async () => {
        const robotList = await repo.load();

        setRobots(robotList);
    }, [repo]);

    const handleAdd = async (robotData: RobotStructure) => {
        const newRobot = await repo.create(robotData);
        setRobots([...robots, newRobot]);
    };

    const handleUpdate = async (robot: Partial<RobotStructure>) => {
        const updatedRobot = await repo.update(robot);
        setRobots((prev) =>
            prev.map((item) =>
                item.id === updatedRobot.id ? updatedRobot : item
            )
        );
    };

    const handleDelete = async (id: RobotStructure['id']) => {
        const elementToRemove = await repo.delete(id);
        setRobots((prev) => prev.filter((item) => item.id !== elementToRemove));
    };

    return {
        robots,
        handleLoad,
        handleAdd,
        handleUpdate,
        handleDelete,
    };
}
