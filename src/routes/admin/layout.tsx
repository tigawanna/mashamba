// This is the main layout of our app. It renders the header and the footer.

import { Head, Layout} from "rakkasjs";
const MainLayout: Layout = ({ children }) => {
return (
        <>
            {/* Rakkas relies on react-helmet-async for managing the document head */}
            {/* See their documentation: https://github.com/staylor/react-helmet-async#readme */}
            <Head title="Admin">
                <link rel="icon" type="image/x-icon" href="/favicon.ico" />

            </Head>

            <section className={" h-full w-full "}>{children}</section>

        </>
    )
};

export default MainLayout;
