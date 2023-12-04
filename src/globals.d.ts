import { TypedPocketBase } from "typed-pocketbase";
import { Schema } from "src/lib/pb/db-types";

declare module "*.module.css";
declare module "*.jpg";
declare module "*.svg";
declare module "*.webp";


declare module "rakkasjs" {
    interface PageLocals {
        /** My application-specific stuff */
        pb: TypedPocketBase<Schema>;
    }
    interface ServerSideLocals {
        /** My application-specific stuff */
        pb: TypedPocketBase<Schema>;
    }
}


declare interface ReturnedError {
    error: {
        message: string;
        original_error: string,

    }
}
