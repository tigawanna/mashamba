import { json } from "@hattip/response";
import { pb } from "../../../utils/api/pocketbase";
import { PBListings } from "../../../utils/api/listings";

export async function get() {
  const resultList = await pb
    .collection("listings")
    .getList<PBListings>(1, 50, {
      // filter: 'created >= "2022-01-01 00:00:00" && someField1 != someField2',
    });
  return json(resultList);

  // Shorthand for:

  // return new Response(JSON.stringify({ hello: "world" }), {
  // 	headers: { "content-type": "application/json" },
  // });
}
