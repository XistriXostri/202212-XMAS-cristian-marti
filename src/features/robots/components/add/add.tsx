import { SyntheticEvent, useState } from 'react';

import { Robot } from '../../models/robot';
import './add.css';

export function Add({ handleAdd }: { handleAdd: (robot: Robot) => void }) {
    const initialFormData: Partial<Robot> = {
        velocity: 0,
        strength: 0,
        creator: '',
    };

    const [formData, setFormData] = useState(initialFormData);

    const handleInput = (ev: SyntheticEvent) => {
        const element = ev.target as HTMLFormElement;
        setFormData({ ...formData, [element.name]: element.value });
    };

    const handleSubmit = (ev: SyntheticEvent) => {
        ev.preventDefault();
        handleAdd(
            new Robot(
                formData.velocity as number,
                formData.strength as number,
                formData.creator ? formData.creator : 'unknown'
            )
        );
        setFormData(initialFormData);
    };

    return (
        <section>
            <h3>Create Robot</h3>
            <form className="add-robot" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="velocity">Velocity</label>
                    <input
                        type="number"
                        name="velocity"
                        id="velocity"
                        placeholder="Velocity (0 - 10)"
                        min="0"
                        max="10"
                        value={formData.velocity}
                        onInput={handleInput}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="strength">Strength</label>
                    <input
                        type="number"
                        name="strength"
                        id="strength"
                        placeholder="strength (0 - 10)"
                        min="0"
                        max="10"
                        value={formData.strength}
                        onInput={handleInput}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="creator">Creator name</label>
                    <input
                        type="text"
                        name="creator"
                        id="creator"
                        value={formData.creator}
                        onInput={handleInput}
                        placeholder="Creator of the robot"
                    />
                </div>
                <div>
                    <button type="submit">Create</button>
                </div>
            </form>
        </section>
    );
}
