import { FC } from 'react';
import { AnimeField } from '../ducks/features/anime/animeSlice';
import styled from 'styled-components';

const Anime: FC<AnimeField> = (props) => {
    return (
        <Card>
            <CardImg src={props.image_url} alt="" />
            <CardTitle>{props.title.slice(0, 14)}...</CardTitle>
        </Card>
    );
};

const Card = styled.div`
    width: 15rem;
    height: 23rem;
    border-radius: 0.8rem;
    background-color: var(--clr-green);
    overflow: hidden;
    display: flex;
    flex-direction: column;
`;

const CardImg = styled.img`
    height: 19rem;
    width: 100%;
    object-fit: cover;
    display: block;
`;

const CardTitle = styled.div`
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
`;

export default Anime;
