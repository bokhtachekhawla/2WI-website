import React from 'react'
import {  FaFacebookSquare,FaInstagramSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id='footer' className='bg-background  mt-0 p-16 '>
      <div className=''>
      <ul>
        <div className='flex gap-6 pb-5 justify-center items-cerntre'>
          {/* Sectin for icons  */}
          <a href="https://www.facebook.com/WomenTechmakersAlgiers" target="_blank" rel="noopener noreferrer"><FaFacebookSquare className='text-secondary text-4xl text-seconday cursor-pointer hover:text-white ' /></a>
          <a href="https://www.instagram.com/wtm_algiers/" target="_blank" rel="noopener noreferrer"><FaInstagramSquare className='text-4xl text-secondary  cursor-pointer hover:text-white' /></a>
          <a href="https://www.linkedin.com/company/wtm-algiers/" target="_blank" rel="noopener noreferrer"><FaLinkedin className='text-4xl text-secondary  cursor-pointer hover:text-white' /></a>
          <a href="https://twitter.com/algierswtm" target="_blank" rel="noopener noreferrer"><FaTwitterSquare className='text-4xl text-secondary  cursor-pointer hover:text-white' /></a>
        </div>
      </ul>
      <div className='flex justify-center items-cerntre'>
        <p className='font-sans text-white  text-xs text-center'>Copyright © 2023 GDG & WTM Algiers . All Rights Reserved..</p>
      </div>
    </div>
  </footer>
  )
}

export default Footer