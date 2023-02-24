import { useQuery, UseQueryOptions } from "rakkasjs";
import { pb } from "../api/pocketbase";


export function useAuthSession(options?: UseQueryOptions){
	const { data } = useQuery("auth:session",
    async () => await pb.authStore.model,
    {
      ...options,
    }
    )

	return data;
}

export function useCsrf(options?: UseQueryOptions): string {
	const { data } = useQuery<{ csrfToken: string }>(
		"auth:csrf",
		(ctx) => ctx.fetch("/auth/csrf").then((r) => r.json()),
		options,
	);

	return data.csrfToken;
}
