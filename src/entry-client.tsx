/* eslint-disable no-var */
import { startClient } from "rakkasjs";
import { TypedPocketBase } from "typed-pocketbase";
import PocketBase from "pocketbase";
import { Schema } from "./lib/pb/db-types";



startClient({
  hooks: {
    wrapApp(app) {
      return (app);
    },
    beforeStart() {
      // Do something before starting the client
    },
    extendPageContext(ctx) {
      // console.log("============= CLIENT SIDE PB  ==============",ctx.locals.pb)
      if (!ctx.locals.pb) {
        ctx.locals.pb = new PocketBase(
          // @ts-expect-error
          import.meta.env.RAKKAS_PB_URL,
        ) as TypedPocketBase<Schema>;
        ctx.locals.pb?.authStore.onChange(() => {
          ctx.requestContext?.setCookie?.(
            "set-cookie",
            ctx.locals.pb?.authStore.exportToCookie(),
          );
        });
      }
    },
  },
});
