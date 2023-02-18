import AsyncSelect from 'react-select/async';
import { OwnerResponse, getOwner } from '../../utils/api/owner';
interface SearchOwnerProps {
    gettterFunction(keyword: string): Promise<any[]>
    setValue:(value: any) => void
   
}

export const SearchSelect = ({gettterFunction,setValue}:SearchOwnerProps) => {
    const loadOptions = (inputValue: string,callback: (options: any[]) => void) => {
        setTimeout(async() => {
            callback(await gettterFunction(inputValue??" "));
        }, 200);
    };
return (

        <AsyncSelect 
        className='w-full'
        onChange={(res) => { setValue(res.value)}}
        cacheOptions loadOptions={loadOptions} defaultOptions />

);
}
