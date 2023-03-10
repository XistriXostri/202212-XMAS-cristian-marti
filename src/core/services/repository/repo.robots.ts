import { Repository } from '../../types/repository';
import { RobotStructure } from '../../types/robot';

const invalidIdError = new Error('Invalid ID');

export class RobotsRepo implements Repository<RobotStructure> {
    constructor(private url = 'http://localhost:3300/robots/') {}

    async load(): Promise<RobotStructure[]> {
        const resp = await fetch(this.url);
        if (!resp.ok)
            throw new Error(`Error ${resp.status}: ${resp.statusText}`);
        return await resp.json();
    }
    async queryId(id: string): Promise<RobotStructure> {
        if (!id || typeof id !== 'string')
            return Promise.reject(invalidIdError);
        const resp = await fetch(this.url + id);
        if (!resp.ok)
            throw new Error(`Error ${resp.status}: ${resp.statusText}`);
        return await resp.json();
    }

    async create(payload: Partial<RobotStructure>): Promise<RobotStructure> {
        const resp = await fetch(this.url, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
                'Content-type': 'application/json',
            },
        });
        if (!resp.ok)
            throw new Error(`Error ${resp.status}: ${resp.statusText}`);
        return await resp.json();
    }

    async update(payload: Partial<RobotStructure>): Promise<RobotStructure> {
        if (!payload.id) return Promise.reject(invalidIdError);
        const resp = await fetch(this.url + '/' + payload.id + '/', {
            method: 'PATCH',
            body: JSON.stringify(payload),
            headers: {
                'Content-type': 'application/json',
            },
        });
        if (!resp.ok)
            throw new Error(`Error ${resp.status}: ${resp.statusText}`);
        return await resp.json();
    }
    async delete(id: RobotStructure['id']): Promise<RobotStructure['id']> {
        if (!id) return Promise.reject(invalidIdError);
        const resp = await fetch(this.url + '/' + id + '/', {
            method: 'DELETE',
        });
        if (!resp.ok)
            throw new Error(`Error ${resp.status}: ${resp.statusText}`);
        return id;
    }
}
