import { renderHook } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import {
    mockRobot2,
    mockAddRobot,
    mockUpdateRobot,
    mockValidRepoResponse,
    mockNoValidRepoResponse,
} from './testing.mock';
import { RobotsRepo } from '../services/repository/robots.repo';
import { UseRobots, useRobots } from './use.robots';
import * as debug from '../../../tools/debug';

jest.mock('../services/repository/robots.repo');

RobotsRepo.prototype.load = jest.fn();
RobotsRepo.prototype.create = jest.fn();
RobotsRepo.prototype.update = jest.fn();
RobotsRepo.prototype.delete = jest.fn();

describe(`Given useNotes (custom hook)
            render with a virtual component`, () => {
    let current: UseRobots;
    let spyConsole: jest.SpyInstance;
    beforeEach(() => {
        ({
            result: { current },
        } = renderHook(() => {
            return useRobots();
        }));
        spyConsole = jest.spyOn(debug, 'consoleDebug');
    });
    describe(`When the repo io working OK`, () => {
        beforeEach(mockValidRepoResponse);
        test('Then its data should be accesible starting empty', () => {
            expect(current.getRobots()).toEqual([]);
        });
        test('Then its function handleLoad should be add notes to the state', async () => {
            expect(current.getStatus()).toBe('Starting');
            await act(async () => {
                current.handleLoad();
            });
            expect(RobotsRepo.prototype.load).toHaveBeenCalled();
            expect(spyConsole).toBeCalledWith('LOAD Robots');
        });
        test('Then its function handleAdd should be used', async () => {
            await act(async () => {
                await current.handleAdd(mockAddRobot);
            });
            expect(RobotsRepo.prototype.create).toHaveBeenCalled();
        });

        test('Then its function handleUpdate should be used', async () => {
            await act(async () => {
                current.handleLoad();
            });
            expect(RobotsRepo.prototype.load).toHaveBeenCalled();
            await act(async () => {
                current.handleUpdate(mockUpdateRobot);
            });
            expect(RobotsRepo.prototype.update).toHaveBeenCalled();
        });

        test('Then its function handleDelete should be used', async () => {
            await act(async () => {
                current.handleLoad();
            });
            expect(RobotsRepo.prototype.load).toHaveBeenCalled();
            await act(async () => {
                current.handleDelete(mockRobot2.id);
            });
            expect(RobotsRepo.prototype.delete).toHaveBeenCalled();
        });
    });
    describe(`When the repo is NOT working OK`, () => {
        beforeEach(mockNoValidRepoResponse);
        test('Then its function handleLoad should be used', async () => {
            await act(async () => {
                current.handleLoad();
            });
            expect(RobotsRepo.prototype.load).toHaveBeenCalled();
            expect(spyConsole).toHaveBeenLastCalledWith('Testing errors');
        });
        test('Then its function handleAdd should be used', async () => {
            await act(async () => {
                current.handleAdd(mockAddRobot);
            });
            expect(RobotsRepo.prototype.create).toHaveBeenCalled();
            expect(spyConsole).toHaveBeenLastCalledWith('Testing errors');
        });

        test('Then its function handleUpdate should be used', async () => {
            await act(async () => {
                current.handleUpdate(mockUpdateRobot);
            });
            expect(RobotsRepo.prototype.update).toHaveBeenCalled();
            expect(spyConsole).toHaveBeenLastCalledWith('Testing errors');
        });

        test('Then its function handleDelete should be used', async () => {
            await act(async () => {
                current.handleDelete(mockRobot2.id);
            });
            expect(RobotsRepo.prototype.delete).toHaveBeenCalled();
            expect(spyConsole).toHaveBeenLastCalledWith('Testing errors');
        });
    });
});
