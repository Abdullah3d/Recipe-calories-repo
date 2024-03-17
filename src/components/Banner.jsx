import React from 'react'

const Banner = () => {
    // console.log(img)
    return (
        <div style={{
            backgroundImage: `url(https://i.ibb.co/DpMJS3K/Rectangle-1.jpg)`,
            backgroundRepeat: 'no-repeat',
            backgroundSize :"cover"

        }} className='text-white text-center rounded-xl mt-24 px-20 py-32 grid justify-items-center gap-[30px] ' >
            <div className='' >
                <h1 className='text-5xl font-bold mb-10'>Discover an exceptional cooking<br />class tailored for you!</h1>
                <p>Unlock customized culinary experiences tailored to your taste and skill <br /> level discover your perfect cooking class today!</p>
            </div>
            <div className='flex gap-8 font-semibold'>
                <button className="btn btn-active btn-accent rounded-full text-black">Explore Now</button>
                <button className=" btn btn-outline text-white btn-ghost rounded-full">Our Feedback</button>
            </div>


        </div>
    )
}

export default Banner