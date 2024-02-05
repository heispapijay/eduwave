import Marquee from "react-fast-marquee";
import zapier from "../assets/branding/Logo.png";
import spotify from "../assets/branding/Logo-1.png";
import zoom from "../assets/branding/Logo-2.png";
import amazon from "../assets/branding/Logo-3.png";
import adobe from "../assets/branding/Logo-4.png";
import notion from "../assets/branding/Logo-5.png";
import netflix from "../assets/branding/Logo-6.png";

export const Branding = () => {
  return (
    <div className="flex flex-col justify-center w-auto">
      <div className="flex justify-between border rounded-md text-white95 lg:p-6 bg-white99 ">
        <Marquee gradient={false} speed={100} pauseOnHover={true}>
          <img className="py-5 px-8" src={zapier} alt="zapier logo" />
          <span className="border-l h-auto text-white95" />
          <img className="py-5 px-8" src={spotify} alt="spotify logo" />
          <span className="border-l h-auto text-white95" />
          <img className="py-5 px-8" src={zoom} alt="zoom logo" />
          <span className="border-l h-auto text-white95" />
          <img className="py-5 px-8" src={amazon} alt="amazon logo" />
          <span className="border-l h-auto text-white95" />
          <img className="py-5 px-8" src={adobe} alt="adobe logo" />
          <span className="border-l h-auto text-white95" />
          <img className="py-5 px-8" src={notion} alt="notion logo" />
          <span className="border-l h-auto text-white95" />
          <img className="py-5 px-8" src={netflix} alt="netflix logo" />
        </Marquee>
      </div>
    </div>
  );
};
