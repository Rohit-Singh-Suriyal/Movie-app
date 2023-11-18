import { AiFillInstagram, AiOutlineFacebook } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";

const Footer = () => {
  return (
    <>
    
      <div className="bg-black text-white ">
        <div className="flex justify-center   gap-7 text-xl pt-3">
          <AiFillInstagram />
          <AiFillTwitterCircle />
          <AiFillYoutube />
          <AiFillFacebook />
        </div>
        <div className="bg-gray-600 w-full  h-[1px] mt-2" >

        </div>
        <div className="flex  md:text-[8px] md:flex md:justify-around justify-around p-3 text-[25px]   text-sm pt-4  ">
          <div>
            <p>FAQ</p>
            <p>Investor Relations</p>
            <p>Privacy</p>
            <p>Speed Test</p>
          </div>
          <div>
            <p>Help Centre</p>
            <p>Jobs</p>
            <p>Cookie Preferences</p>
            <p>Legal Notices</p>
          </div>
          <div>
            <p>Account</p>
            <p>Ways to Watch </p>
            <p>Corporate Information</p>
            <p>Only on Netflix</p>
          </div>
          <div>
            <p className="w-full">Media Centre</p>
            <p>Terms of Use</p>
            <p>Cntact us</p>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-center font-bold text-xl ">Rohit's Company</p>
          <p className="text-center ">© 1990-2023 by Movies.com, Inc.</p>
        </div>
      </div>
    </>
  );
};
export default Footer;
