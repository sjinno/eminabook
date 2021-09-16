import SearchBox from './SearchBox';

const Main = () => {
    return (
        <div>
            <Title />
            <SearchBox />
        </div>
    );
};

const Title = () => {
    return <h1 className="title">AniKen</h1>;
};

export default Main;
