import { Categories } from "../home/Categories";

interface SideDrawerProps {

}

export const SideDrawer = ({}:SideDrawerProps) => {
return (
 <div className='w-full h-full flex items-center justify-center'>
 <div className="w-full h-full">
    <Categories/>
 </div>
 </div>
);
}
