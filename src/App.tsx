import { useEffect, useState } from 'react'
import './App.css'
import { useCountdown } from './hooks/useCountdown';

function App() {

  const NOW = new Date().getTime();

  const NOVEMBER_FIRST = new Date(2022, 10, 1).getTime();
  
  const [days, hours, minutes, seconds] = useCountdown( NOVEMBER_FIRST  );

  const normalize = (number : number) => {
    return number < 10 ? `0${number}` : number;
  }



  return (
    <div className="flex items-center justify-center
     text-white  bg-stone-900 w-full h-full">
      <article className='flex flex-col items-center justify-center gap-8'>
        <img className='w-24' src='svg/logo_demo.svg' alt='Joy' />

        <div className='flex items-start justify-center gap-2'>
          <div className='flex flex-col items-center justify-center w-16'>
            <p className='text-4xl font-bold'>{normalize(days)}</p>
            <p className='font-light'>DAYS</p>
          </div>
          <p className='text-4xl font-bold'>:</p>
          <div className='flex flex-col items-center justify-center w-16'>
            <p className='text-4xl font-bold'>{normalize(hours)}</p>
            <p className='font-light'>HOURS</p>
          </div>
          <p className='text-4xl font-bold'>:</p>
          <div className='flex flex-col items-center justify-center w-16'>
            <p className='text-4xl font-bold'>{normalize(minutes)}</p>
            <p className='font-light'>MINUTES</p>
          </div>
          <p className='text-4xl font-bold'>:</p>

          <div className='flex flex-col items-center justify-center w-16'>
            <p className='text-4xl font-bold'>{normalize(seconds)}</p>
            <p className='font-light'>SECONDS</p>
          </div>    
        </div>
        {/* <h2 className='text-xl mt-4 mb-8'>
          Joy is coming :)
        </h2> */}
      </article>
    </div>
  )
}

export default App
