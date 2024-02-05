import { FaArrowRight } from 'react-icons/fa'
import './styles/trycss.css';

export const Promotion = () => {
  return (
    <div className='flex justify-center items-center gap-1 sm:gap-2 p-4 bg-orange50 rounded-lg'>
        <p className='text-white text-14 lg:text-lg'>Free Courses 🌟 Sale Ends Soon, Get It Now</p>
        <FaArrowRight style={{color: 'white'}} />
    </div>
  )
}
