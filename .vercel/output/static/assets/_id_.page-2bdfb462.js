import{b as y,a as w,C as b,_ as v,p as E}from"./client-15295d6b.js";import{a}from"./jsx-runtime-6a3157d9.js";import{r as n}from"./index-e76fa941.js";import{c as S}from"./concatErrors-9ce0d561.js";import{u as x}from"./useGeoLocation-7b1cbf9f.js";const L=n.lazy(()=>v(()=>import("./ListingsForm-e2d5ced1.js"),["assets/ListingsForm-e2d5ced1.js","assets/jsx-runtime-6a3157d9.js","assets/index-e76fa941.js","assets/checkIfObjectHasemptyField-b2dc686a.js","assets/checkIfObjectHasemptyField-5d54d688.css","assets/hoist-non-react-statics.cjs-13dff383.js","assets/client-15295d6b.js","assets/ReactLeafletMapCard-b1aec63c.js","assets/useGeoLocation-7b1cbf9f.js","assets/ReactLeafletMapCard-3625237c.css","assets/index-b8d29899.js","assets/index-60c67a20.js"]));function z({params:l}){const{position:o}=x(),[m,i]=n.useState({name:"",message:""}),{data:r,refetch:k}=y(["0",0,[l]],{refetchOnWindowFocus:!0,refetchOnReconnect:!0});if(!r)return a("div",{children:"Loading..."});const u=r.items[0],f={location:"",longitude:o.lng,latitude:o.lat,description:"",status:"available",images:[],amenities:{type:"land",size:"",water_source:"piped",elecricity_source:"utility pole",bathrooms:1,bedrooms:1,fireplace:1,garages:1,swimming_pool:1,closest_hospital:"less than 20 minutes away",closest_police_station:"less than 20 minutes away",closest_school:"less than 20 minutes away",closest_town:"less than 20 minutes away",gated_community:!1,parking:!1,pavements:!1,street_lights:!1},owner:""},[d,p]=n.useState(u??f);async function g(e){var c;const h=["amenities","images"],t=new FormData;e.images&&((c=e.images)==null||c.forEach(s=>{t.append("images",s)})),e.amenities&&t.append("amenities",JSON.stringify(e.amenities));for(const s in e)!h.includes(s)&&e[s]!==""&&t.append(s,e[s]);return await E.collection("listings").create(t)}const _=w(e=>g(e),{onSuccess:()=>{i({name:"",message:""})},onError:e=>{console.log("rakkas useMutaion error  === ",e),i({name:"main",message:S(e)})}});return a("main",{className:"w-full min-h-screen h-full flex flex-col justify-center items-center",children:a(b,{fallback:"loading...",children:a(L,{label:"Add New Listing",mutation:_,input:d,setInput:p,error:m,setError:i})})})}export{z as default};
