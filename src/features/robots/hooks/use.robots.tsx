import { useCallback, useMemo, useState } from 'react';
import { consoleDebug } from '../../../tools/debug';
import { Robot, RobotStructure } from '../models/robot';
import { RobotsRepo } from '../services/repository/repo.robots';

export type UseRobots = {
    getStatus: () => Status;
    getRobots: () => Array<RobotStructure>;
    handleLoad: () => Promise<void>;
    handleAdd: (robot: Robot) => Promise<void>;
    handleUpdate: (robotPayload: Partial<RobotStructure>) => Promise<void>;
    handleDelete: (id: RobotStructure['id']) => Promise<void>;
};

type Status = 'Starting' | 'Loading' | 'Loaded';

export function useRobots(): UseRobots {
    const repo = useMemo(() => new RobotsRepo(), []);

    consoleDebug('useRobots Instance'); //se puede quitar

    const initialState: Array<RobotStructure> = [];
    const [robots, setRobots] = useState(initialState);

    const initialStatus = 'Starting' as Status;
    const [status, setStatus] = useState(initialStatus);

    const getRobots = () => robots;
    const getStatus = () => status;

    const handleLoad = useCallback(async () => {
        try {
            setStatus('Loading');
            const data = await repo.load();
            setRobots(data);
            setStatus('Loaded');
            consoleDebug('LOAD Robots');
        } catch (error) {
            handleError(error as Error);
        }
    }, [repo]);

    const handleAdd = async function (robot: Robot) {
        try {
            const fullRobot = await repo.create(robot);
            setRobots((prev) => [...prev, fullRobot]);
        } catch (error) {
            handleError(error as Error);
        }
    };

    const handleUpdate = async function (
        robotPayload: Partial<RobotStructure>
    ) {
        try {
            const fullRobot = await repo.update(robotPayload);
            setRobots((prev) =>
                prev.map((item) =>
                    item.id === fullRobot.id ? fullRobot : item
                )
            );
        } catch (error) {
            handleError(error as Error);
        }
    };

    const handleDelete = async function (id: RobotStructure['id']) {
        try {
            const finalId = await repo.delete(id);
            setRobots((prev) => prev.filter((item) => item.id !== finalId));
        } catch (error) {
            handleError(error as Error);
        }
    };

    const handleError = (error: Error) => {
        consoleDebug(error.message);
    };

    return {
        getStatus,
        getRobots,
        handleLoad,
        handleAdd,
        handleUpdate,
        handleDelete,
    };
}
