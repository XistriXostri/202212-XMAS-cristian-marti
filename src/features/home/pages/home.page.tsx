import { useEffect } from 'react';
import { useRobots } from '../../robots/hooks/use.robots';

export default function HomePage() {
    const { getRobots, handleLoad } = useRobots();

    useEffect(() => {
        handleLoad();
    }, [handleLoad]);

    const totalRobots = getRobots().length;

    return (
        <>
            <h2 className="home__title">Home</h2>
            <p className="home__text">
                Robots: {totalRobots ? totalRobots : 0}
            </p>
        </>
    );
}
