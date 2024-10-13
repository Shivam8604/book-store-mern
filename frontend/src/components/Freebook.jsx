/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
// import list from '../../public/list.json';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
import axios from 'axios';

const Freebook = () => {

    const [book, setBook] = useState([])

    useEffect(() => {
        const getbook = async () => {
            try {
                const response = await axios.get("http://localhost:5500/book");
                console.log(response.data);
                const data = (response.data.filter((data)=>data.category === 'free'));
                setBook(data)
            }
            catch (error) {
                console.log(error)
            }
        }
        getbook()
    }, [])

    const filterData = book.filter((data) => data.category === "free");
    console.log(filterData)


    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
            <div>
                <h1 className='font-semibold text-xl pb-2'>Free Offered Course</h1>
                <p>
                    Lorem ipsum dolor sit amet, consecteure adipisicing elit. Accusantium veritatis alias pariature ad dolor repudiantae eligendi corporis nulla non suscipit, inure neque earum ?
                </p>
            </div>

            <div className="slider-container">
                <Slider {...settings}>
                    { book.map((item) => (
                        <Cards item={item} key={item.id} />
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default Freebook