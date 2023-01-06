import { useCallback, useEffect, useMemo, useState } from 'react';
import { RobotStructure } from '../types/robot';
import { RobotsRepo } from '../services/repository/repo.robots';

export type UseRobots = {
    robots: Array<RobotStructure>;
    handleLoad: () => Promise<void>;
    handleAdd: (robotData: RobotStructure) => Promise<void>;
    handleUpdate: (robot: Partial<RobotStructure>) => Promise<void>;
    handleDelete: (id: RobotStructure['id']) => Promise<void>;
};
export function useRobots() {
    const repo = useMemo(() => new RobotsRepo(), []);

    const initialState = Array<RobotStructure>;
    const [robots, setRobots] = useState<RobotStructure[]>(initialState);

    useEffect(() => {
        sessionStorage.setItem('totalRobots', JSON.stringify(robots.length));
    }, [robots]);

    const handleLoad = useCallback(async () => {
        const robots = await repo.load();
        setRobots(robots);
    }, [repo]);

    const handleAdd = async (robot: RobotStructure) => {
        const newRobot = await repo.create(robot);
        setRobots([...robots, newRobot]);
    };

    const handleUpdate = async (robotPayload: Partial<RobotStructure>) => {
        const updatedRobot = await repo.update(robotPayload);
        setRobots((previousRobots) =>
            previousRobots.map((robot) =>
                robot.id === updatedRobot.id ? updatedRobot : robot
            )
        );
    };

    const handleDelete = async function (id: RobotStructure['id']) {
        const deletedRobot = await repo.delete(id);
        setRobots((prev) => prev.filter((item) => item.id !== deletedRobot));
    };

    return {
        robots,
        handleLoad,
        handleAdd,
        handleUpdate,
        handleDelete,
    };
}
