import react, {useState} from 'react';
import { Roll} from "react-awesome-reveal";
import ReactPlayer from 'react-player/youtube'

export default function Contact(){

    const[count, setcount]=useState(0);

    const incrementCount =() => {
        setcount(count+1);
    };
    
    return(
    <div className='pt-28'>
   <p>Count: {count}</p>
      <button className='bg-black text-white' onClick={incrementCount}>Increment</button>
     
     <Roll triggerOnce> <p className='text-2xl mb-6 mt-7'>Rolls</p></Roll>
     <ReactPlayer url='https://www.youtube.com/watch?v=H0qDNf0k9lw' />
     
    </div>
    )
}
