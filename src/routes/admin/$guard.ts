import { pb } from "../../utils/api/pocketbase";
import { LookupHookResult, PageContext } from "rakkasjs";

export function pageGuard(ctx: PageContext): LookupHookResult {
 if (pb.authStore.model) {
  return true;
  } else {
    const url = new URL("/auth", ctx.url);
    url.searchParams.set("callbackUrl", ctx.url.pathname + ctx.url.search);
    // console.log("url === ",url)
    return { redirect: url };
  }
}
