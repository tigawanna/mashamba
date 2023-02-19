import { json } from "@hattip/response";
export function get() {
	return json({ hello: "hello world" });

	// Shorthand for:

	// return new Response(JSON.stringify({ hello: "world" }), {
	// 	headers: { "content-type": "application/json" },
	// });
}
