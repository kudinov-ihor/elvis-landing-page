import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import './history.scss';
import SectionTitle from '../sectionTitle/SectionTitle';
import Photo from '../../assets/images/history_gallery1.png';
function History() {
  return (
    <section className='history'>
        <div className="container">
            <SectionTitle title="Visit Graceland"/>
            <Carousel 
                className='history__hero'
                controls={false}
                interval={1000}
                fade
                >
                <Carousel.Item >
                    <img
                    className="d-block w-100"
                    src={Photo}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item >
                    <img
                    className="d-block w-100"
                    src={Photo}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item >
                    <img
                    className="d-block w-100"
                    src={Photo}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item >
                    <img
                    className="d-block w-100"
                    src={Photo}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    </section>
  )
}

export default History