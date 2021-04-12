import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Carousel } from "react-bootstrap";

const CarouselItemBuilder = ({ title, desc, icon, onClick }) => {
    console.log(title);
    return (
        <Carousel.Item className="home__carousel__item">
            <div className="home__carousel__btn-div">
                <Button className="home__carousel__btn" onClick={onClick}>
                    <FontAwesomeIcon icon={icon} />
                </Button>
            </div>
            <Carousel.Caption className="home__carousel__caption">
                <h3>{title}</h3>
                <p>{desc}</p>
            </Carousel.Caption>
        </Carousel.Item>
    );
};

export default CarouselItemBuilder;
