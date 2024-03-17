import React from 'react'
import Sidebar from './Sidebar'
import Card from './Card'

const CardsSection = () => {
    return (
        <div className='grid gap-24 mt-24'>
            <div className='text-center grid gap-4'>
                <h1 className='text-2xl font-bold'>Our Recipes</h1>
                <p>Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget <br /> urna volutpat curabitur elementum mauris aenean neque.</p>
            </div>

            <div>
                <Card />
                <Sidebar />
            </div>
        </div>
    )
}

export default CardsSection