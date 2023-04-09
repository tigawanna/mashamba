# RakkasJS

My Nextjs replacement , 
Rakkasjs is an underdog in the react meta-framework landscape that checks all the boxes i care about .

Nextjs is cool but it's webpack  can get aggressive with systemm resources especially on windows machines , they have a replacement written in rust but i barely noticed a difference when i tried it maybe it's because it's still beta .

vite on the other hand amazes me in how good the dev experience is, their latest release is even more impressive 

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Rewrite everything in Rust they said <a href="https://t.co/vXpCJpYBEa">https://t.co/vXpCJpYBEa</a></p>&mdash; Evan You (@youyuxi) <a href="https://twitter.com/youyuxi/status/1644656077169127425?ref_src=twsrc%5Etfw">April 8, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

It has also become a favorite for most of the modern javascript frameworks and has a growing olugin eco-system that push it the next level

Rakkas builds on top of that and adds other tools/features by the author like 
- [hattip](https://github.com/hattipjs/hattip) : Like express but with modern features
- a react query inspired data fetching solution
- file based router with nested layouts
-   SSR and SSG
-   multiple deployemnt options
    -   Node.js
    - Static hosts
    - Cloudflare Workers
    - Netlify
    - Vercel
    - Deno
    - Bun
    - Lagon

to offer modern javascript fullstack features



## Simple implementation

![ownership-insurance-real-estate](https://user-images.githubusercontent.com/72096712/230766045-c7135ae6-2052-4603-b31c-3904f01dfa40.jpg)


I made a simple real estate site with rakkas to try it out.


### Pages/layouts 

Rakkas is heavilly inspired by [vite-plugin-ssr](https://vite-plugin-ssr.com/) especially the file structure naming convention 

In Rakkas, a page is a React component default exported from a module in the `src/routes` directory with a name that matches `*.page.jsx` (or `tsx`).

Rakkas has a file system-based router. The file name determines the URL path. The rules are as you would expect:

| Module name                       | URL path      |
| --------------------------------- | ------------- |
| `src/routes/index.page.jsx`       | `/`           |
| `src/routes/about.page.jsx`       | `/about`      |
| `src/routes/about/index.page.jsx` | also `/about` |

so we'll first create a root layout to house everything 
[src/routes/layout.tsx](https://github.com/tigawanna/mashamba/blob/b85f2767bb9cf125063f2580890e860460884f1e/src/routes/layout.tsx)

in which we can define UI elemnt we want globally on the entire app , like the toolbar,footer and in my case page transition progress-bar at the top

```tsx
// This is the main layout of our app. It renders the header and the footer.

import {
  ClientSuspense,
  Head,
  Layout,
  useLocation,
  UseLocationResult,
} from "rakkasjs";
import "../styles/tailwind.css";
import Toolbar from "../components/navigation/Toolbar";
import { ReactProgress } from "../components/shared/loaders/ReactProgress";
import { Footer } from "./../components/navigation/Footer";

const MainLayout: Layout = ({ children }) => {
  const location = useLocation();

  const isanumating = (location: UseLocationResult) => {
    if (location.pending) {
      return true;
    }
    return false;
  };

  return (
    <>
      {/* Rakkas relies on react-helmet-async for managing the document head */}
      {/* See their documentation: https://github.com/staylor/react-helmet-async#readme */}
      <Head title="Real estates">
        <html lang="en" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>

      <header className="w-full h-12 p-2 z-30 sticky top-0 bg-slate-900 bg-opacity-20 text-slate-800 ">
        {/* <Link /> is like <a /> but it provides client-side navigation without full page reload. */}
        <ClientSuspense fallback="">
          <Toolbar />
          <ReactProgress isAnimating={isanumating(location)} />
        </ClientSuspense>
      </header>

      <section className={" h-full w-full "}>{children}</section>

      <footer className="footer flex flex-col md:flex-row items-center justify-center p-2">
        <Footer />
      </footer>
    </>
  );
};

export default MainLayout;

```

then we can nest our pages inside it [src/routes/index.page.tsx](https://github.com/tigawanna/mashamba/blob/b85f2767bb9cf125063f2580890e860460884f1e/src/routes/index.page.tsx)

### useServerSideQuery

To fetch the lsitsing to show on iniiial load we'll use 
```ts
  const { data, refetch } = useServerSideQuery(
    () => return getPbListings(params);
    {
      refetchOnWindowFocus: true,
      refetchOnReconnect: true,
    }
  );
```

> `useServerSideQuery` (useSSQ for short) is Rakkas's novel data fetching solution. You ca`n think of it as Next.js's getServerSideProps on steroids. It lets you write code as if the server-client barrier didn't exist: You can call filesystem APIs, perform database queries, or call third-party APIs that require private keys or have CORS disabled. You can put any type of server-side code right in your component. Rakkas will strip this server-side code and its imports from the client bundle.

> Like `useQuery`, `useSSQ` takes a query function. When it's executed on the server, the query function is called directly. But when it's executed on the client, Rakkas serializes all the values used in the query function body and sends them to the server. The server then deserializes the values, runs the query function, and serializes the return value to be sent back to the client. Unlike getServerSideProps, it can be used in any React component, not just pages. It also provides type inference.

as for loading states 
> All Rakkas data fetching methods use Suspense. You can handle loading states by wrapping parts of your component tree in Suspense and providing fallbacks
> 

rakkas currently doesn't have  a `Image` component but i hacked a basic one together or this project and got good enough lighthouse scroes with it [GoodImage.tsx](https://github.com/tigawanna/mashamba/blob/a5e4f69cb9acac914aac837c2ca428655cea3eb6/src/components/shared/wrappers/GoodImage.tsx)

```tsx
<GoodImage
props={{ src: img_url as string, alt: land?.location }}
placeholderSrc={alt_img_url}
height={"200px"}
width={"300px"}
/>
```

> am using pocketbase which will generate a thumbnail for images uploaded which you can use as the fallback before the higher quality image loads 
  
### dynamic routes

after loading our listings we'd want to view each one individially , so we define a  [dynamic route](https://github.com/tigawanna/mashamba/blob/8a8ef5ef7f0910983afe217a7ca859309d6685fb/src/routes/listings/%5Bid%5D.page.tsx)


![file structure](https://github.com/tigawanna/mashamba/raw/master/docs/captures/file-structure.png)

and we'll fetch this listing by ID based on the param passed in 
```ts
const OneListingPage: Page = function OneListingPage({ params }: PageProps) {
  const [par_ams, SetParams] = useState<GetPbListingsParams>({
    filter_id:params.id,
    perPage: 3,
    page: 1,
    sort: "-created",
    expand: "owner",
  })

  const { data, refetch } = useServerSideQuery(
    () => {
      if (typeof params.id !== "string") {
        throw new Error("Invalid request , params.id must be of type string");
      }
      return getPbListings(par_ams);
    },
    {
      refetchOnWindowFocus: true,
      refetchOnReconnect: true,
    }
  );
//   retun JSX here
}
```
also notice how we have to validate the types of the params being sent to the server

### auth guards
And we might also want an admin page to faclitate adding new listings and updating the listings status after they're off the market
which is where rakkas auth guards come in 


add a `$guard.ts` to the admin directory 
![admin page structure](https://github.com/tigawanna/mashamba/blob/master/docs/captures/admin0file-structure.png)

to mark it off limits to unauthed users and redirect them to the login oage instead . rakkas has alot of middleware like this for even deeper customization


```ts
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

```

### mutation
Just like react-query rakkas has
`useMutation` and rakkas' own `useServerSideMutation`

in my case i had a ton of client side validation logic including a map so i stuck to `useMutation`

```ts
  const mutation = useMutation<PBListings, ListingFormInputs>(
    (input) => saveListing(input),
    {
      onSuccess: () => {

        setError({ name: "", message: "" });
      },
      onError: (err) => {
        console.log("rakkas useMutaion error  === ", err);
        setError({ name: "main", message: concatErrors(err) });
      },
    }
  );
```

but [useServerSideMutition](https://rakkasjs.org/guide/use-mutation) is as easy to use
example 
```ts
	const { data: currentUserName } = useServerSideQuery(() => getUserName(), {
		key: "userName",
	});

	const [localUserName, setLocalUserName] = useState(currentUserName);

	const queryClient = useQueryClient();
	const mutation = useServerSideMutation(
		() => {
			setUserName(localUserName);
		},
		{
			onSuccess() {
				queryClient.invalidateQueries("userName");
			},
		},
	);
```

### deploy

ten finally after all that is donw we deploy by following the instructions on the respective deployment strategy listed , for example [vercel](https://rakkasjs.org/guide/vercel) requires an adapter 

```sh
npm install -S @hattip/vercel-edge
```
and a vite config adjusument

```ts
import { defineConfig } from "vite";
import rakkas from "rakkasjs/vite-plugin";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    rakkas({
      adapter: "vercel", // or "vercel-edge"
    }),
  ],
  server: {
    host: true,
  },
});

```
After building with `rakkas build`, you can deploy with `vercel deploy --prebuilt`.

⚠ Vercel/netlify serveless functions don't have response streaming yet , but with vercel implementing thier own version an AWS lambda adding them officially it's goig to be added soon to rakkas so that we can enjoy the perks of react streaming on vercel/netlify non-edge platforms

⚠  Another thing to look out for is react-icons imports , where i've noticed it cause an issueif it doesnt end with `index.js`

`import { FaPhone, FaWhatsapp, FaEnvelope } from "react-icons/fa/index.js";`
instead of 
`import { FaPhone, FaWhatsapp, FaEnvelope } from "react-icons/fa";`

helpfull resources :
i asked a few quertons to the mantainer on their discussions and you might find the responeses helpful too

- [lighthouse optimizations](https://github.com/rakkasjs/rakkasjs/discussions/92)

> btw , hosting it on vercel fixed the uncompressed text and cimage caching headers errors  , if you go the NodeJS/Bun way you might need to configure nginx,caddy or similar


- [streaming SSR](https://github.com/rakkasjs/rakkasjs/discussions/103)

- [repo](https://github.com/tigawanna/mashamba)
- [hosted preview](https://mashamba.vercel.app/)
- [pocketbase](https://pocketbase.io/)
- [custom pocketbase code used for this project](https://github.com/tigawanna/devhub-backend)
