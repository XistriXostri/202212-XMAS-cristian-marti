import { SyntheticEvent, useState } from 'react';
import { Robot } from '../../../types/robot';

export function Add({ handleAdd }: { handleAdd: (robot: Robot) => void }) {
    const initialFormData: Partial<Robot> = {
        name: '',
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
                formData.name as string,
                formData.velocity as number,
                formData.strength as number,
                formData.creator ? formData.creator : 'unknown'
            )
        );
        setFormData(initialFormData);
    };

    return (
        <section className="add__section">
            <h2 className="add__title">Create Robot</h2>
            <form className="add__robot" onSubmit={handleSubmit}>
                <div className="add__textInput">
                    <div>
                        <label htmlFor="name">Robot name:</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            value={formData.name}
                            onInput={handleInput}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="creator">Creator name:</label>
                        <input
                            type="text"
                            name="creator"
                            id="creator"
                            value={formData.creator}
                            onInput={handleInput}
                        />
                    </div>
                </div>
                <div className="add__rangeInput">
                    <div>
                        <label htmlFor="velocity">Velocity</label>
                        <input
                            type="range"
                            name="velocity"
                            id="velocity"
                            min="0"
                            max="10"
                            value={formData.velocity}
                            onInput={handleInput}
                            required
                        />
                        <output>{formData.velocity}</output>
                    </div>
                    <div>
                        <label htmlFor="strength">Strength</label>
                        <input
                            type="range"
                            name="strength"
                            id="strength"
                            min="0"
                            max="10"
                            value={formData.strength}
                            onInput={handleInput}
                            required
                        />
                        <output>{formData.strength}</output>
                    </div>
                </div>
                <div>
                    <button type="submit">
                        <p>Create</p>
                    </button>
                </div>
            </form>
        </section>
    );
}
