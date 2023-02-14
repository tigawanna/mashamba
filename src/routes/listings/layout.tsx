// This is the main layout of our app. It renders the header and the footer.

import { Head, Layout} from "rakkasjs";
const MainLayout: Layout = ({ children }) => {
return (
        <>
            {/* Rakkas relies on react-helmet-async for managing the document head */}
            {/* See their documentation: https://github.com/staylor/react-helmet-async#readme */}
            <Head title="Listings">
                <link rel="icon" type="image/x-icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"></link>
            </Head>

            <section className={" h-full w-full "}>{children}</section>

        </>
    )
};

export default MainLayout;