import { Robot, RobotStructure } from '../../types/robot';

export const ROBOTS = [
    new Robot('wally', 1, 1, 'Cristian'),
    new Robot('Pepe', 2, 2, 'Pepe'),
];

export const robotMock: RobotStructure = {
    id: '000001',
    name: 'wally',
    velocity: 1,
    strength: 1,
    creationDate: '04/01/2023',
    creator: 'Cristian',
    image: 'https://robohash.org/wally.png',
    isFavourite: true,
};

export const arrayRobotMock: Array<RobotStructure> = [
    {
        id: '000001',
        name: 'wally',
        velocity: 1,
        strength: 1,
        creationDate: '04/01/2023',
        creator: 'Cristian',
        image: 'https://robohash.org/wally.png',
        isFavourite: true,
    },
    {
        id: '000002',
        name: 'pepe',
        velocity: 2,
        strength: 2,
        creationDate: '04/01/2023',
        creator: 'Pepe',
        image: 'https://robohash.org/pepe.png',
        isFavourite: false,
    },
];
