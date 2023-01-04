import { Robot } from './robot';

describe('Given "Robot" data model', () => {
    test('Then it should instantiate a Robot', () => {
        const mockVelocity = 5;
        const mockStrength = 5;
        const mockCreator = 'Test creator';
        const result = new Robot(mockVelocity, mockStrength, mockCreator);
        expect(result).toBeInstanceOf(Robot);
        expect(result).toHaveProperty('velocity', mockVelocity);
        expect(result).toHaveProperty('strength', mockStrength);
        expect(result).toHaveProperty('creator', mockCreator);
    });
});

//falta testear id y fecha
