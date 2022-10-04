import './appHeader.scss';

const AppHeader = () => {
    return (
        <header className="app__header">
            <h1 className="app__title">
                <p href="#">
                    <span>Marvel</span> information portal
                </p>
            </h1>
            <nav className="app__menu">
                <ul>
                    <li><p href="#">Characters</p></li>
                    /
                    <li><p href="#">Comics</p></li>
                </ul>
            </nav>
        </header>
    )
}

export default AppHeader;