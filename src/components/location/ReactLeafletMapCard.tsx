import { MapContainer, Marker, TileLayer,Popup } from 'react-leaflet';
import { useGeoLocation } from '../../utils/hooks/useGeoLocation';
import { useState } from 'react';
import 'leaflet/dist/leaflet.css'

interface ReactLeafletMapCardProps {
 coords:{lat:number ; lng: number}
 display:boolean
}

const ReactLeafletMapCard = ({coords,display}:ReactLeafletMapCardProps) => {
const geolocation = useGeoLocation()

const [position, setPosition] = useState(()=>{
    if(display){
        return coords
    }
    else if(geolocation && "coords" in geolocation){
        return {
            lat: geolocation.coords.latitude,
            lng: geolocation.coords.longitude
        }
    }

    return {
        lat: -1.290394, lng: 36.816583
    }
})
// console.log("geolocation", geolocation)
return (
 <div className='w-full h-full flex items-center justify-center'>
    <MapContainer 
        style={{ width: "90%", height: "500px" }} 
        center={position} zoom={35} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; 
                <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position} >
                {/* <Popup className='bg-red-900'>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup> */}
            </Marker>
        </MapContainer>
 </div>
);
}
export default ReactLeafletMapCard
