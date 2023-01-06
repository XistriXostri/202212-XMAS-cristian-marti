export type RobotStructure = {
    id: string;
    name: string;
    velocity: number;
    strength: number;
    creationDate: string;
    creator: string;
    image: string;
    isFavourite: boolean;
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
    image: string;
    isFavourite: boolean;

    constructor(
        public name: string,
        public velocity: number,
        public strength: number,
        public creator: string
    ) {
        this.id = Robot.generateId();
        this.creationDate = Robot.generateDate();
        this.image = `https://robohash.org/${this.name}.png`;
        this.isFavourite = false;
    }
}
