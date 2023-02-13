
import BigLand from '../../assets/land-big.jpg';
import css from './home.module.css'

interface HeroImageProps {

}
export const HeroImage = ({}:HeroImageProps) => {
return (
 <div className='w-full h-full flex items-center justify-center relative '>
  <img src={BigLand} alt="big land" width="800" height="400" loading="lazy" className={css.img}/>
<div className='h-full w-full bg-opacity-50 z-3 absolute bg-slate-700 
       flex items-center justify-center'>
       
<div className='h-full w-full flex items-center justify-center
       text-6xl font-bold first-letter:text-yellow-500'>Hello</div>
 
</div>
 </div>
);
}
