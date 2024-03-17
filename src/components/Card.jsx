import React from 'react'
import { CiClock2 } from "react-icons/ci";
import { SlFire } from "react-icons/sl";
import { IoIosArrowRoundForward } from "react-icons/io";


const Card = () => {
  return (
    <div className='p-5 grid gap-5 border'>
      <div className='grid gap-4'>
        <img src="https://i.ibb.co/GCbFWhV/Rectangle-20170.png" alt="" />
        <h2 className='text-2xl font-bold'>Spaghetti Bolognese</h2>
        <p className='text-[16px]'>Classic Italian pasta dish with <br />savory meat sauce.</p>
      </div>
      <div>
        <ul className='text-[16px] grid gap-2'>
          <h4 className='text-2xl font-semibold'>Ingredients: 6</h4>
          <li className='flex items-center gap-1'> <IoIosArrowRoundForward /> 500g ground beef</li>
          <li className='flex items-center gap-1'> <IoIosArrowRoundForward /> 1 onion, chopped</li>
          <li className='flex items-center gap-1'> <IoIosArrowRoundForward /> 2 cloves garlic, minced</li>
        </ul>
      </div>
      <hr />
      <div className='flex gap-5'>
        <p className='flex items-center gap-1'><CiClock2 /> 30 minutes</p>
        <p className='flex items-center gap-1'><SlFire />
          600 calories</p>
      </div>
      <div>
        <button className="btn btn-sm px-4 py-2 btn-accent rounded-full">Want to cook</button>
      </div>
    </div>
  )
}

export default Card