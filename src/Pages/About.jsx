import React from 'react'
import TopBanner from '../Components/TopBanner'
import trip from '../assets/trip.gif'
import time from '../assets/fire-time.gif'
import price from '../assets/best-price.gif'

const About = () => {
  return (
    <div>
     <TopBanner text='About'/>
     <div className='max-w-7xl mx-auto my-10'>
      <div className='flex flex-col md:flex-row px-4 md:px-0 gap-4'>
        <div className='flex-1'>
          <div className='relative'>
            <img src="https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=600" alt="travel" className='rounded-lg'/>
            <div className='absolute bottom-[45%] right-0 p-4 bg-red-500 text-white font-bold md:text-4xl rounded-lg'>
              HOW WE ARE BEST <br /> FOR TRAVEL!
            </div>
          
          </div>
          <h1 className='md:text-4xl font-bold mt-6 mb-4 text-3xl'>How We Are Best For Travel !</h1>
          <p className='text-gray-500'>At Travel Nest, we believe that travel is more than just reaching a destination — it's about experiencing every heartbeat of the journey. Nestled in the heart of the Himalayas, Uttarakhand offers a soulful blend of adventure, spirituality, and natural beauty, and we’re here to help you discover it like never before.

Whether you're craving the serene stillness of Auli’s snow-covered slopes, the spiritual calm of Rishikesh and Haridwar, the untamed wilderness of Jim Corbett, or the emerald lakes of Nainital and Bhimtal — Travel Nest curates personalized experiences that connect you deeply with the land, culture, and people.

Our expert guides, handpicked stays, and authentic itineraries ensure you don’t just see Uttarakhand — you feel it. Every path you walk, every meal you savor, and every sunrise you witness with us becomes a cherished memory.

With Travel Nest, you're not just a tourist — you're a traveler discovering your own story in the heart of the Himalayas.</p>
        </div>
        <div className='flex-1'>
          <div className='bg-white p-6 rounded-lg shadow-md'>
            <div className='flex flex-col md:flex-row items-start mb-4'>
              <img src={trip} alt="" className='w-20'/>
              <div>
                <h2 className='ml-2 text-2xl font-semibold mb-1'>50+ Destination</h2>
                <p className='text-gray-700 ml-2 lg:mr-28'>We offer the best travel experiences with personalized services and unbeatable prices.</p>
              </div>
            </div>
            
          </div>
          <div className='bg-white p-6 my-4 rounded-lg shadow-md'>
            <div className='flex flex-col md:flex-row items-start mb-4'>
              <img src={price} alt="" className='w-20'/>
              <div>
                <h2 className='ml-2 text-2xl font-semibold mb-1'>Best Price</h2>
                <p className='text-gray-700 ml-2 lg:mr-28'>We offer the best travel experiences with personalized services and unbeatable prices.</p>
              </div>
            </div>
            
          </div>
          <div className='bg-white p-6 rounded-lg shadow-md'>
            <div className='flex flex-col md:flex-row items-start mb-4'>
              <img src={time} alt="" className='w-20'/>
              <div>
                <h2 className='ml-2 text-2xl font-semibold mb-1'>Super Fast Booking</h2>
                <p className='text-gray-700 ml-2 lg:mr-28'>We offer the best travel experiences with personalized services and unbeatable prices.</p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
     </div>
    </div>
  )
}

export default About
