import React from 'react'
import Uttarkashi from '../assets/Uttarkashi.jpg'
import Rudraprayag from '../assets/Rudraprayag.jpg'
import Chamoli from '../assets/Chamoli.jpg'
import Pauri from '../assets/Pauri.jpg'
import Nainital from '../assets/Nainital.jpg'
import Almora from '../assets/Almora.jpg'
import next from '../assets/next.png'
import back from '../assets/back.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Clock, Star } from 'lucide-react'
import '../Components/Css/reactSlick.css'

const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <img src={next} alt='prevArrow' {...props} />
);
const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <img src={back} alt='prevArrow' {...props} />
);

const FeatureDestination = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        nextArrow: <SlickArrowLeft />,
        prevArrow: <SlickArrowRight />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
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
                    slidesToScroll: 1,
                }
            },
        ]
    };
    const destinationJson = [
      { name: 'Uttarkashi', img: Uttarkashi, time: '5 Days - 4 Nights', star: '5 (30 reviews)', price: '29,999',dis:"Experience the beauty and culture of" },
      { name: 'Rudraprayag', img: Rudraprayag, time: '5 Days - 4 Nights', star: '4.5 (15 reviews)', price: '21,000', dis:"Discover the divine charm of" },
      { name: 'Chamoli', img: Chamoli, time: '5 Days - 4 Nights', star: '4 (25 reviews)', price: '16,500', dis:"Experience the beauty and culture of" },
      { name: 'Pauri Garhwal', img: Pauri, time: '5 Days - 4 Nights', star: '5 (30 reviews)', price: '10,000', dis:"Soak in the tranquil vibes of" },
      { name: 'Nainital', img: Nainital, time: '5 Days - 4 Nights', star: '3.5 (15 reviews)', price: '16,000', dis:"Step into the cultural cradle of" },
      { name: 'Almora,', img: Almora, time: '5 Days - 4 Nights', star: '4 (20 reviews)', price: '25,000', dis:"Witness the untouched splendor of" },
    ]
    return (
        <>
            <section className='w-full py-12 md:py-24 lg:pt-32 px-6 md:px-0'>
                <div className='max-w-7xl mx-auto px-4 md:px-6'>
                    <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-3 font-serif'>Featured Destinations</h2>
                    <hr className='text-red-500 w-[200px] bg-red-500 mx-auto h-1 mb-10' />
                    <div className="slider-container">
                        <Slider {...settings}>
                            {destinationJson.map((destination)=> (
                                <div>
                                    <div key={destination.name} className='overflow-hidden border shadow-lg shadow-gray-500 rounded-lg mb-5 mr-5'>
                                        <div className=''>
                                            <img 
                                            src={destination.img} 
                                            alt={destination.name} 
                                            width={600} 
                                            height={400}
                                            className='object-cover w-full h-48 hover:scale-110 transition-all'
                                            />
                                            <div className='p-4'>
                                                <p className='text-gray-500 flex items-center gap-1 text-sm mb-1'><Clock width={15}/>{destination.time}</p>
                                                <h3 className='text-xl font-bold mb-2'>{destination.name}</h3>
                                                <p className='flex gap-1 items-center'><Star width={20} fill='red'/>{destination.star}</p>
                                                <p className='text-gray-600 mb-4 mt-2'>{destination.dis} {destination.name}</p>
                                                <div className='flex gap-4'>
                                                    <button className='px-3 py-2 bg-red-500 rounded-md text-white'>&#8377;{destination.price}</button>
                                                    <button className='px-3 py-2 bg-black rounded-md text-white'>Learn More</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </section>

        </>
    )
}

export default FeatureDestination
