import { pb } from "./pocketbase";

export const loginAdmin=async(email:string,password:string)=>{
    return await pb.admins.authWithPassword(email,password);
}
