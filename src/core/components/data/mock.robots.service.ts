import { getStorageList, setStorageList } from '../../services/storage/storage';
import { consoleDebug } from '../../../tools/debug';
import { Robot, RobotStructure } from '../../types/robot';
import { ROBOTS } from './mock.robots';

export const getRobots = async (): Promise<Array<RobotStructure>> => {
    const data = getStorageList<Robot>('Robots');
    if (!data.length) {
        setStorageList('Robots', ROBOTS);
        return ROBOTS;
    }
    return data;
};

export const getRobotsDelay = (): Promise<Array<RobotStructure>> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = getStorageList<Robot>('Robots');
            if (!data.length) {
                setStorageList('Notes', ROBOTS);
                resolve(ROBOTS);
            }
            resolve(data);
        }, 2000);
    });
};

export const saveRobots = async (Robots: Array<Robot>) => {
    consoleDebug('Saving');
    setStorageList('Robots', Robots);
};
