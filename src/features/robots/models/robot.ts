export type RobotStructure = {
    id: string;
    velocity: number;
    strength: number;
    creationDate: string;
    creator: string;
};

export class Robot implements RobotStructure {
    static generateId() {
        const aNumbers = new Uint32Array(1);
        window.crypto?.getRandomValues(aNumbers);
        return ('000000' + aNumbers[0]).slice(-6);
    }
    static generateDate() {
        const today = new Date();
        return today.toLocaleDateString('es-UE');
    }

    id: string;
    creationDate: string;
    constructor(
        public velocity: number,
        public strength: number,
        public creator: string
    ) {
        this.id = Robot.generateId();
        this.creationDate = Robot.generateDate();
    }
}
