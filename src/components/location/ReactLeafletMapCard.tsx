import { MapContainer, Marker, TileLayer,Popup } from 'react-leaflet';
import { useGeoLocation } from '../../utils/hooks/useGeoLocation';
import { useState } from 'react';
import 'leaflet/dist/leaflet.css'


interface ReactLeafletMapCardProps {
 coords:{lat:number ; lng: number}
 display?:boolean
 setMapLocation:(lat:number,lng:number)=>void
}


const ReactLeafletMapCard = ({coords,display,setMapLocation}:ReactLeafletMapCardProps) => {

const {position} = useGeoLocation()
const [pos,setPos]=useState(()=>coords??position)
const [zoom,SetZoom]=useState(20)

const onClickMarker = (e:any)=>{
    // console.log("map marker event === ",e.target._latlng)
    setMapLocation(e.target._latlng.lat,e.target._latlng.lng)
}
// console.log("geolocation", geolocation)
return (
 <div className='w-full h-full flex items-center justify-center'>
    <MapContainer 
      style={{ width: "90%", height: "500px" }} center={position} zoom={zoom} scrollWheelZoom={true}>
        <TileLayer
                attribution='&copy; 
                <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={pos} 
              draggable={true}
              eventHandlers={
               { dragend:onClickMarker}
            }>
                {/* <Popup className='bg-red-900'>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup> */}
            </Marker>
        </MapContainer>
 </div>
);
}
export default ReactLeafletMapCard
