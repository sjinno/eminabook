import Carousel from 'react-bootstrap/Carousel';

const Anime = () => {
    return (
        <Carousel interval={null}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://dummyimage.com/600x400/000/fff&text=+"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>
                        Nulla vitae elit libero, a pharetra augue mollis
                        interdum.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://dummyimage.com/600x400/000/fff&text=+"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://dummyimage.com/600x400/000/fff&text=+"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl
                        consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Anime;

// fields {
//     mal_id: number;
//     image_url: string;
//     title: string;
//     synopsis: string;
//     episodes: number;
//     score: number;
//     rated: string;
// }

// https://api.jikan.moe/v3/anime/1535
// Indivisual anime detail
// field {
//     image_url
//     title_english
//     title_japanese
//     rank
//     popularity
//     synopsys
//     premiered
// }
