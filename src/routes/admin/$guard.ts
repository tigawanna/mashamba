import { pb } from "../../utils/api/pocketbase";
import { LookupHookResult, PageContext } from "rakkasjs";

export function pageGuard(ctx: PageContext): LookupHookResult {
    // console.log("pageGuard",pb.authStore.model);
  if (pb.authStore.model) {
    // const url = new URL("/auth", ctx.url);
    // url.searchParams.set("callbackUrl",ctx.url.pathname);
    // console.log("ctx.url === ",ctx.url)
    // console.log("url === ",url.toString())
    return true;
  } else {
    const url = new URL("/auth", ctx.url);
    url.searchParams.set("callbackUrl", ctx.url.pathname + ctx.url.search);
    // console.log("url === ",url)
    return { redirect: url };
  }
}
