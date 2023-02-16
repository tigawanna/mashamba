// about page
import { ActionContext, ActionResult, Head, PageProps, useSubmit } from 'rakkasjs';
import { FormInput } from '../../components/shared/rakkas-form/FormInput';
import { PlainFormButton } from '../../components/shared/rakkas-form/FormButton';
import { FormFileInput } from '../../components/shared/rakkas-form/FormFileInput';

export default function AddPage({actionData, }:PageProps) {
    const { submitHandler,isLoading,isSuccess,status,isError,data,error } = useSubmit();
    console.log("action adata === ",actionData)
    


    return (
        <main className="w-full min-h-screen h-full flex justify-center items-center">
            
            <form method="POST" onSubmit={submitHandler}>
                <Head title="Add new listing" />
       
  
                  <FormInput<FormFields>
                    input={actionData}
                    label='nickname'
                    prop={'nickname'}
                    />


                <FormFileInput<FormFields>
                    input={actionData}
                    label='image'
                    prop={'pic'}
                />
            

                <PlainFormButton
                    disabled={isLoading}
                    isSubmitting={isLoading}
                    label={"save changes"}
                />
     
       
                
            <button type="submit">Submit</button>
              {actionData && <p style={{ color: "red" }}>{actionData.message}</p>}
            </form>

        </main>
    );
}
export interface FormFields{
    nickname: FormDataEntryValue | null;
    pic: FormDataEntryValue | null;
    
}


export interface ActionDataType<T>{
   fields:T | null
   error:{ field:keyof T | "main", message: string}
}

export async function action(ctx: ActionContext): Promise<ActionResult<ActionDataType<FormFields>>> {
    const formData = await ctx.requestContext.request.formData();
    const data = await ctx.requestContext.request
   console.log("data === ",data)
    if(formData.get("userName") === "admin" && formData.get("password") === "admin"){
        return {
            redirect: "/use-submit/submitted",
        };
    }

    return {
        data: {
            fields: {
                // We'll echo the data back so that the form doesn't get reset
         
                nickname: formData.get("nickname"),
                pic: formData.get("pic"),
            },
            error: {
                field: "main",message: "something went wrong"
            }

        },
    };
}
