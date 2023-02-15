// about page
import { ActionContext, ActionResult, Head, PageProps, useSubmit } from 'rakkasjs';
import { FormInput } from '../../components/shared/rakkas-form/FormInput';

export default function AddPage({actionData }:PageProps) {
    const { submitHandler } = useSubmit();
    console.log("action adata === ",actionData)
    return (
        <main className="w-full min-h-screen h-full flex justify-center items-center">
            
            <form method="POST" onSubmit={submitHandler}>
                <Head title="Add new listing" />
       
                    <label>
                        User name:
                        <br />
                        <input
                            type="text"
                            name="userName"
                            defaultValue={actionData?.userName}
                        />
                    </label>
                    <FormInput
                    input={actionData as ActionDataType}
                    label='nickname'
                    prop={'nickname'}
                    />

            
            
                    <label>
                        Password:
                        <br />
                        <input
                            type="password"
                            name="password"
                            defaultValue={actionData?.password}
                        />
                    </label>
       
                
                    <button type="submit">Submit</button>
              {actionData && <p style={{ color: "red" }}>{actionData.message}</p>}
            </form>

        </main>
    );
}
export interface FormFields{
    userName: FormDataEntryValue | null;
    password: FormDataEntryValue | null;
    nickname: FormDataEntryValue | null;
}

export interface ErrorObject{
    field:keyof FormFields | "main", message:string 
}

export interface ActionDataType{
   fields:FormFields | null
   error: | null
}

export async function action(ctx: ActionContext): Promise<ActionResult<ActionDataType>> {
    const formData = await ctx.requestContext.request.formData();

    if(formData.get("userName") === "admin" && formData.get("password") === "admin"){
        return {
            redirect: "/use-submit/submitted",
        };
    }

    return {
        data: {
            fields: {
                // We'll echo the data back so that the form doesn't get reset
                userName: formData.get("userName"),
                password: formData.get("password"),
                nickname: formData.get("nickname"),
            },
            error: {
                field: "main",message: "something went wrong"
            }

        },
    };
}
