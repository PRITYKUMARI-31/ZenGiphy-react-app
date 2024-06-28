import React from 'react'
import { useState } from 'react'
import Spinner from './Spinner'
import useGif from '../hooks/useGif'

// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Tag = () => {
   
    const [tag, setTag] = useState("Car");
    
    const {gif, loading, fetchData} = useGif(tag);

    

    
  return (
    <div className='w-1/2  bg-blue-400 rounded-lg border border-black
    flex flex-col items-center gap-y-5 mt-[15px] '>
        <h1 className='mt-[15px]text-2xl underline uppercase font-bold'> Random {tag} Gif</h1>

        {
            loading ? (<Spinner/>): (<img src={gif} alt='' width="450"/>)
        }

        <input
        className='w-10/12 bg-blue-200 text-lg py-2 rounded-lg text-center'
        onChange={(event)=>setTag(event.target.value)}
        value={tag}
        
        />

        <button 
        className='mb-[20px] w-10/12 bg-blue-200 text-lg py-2 rounded-lg'
        onClick={()=>fetchData(tag)}>
            Generate
        </button>
      
    </div>
  )
}

export default Tag

