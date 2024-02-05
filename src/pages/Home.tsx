import { FaBolt } from "react-icons/fa6";
import { Branding } from "../components";

export const Home = () => {
  return (
    <div className='flex flex-col items-center justify-center text-center font-display'>
      <div className='flex items-center gap-2 p-3 bg-white rounded-md'>
      <span className='p-3 rounded bg-orange95'><FaBolt /></span>
      <p className="text-base font-semibold md:text-4xl">
        <span className="text-orange50">Unlock</span> Your Creative Potential
      </p>
      </div>
      <h2 className="text-2xl font-medium text-grey15">
      with Online Design and Development Courses.
      </h2>
      <p className="text-sm text-grey15 w-72 lg:text-base lg:w-auto">
      Learn from Industry Experts and Enhance Your Skills.
      </p>
      <div className="flex gap-3 p-7">
        <button className="py-3 px-5 bg-orange50 text-white font-semibold text-14 rounded-md ">Explore Courses</button>
        <button className="py-3 px-5 bg-white text-grey15 font-medium text-14 rounded-md border-2 border-white95">View Price</button>
      </div>
      <Branding />
      <div className="flex items-start lg:justify-between items-end max-w-screen-lg  ">
        <div className="lg:w-4/6">
        <h2 className="text-4xl font-semibold text-grey15 text-left">Benefits</h2>        
        <p className="text-14 text-left">Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.</p>
        </div>
        <button className="py-3 px-5 bg-white text-grey15 font-medium text-14 rounded-md border-2 border-white95">View All</button>        
      </div>
    </div>
  );
};
