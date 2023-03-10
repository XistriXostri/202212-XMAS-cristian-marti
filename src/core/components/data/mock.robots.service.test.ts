import { getStorageList, setStorageList } from '../../services/storage/storage';
import { Robot } from '../../types/robot';
import { ROBOTS } from './mock.robots';
import { getRobots, getRobotsDelay, saveRobots } from './mock.robots.service';

jest.mock('../../../core/services/storage/storage');

const mockData = ['test'];
const testGetData = async () => {
    const result = await getRobots();
    expect(getStorageList).toHaveBeenCalled();
    expect(result).toEqual(mockData);
};

const testGetDefaultData = async () => {
    const result = await getRobots();
    expect(getStorageList).toHaveBeenCalled();
    expect(setStorageList).toHaveBeenCalled();
    expect(result).toEqual(ROBOTS);
};

const testGetDataDelay = async () => {
    const result = await getRobotsDelay();
    expect(getStorageList).toHaveBeenCalled();
    expect(result).toEqual(mockData);
};

const testGetDefaultDataDelay = async () => {
    const result = await getRobotsDelay();
    expect(getStorageList).toHaveBeenCalled();
    expect(setStorageList).toHaveBeenCalled();
    expect(result).toEqual(ROBOTS);
};

describe('Given getRobots or getRobotsDelay', () => {
    describe('When I call it with data in local storage', () => {
        beforeEach(() => {
            (getStorageList as jest.Mock).mockReturnValue(mockData);
        });
        test('Then the data should be obtained', testGetData);
        test(
            'Then the data should be obtained with delay also',
            testGetDataDelay
        );
    });
    describe('When I call it without data in local storage', () => {
        beforeEach(() => {
            (getStorageList as jest.Mock).mockReturnValue([]);
        });
        test('Then the data from ROBOT should be obtained', testGetDefaultData);
        test(
            'Then the data from ROBOT should be obtained  with delay also',
            testGetDefaultDataDelay
        );
    });
});

describe('Given saveRobots', () => {
    describe('When I call it', () => {
        test('Then localStorage should be use with the data', () => {
            const mockRobots: Array<Robot> = [];
            saveRobots(mockRobots);
            expect(setStorageList).toHaveBeenCalledWith('Robots', mockRobots);
        });
    });
});
