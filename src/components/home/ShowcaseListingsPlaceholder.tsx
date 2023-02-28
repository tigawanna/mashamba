interface ShowcaseListingsPlaceholderProps {

}

export const ShowcaseListingsPlaceholder = ({}:ShowcaseListingsPlaceholderProps) => {
    const loadingDivs = [1,2,3,4]
return (
 <div className='w-full h-full flex flex-wrap items-center justify-center'>

<div className="w-[90%] p-2 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4  gap-2 lg:gap-4">
  {loadingDivs.map((item)=>(
    <div 
    key={item}
    className="w-full min-h-[300px] flex flex-col items-start shadow-lg border 
      rounded-2xl animate-pulse bg-slate-300 bg-opacity-40">
   
   </div>
  ))}
</div>

 </div>
);
}
