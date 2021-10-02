import Anime from './Anime';
import styled from 'styled-components';

const AnimeList = (): JSX.Element => {
    return (
        <AnimeLs>
            <Anime />
        </AnimeLs>
    );
};

const AnimeLs = styled.div`
    width: 92%;
    margin: 0 auto;
`;

export default AnimeList;
