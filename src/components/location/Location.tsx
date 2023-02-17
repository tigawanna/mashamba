
import { ClientSuspense } from 'rakkasjs';
import { lazy } from 'react'
const ReactLeafletMapCard = lazy(() => import('./ReactLeafletMapCard'));

interface LocationProps {
    coords: { lat: number; lng: number }
    setMapLocation: (lat: number, lng: number) => void
    display?: boolean

}


export const Location = ({coords,display=false,setMapLocation}:LocationProps) => {
   
return (
 <div className='w-full h-full flex items-center justify-center'>
<ClientSuspense fallback={'loading...'}>
    <ReactLeafletMapCard coords={coords} display={display} setMapLocation={setMapLocation}/>
</ClientSuspense>

</div>
);
}



