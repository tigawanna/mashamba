/* eslint-disable no-var */
import { startClient } from "rakkasjs";
import PocketBase from "pocketbase";
import { PocketBaseClient } from "./lib/pb/client";



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
        ) as PocketBaseClient;
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
