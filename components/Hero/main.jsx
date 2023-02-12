import React from "react";
import Image from "next/image";
import Navbar from "./Navbar";

import Arrow from "../../images/shapes/Arrow.png";
import GDGAlgiers from "../../images/logos/GDG_Algiers_White.png";
import WWI from "../../images/logos/logo_white.png";
import CounterContainer from "./CounterContainer";
import Purpulebutton from "../shared/shared";
import Tilt from "react-parallax-tilt";
import Typewriter from "typewriter-effect";

const Main = () => {
    return (
    <section className='bg-background  w-full p-12 mb-0'>
      <div className='flex flex-col-reverse  lg:flex-row w-full'>
        {/* left side  */}
        <div className=' flex-1  md:flex-row md:space-x-0  lg:flex-col w-full lg:w-4/12  relative'>
        <div className="flex-1 pt-20 lg:pt-0 order-first lg:order-last">
              <Tilt>
                <Image src={WWI} className="" />
              </Tilt>
            </div>
        </div>
        {/* right side  */}
        <div className='flex flex-col items-center sm:w-full  md:w-11/12 lg:w-7/12 mb-7 mx-8 lg:mt-10 lg:mx-6 p-2 '>
        <div className="flex flex-col lg:flex-row items-center">  
         <div className="flex flex-col gap-7 flex-1 lg:pl-12">
              <h1 className="font-semibold text-center text-purple lg:text-left text-3xl lg:text-4xl 2xl:text-7xl leading-[4rem]">
                <Typewriter
                  options={{
                    strings: ["2WI | Women's Weekend of innovation"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h1>
              <p className="font-medium text-center text-secondary lg:text-left leading-[2rem] lg:text-2xl 2xl:text-4xl 2xl:leading-[2.875rem]">
                Your chance to learn new Technologies!
              </p>

        </div>
        
      </div>
      <div className="flex items-end mt-16">
                <div className="relative h-[67px] bounce w-[67px] 2xl:w-[101px] 2xl:h-[114px] hidden lg:flex">
                  <Image src={Arrow} layout="fill"  />
                </div>
                <div className="mb-[-50px] 2xl:mb-[-110px] cursor-not-allowed">

                  <a href="https://tripetto.app/run/9W7SG4LBWR" target="_blank" rel="noopener noreferrer">
                  <Purpulebutton title={"Register Now!"}  href="https://tripetto.app/run/9W7SG4LBWR"  />
                  </a>
                </div>
              </div>
      </div>
      

      </div>
      {/* <div className="flex flex-col p-10 justify-center align-items "> */}
      <CounterContainer countDownLimit={1666425600000} />
          
      {/* </div> */}

      <div className="hidden lg:flex w-36 h-6 items-end">
              <Image src={GDGAlgiers} />
            </div>    
    </section>

    )
  }
  
  export default Main