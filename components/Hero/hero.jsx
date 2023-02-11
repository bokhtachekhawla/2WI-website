import Image from "next/image";
import Main from "./main";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div className="section-container pb-24 md:pb-0">
        <Navbar />
        <Main />
    </div>
  )
}

export default Hero