import { navigate, useLocation, useMutation } from "rakkasjs";
import { useState } from "react";
import { pb } from "../utils/api/pocketbase";
import { concatErrors } from "../utils/helper/concatErrors";
import { FormInput } from "../components/shared/form/FormInput";
import { PlainFormButton } from "../components/shared/form/FormButton";
import { checkIfEmpty } from "../utils/helper/checkIfObjectHasemptyField";

interface LoginAdminProps {

}
interface LoginInputType {
    email: string;
    password: string;
}


export default function LoginAdminPage({}:LoginAdminProps){
const [input, setInput] = useState<LoginInputType>({email:"",password:""});
const [error, setError] = useState({ name: "", message: "" });

const {current,pending}  = useLocation()
// console.log("current",current,"pending",pending)
const callBackUrl = current.searchParams.get("callbackUrl")
// console.log("callback url ",callBackUrl)
    const isNavigating = () => {
        if (pending) {
            return true
        }
        return false
    }
async function loginAdmin(input:LoginInputType) {
        return await pb.admins.authWithPassword(input.email, input.password);
    }

    const mutation = useMutation<Awaited<ReturnType<typeof loginAdmin>>, LoginInputType>(
        (input)=>loginAdmin(input),
        {
            onSuccess: () => {
                setError({ name: "", message: "" });
                setInput({email:"",password:""})
                if(callBackUrl){
                    navigate(callBackUrl)
                }
              
           }, onError: (err) => {
                console.log("rakkas useMutaion error  === ", err)
                setError({ name: "main", message: concatErrors(err) });
            }
    })

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setInput(prev => {
            return { ...prev, [e.target.id]: e.target.value };
        });
        if (error.message !== "" || error.name !== "") {
            setError({ name: "", message: "" });
        }
    };
    const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        // console.log("about to save ",input)
        mutation.mutate(input);
    };

return (
 <div className='w-full h-screen flex flex-col items-center justify-center'>
    {/* <button onClick={()=>{
        return {redirect:'/'}
        }}>redirect</button> */}
    <form 
    className='w-[80%] md:w-[50%] h-[80%] flex flex-col items-center justify-center'
    onSubmit={handleSubmit}>
        
        <FormInput
        label="Email"
        prop="email"
        input={input}
        error={error} 
        handleChange={handleChange}
        />
        <FormInput
        label="Password"
        prop="password"
        input={input}
        error={error}
        handleChange={handleChange}
        />

        <PlainFormButton
        disabled={checkIfEmpty(input).empty||isNavigating()}
        isSubmitting={mutation.isLoading}
        label={"login"}
        />


        </form>

        <div className="m-1 w-[90%] flex  flex-col items-center justify-center">
            {error?.message !== "" ? (
                <div className="m-1 w-full text-center  line-clamp-4 p-2 bg-red-100 border-2 
                        border-red-800 text-red-900  rounded-xl">
                    {error.message}
                </div>
            ) : null}
        </div>
 </div>
);
}
