import { useCallback, useEffect, useMemo, useState } from 'react';
import { RobotStructure } from '../types/robot';
import { RobotsRepo } from '../services/repository/repo.robots';
import { consoleDebug } from '../../tools/debug';

export type UseRobots = {
    robots: Array<RobotStructure>;
    getStatus: () => Status;
    getRobots: () => Array<RobotStructure>;
    handleLoad: () => Promise<void>;
    handleAdd: (robotData: RobotStructure) => Promise<void>;
    handleUpdate: (robot: Partial<RobotStructure>) => Promise<void>;
    handleDelete: (id: RobotStructure['id']) => Promise<void>;
};

type Status = 'Starting' | 'Loading' | 'Loaded';
export function useRobots() {
    const repo = useMemo(() => new RobotsRepo(), []);
    consoleDebug('useRobots Instance');

    const initialState = Array<RobotStructure>;
    const initialStatus = 'Starting' as Status;
    const [robots, setRobots] = useState<RobotStructure[]>(initialState);
    const [status, setStatus] = useState(initialStatus);

    const getRobots = () => robots;
    const getStatus = () => status;

    useEffect(() => {
        sessionStorage.setItem('totalRobots', JSON.stringify(robots.length));
    }, [robots]);

    const handleLoad = useCallback(async () => {
        try {
            setStatus('Loading');
            const robots = await repo.load();
            setRobots(robots);
            setStatus('Loaded');
            consoleDebug('LOAD Notes');
        } catch (error) {
            handleError(error as Error);
        }
    }, [repo]);

    const handleAdd = async function (robot: RobotStructure) {
        try {
            const newRobot = await repo.create(robot);
            setRobots([...robots, newRobot]);
        } catch (error) {
            handleError(error as Error);
        }
    };

    const handleUpdate = async function (
        robotPayload: Partial<RobotStructure>
    ) {
        try {
            const updatedRobot = await repo.update(robotPayload);

            setRobots((previousRobots) =>
                previousRobots.map((robot) =>
                    robot.id === updatedRobot.id ? updatedRobot : robot
                )
            );
        } catch (error) {
            handleError(error as Error);
        }
    };

    const handleDelete = async function (id: RobotStructure['id']) {
        try {
            const deletedRobot = await repo.delete(id);
            setRobots((prev) =>
                prev.filter((item) => item.id !== deletedRobot)
            );
        } catch (error) {
            handleError(error as Error);
        }
    };

    const handleError = (error: Error) => {
        consoleDebug(error.message);
    };

    return {
        robots,
        getRobots,
        getStatus,
        handleLoad,
        handleAdd,
        handleUpdate,
        handleDelete,
    };
}
