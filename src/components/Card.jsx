import React from 'react'
import { CiClock2 } from "react-icons/ci";
import { SlFire } from "react-icons/sl";
import { IoIosArrowRoundForward } from "react-icons/io";


const Card = ({ ingre, clo, time, des, img, name }) => {
  return (
    <div className='p-[24px] grid gap-5 border'>
      <div className='grid gap-4'>
        <img className='max-w-[330px] rounded-xl' src={img} alt="" />
        <h2 className='text-2xl font-bold'>{name}</h2>
        <p className='text-[16px]'>{des}</p>
      </div>
      <div>
        <ul className='text-[16px] grid gap-2'>
          <h4 className='text-2xl font-semibold'>Ingredients: {ingre.length}</h4>
          {
            ingre.map(( items , index) => (
              <li key={index} className='flex items-center gap-1'> <IoIosArrowRoundForward /> {items}</li>
            ))
          }

        </ul>
      </div>
      <hr />
      <div className='flex gap-5'>
        <p className='flex items-center gap-1'><CiClock2 /> {time}</p>
        <p className='flex items-center gap-1'><SlFire /> {clo}</p>
      </div>
      <div>
        <button className="btn btn-sm px-4 py-2 btn-accent rounded-full">Want to cook</button>
      </div>
    </div>
  )
}

export default Card