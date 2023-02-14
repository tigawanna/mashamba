
import { ClientSuspense } from 'rakkasjs';
import { lazy } from 'react'
const ReactLeafletMapCard = lazy(() => import('./ReactLeafletMapCard'));

interface LocationProps {

}


export const Location = ({}:LocationProps) => {
   
return (
 <div className='w-full h-full flex items-center justify-center'>
<ClientSuspense fallback={'loading...'}>
    <ReactLeafletMapCard />
</ClientSuspense>

</div>
);
}



