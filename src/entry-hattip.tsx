import { RequestContext, createRequestHandler } from "rakkasjs";
import { cookie } from "@hattip/cookie";
import PocketBase from "pocketbase";
import { PocketBaseClient } from "./lib/pb/client";


export async function beforePageLuciaMiddleware(ctx: RequestContext<unknown>) {}

export default createRequestHandler({
  middleware: {
    beforePages: [
      cookie(),
      (ctx) => {
        ctx.locals.pb = new PocketBase(
          // @ts-expect-error
          import.meta.env.RAKKAS_PB_URL
        ) as PocketBaseClient;
        // load the store data from the request cookie string
        ctx.locals.pb.authStore.loadFromCookie(
          ctx.request.headers.get("cookie") || ""
        );
      },
    ],
    beforeApiRoutes: [],
    beforeNotFound: [],
  },

  createPageHooks(requestContext) {
    return {
      emitToDocumentHead() {
        const cookie_theme = requestContext?.cookie?.theme;
        return `
    <link rel="icon" type="image/svg+xml" href="/site.svg" />
    <script>
      (function() {
        document.documentElement.setAttribute("data-theme", "${cookie_theme}");
      })();
     </script>
    
  `;
      },

      async extendPageContext(ctx) {
        const request = ctx.requestContext?.request;
        if (!request) return;

        if (!ctx.locals.pb) {
          ctx.locals.pb = new PocketBase(
            // @ts-expect-error
            import.meta.env.RAKKAS_PB_URL
          ) as PocketBaseClient;
          // load the store data from the request cookie string
          ctx.locals.pb.authStore.loadFromCookie(
            request.headers.get("cookie") || ""
          );
        }
        try {
          if (ctx.locals.pb.authStore.isValid) {
            const user = ctx?.locals?.pb;
            ctx.queryClient.setQueryData("user", user?.authStore?.model);
            // console.log("===VALID USER , UPDATING POCKETBASE USER= ===");
          } else {
            // console.log("====INVALID USER , LOGGING OUT POCKETBASE= ===");
            ctx.locals.pb.authStore.clear();
            ctx.queryClient.setQueryData("user", null);
          }
        } catch (_) {
          // clear the auth store on failed refresh
          ctx.locals.pb.authStore.clear();
        }
      },

      wrapApp(app) {
        return app;
      },

      //   wrapSsrStream(stream) {
      //     const { readable, writable } = new TransformStream({
      //       transform(chunk, controller) {
      //         // You can transform the chunks of the
      //         // React SSR stream here.
      //         controller.enqueue(chunk);
      //       },
      //     });
      // // @ts-expect-error
      //     stream.pipeThrough(writable);

      //     return readable;
      //   },
    };
  },
});
