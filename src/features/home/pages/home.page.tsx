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
            <h2 className="page__title">Home</h2>
            <hr className="bar"></hr>
            <p className="page__text">
                Robots: {totalRobots ? totalRobots : 0}
            </p>
        </>
    );
}
