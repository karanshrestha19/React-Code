import react, {useState,useRef} from 'react';
import { JackInTheBox, Fade, Bounce, Flip, Hinge, Rotate, Slide,Zoom, } from "react-awesome-reveal";
import video from '../../assets/videos/farki.mp4';
export default function Contact(){
  
    const[isopen, issetOpen]=useState(false);

    const openbox=() => {
        issetOpen(!isopen);
    };
    return(
    <div className='pt-28'>
      <button className='bg-blue-500' onClick={openbox}>box</button>
     {isopen && (
        <div style={{ border: '1px solid black', padding: '10px', marginTop: '10px' }}>
          This is a box!
        </div>)
    }
    <div>
      <JackInTheBox>
      <label className='text-2xl'>React JackInTheBox</label>
      </JackInTheBox>
      <Fade>
      <label className='text-2xl'>React Fade</label>
      </Fade>
      <Bounce>
      <label className='text-2xl'>React Bounce</label>
      </Bounce>
      <Flip>
      <label className='text-2xl'>React Flip</label>
      </Flip>
      <Hinge triggerOnce>
      <label className='text-2xl'>React Hinge</label>
      </Hinge>
      <Rotate>
      <label className='text-2xl'>React Rotate</label>
      </Rotate>
      <Slide>
      <label className='text-2xl'>React Slide</label>
      </Slide>
      <Zoom>
      <label className='text-2xl'>React Zoom</label>
      </Zoom>
      rubberBand
    </div>
    <video width={600} height={400} controls autoPlay loop>
      <source src={video} type='video/mp4'/>
    </video>
    </div>
    )
}
