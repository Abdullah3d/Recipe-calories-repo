import { useEffect, useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import CardsSection from './components/CardsSection';
function App() {
  const [dates, setDates] = useState([])

  
    const fetchData = async () => {
      try {
        const response = await fetch('/cards_data.json'); // Assuming data.json is in public folder
        const jsonData = await response.json();
        console.log(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  return (
    <div className='px-12'>
      <Navbar />
      <Banner />
      <CardsSection/>
    
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    </div>
  )
}

export default App
