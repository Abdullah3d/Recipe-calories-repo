import { useEffect, useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import CardsSection from './components/CardsSection';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const [dates, setDates] = useState([])

  
useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch('/cards_data.json');
      const jsonData = await response.json();
      setDates(jsonData);
    } catch (error) {
      toast.error(error)
    }
  };

  fetchData();
}, [])

    // console.log(dates)
  return (
    <div className='px-12'>
      <Navbar />
      <Banner />
      <CardsSection dates={dates} />
      <ToastContainer/>
    </div>
  )
}

export default App
