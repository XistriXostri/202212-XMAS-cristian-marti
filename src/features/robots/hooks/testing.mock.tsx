import { Robot } from '../models/robot';
import { RobotsRepo } from '../services/repository/repo.robots';
export const mockRobot1 = new Robot(1, 1, 'user');
mockRobot1.id = '000001';
export const mockRobot2 = new Robot(2, 2, 'user');
mockRobot2.id = '000002';
export const mockRobots = [mockRobot1, mockRobot2];
export const mockAddRobot = new Robot(3, 3, 'user');
mockAddRobot.id = '000003';
export const mockUpdateRobot = { ...mockRobot2, title: 'Update note' };

export const mockValidRepoResponse = () => {
    (RobotsRepo.prototype.load as jest.Mock).mockResolvedValue(mockRobots);
    (RobotsRepo.prototype.create as jest.Mock).mockResolvedValue(mockAddRobot);
    (RobotsRepo.prototype.update as jest.Mock).mockResolvedValue(
        mockUpdateRobot
    );
    (RobotsRepo.prototype.delete as jest.Mock).mockResolvedValue(mockRobot1.id);
};

const error = new Error('Testing errors');
export const mockNoValidRepoResponse = () => {
    (RobotsRepo.prototype.load as jest.Mock).mockRejectedValue(error);
    (RobotsRepo.prototype.create as jest.Mock).mockRejectedValue(error);
    (RobotsRepo.prototype.update as jest.Mock).mockRejectedValue(error);
    (RobotsRepo.prototype.delete as jest.Mock).mockRejectedValue(error);
};
