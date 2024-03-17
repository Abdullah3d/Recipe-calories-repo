import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Card from './Card'

const CardsSection = ({ dates }) => {
  const [cock, setCock] = useState([])
  return (
    <div className='grid gap-24 mt-24'>
      <div className='text-center grid gap-4'>
        <h1 className='text-2xl font-bold'>Our Recipes</h1>
        <p>Explore our diverse collection of mouthwatering recipes indulge in culinary  delights that inspire<br /> creativity  and  satisfy every palate, all in one convenient place.</p>
      </div>

      <div className='flex gap-10'>
        <div className='grid grid-cols-2 gap-[24px]'>
          {
            dates.map((data) => (
              <Card
                key={data.id}
                id={data.id}
                name={data.name}
                img={data.image}
                des={data.description}
                time={data.time}
                clo={data.Calories}
                ingre={data.Ingredients}
                setCock={setCock}
                cock={cock}

              />
            ))
          }
        </div>
        <div className=''>
          <Sidebar cock={cock} />
        </div>
      </div>
    </div>
  )
}

export default CardsSection