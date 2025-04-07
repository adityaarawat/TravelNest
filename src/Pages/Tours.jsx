import React from 'react'
import TopBanner from '../Components/TopBanner'
import Uttarkashi from '../assets/Uttarkashi.jpg'
import Rudraprayag from '../assets/Rudraprayag.jpg'
import Chamoli from '../assets/Chamoli.jpg'
import Pauri from '../assets/Pauri.jpg'
import Nainital from '../assets/Nainital.jpg'
import Almora from '../assets/Almora.jpg'
import { Clock, Star } from 'lucide-react'

const Tours = () => {
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
      <TopBanner text='Tours' />
      <div className='max-w-7xl md:mx-auto my-10'>
        <h1 className='text-3xl lg:text-4xl font-serif mb-3 font-semibold text-center'>Top Destination</h1>
        <hr className='text-red-500 w-[200px] bg-red-500 mx-auto h-1 mb-10' />
        <div className='grid gird-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center'>
          {
            destinationJson.map((destination) => (
              <div>
                <div key={destination.name} className='overflow-hidden border shadow-lg shadow-gray-500 rounded-lg mb-5 md:mr-5'>
                  <div className=''>
                    <img
                      src={destination.img}
                      alt={destination.name}
                      width={600}
                      height={400}
                      className='object-cover w-full h-48 hover:scale-110 transition-all'
                    />
                    <div className='p-4'>
                      <p className='text-gray-500 flex items-center gap-1 text-sm mb-1'><Clock width={15} />{destination.time}</p>
                      <h3 className='text-xl font-bold mb-2'>{destination.name}</h3>
                      <p className='flex gap-1 items-center'><Star width={20} fill='red' />{destination.star}</p>
                      <p className='text-gray-600 mb-4 mt-2'>{destination.dis} {destination.name}</p>
                      <div className='flex gap-4'>
                        <button className='px-3 py-2 bg-red-500 rounded-md text-white'>&#8377;{destination.price}</button>
                        <button className='px-3 py-2 bg-black rounded-md text-white'>Learn More</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Tours
