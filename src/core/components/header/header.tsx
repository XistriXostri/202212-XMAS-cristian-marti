export function Header({ children }: { children: JSX.Element }) {
    const title = 'Robots App';

    return (
        <header aria-label="title">
            <h1>{title}</h1>
            <hr className="bar__title"></hr>
            {children}
        </header>
    );
}
