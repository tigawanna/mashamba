// This is the main layout of our app. It renders the header and the footer.

import { Head, Layout } from "rakkasjs";
const MainLayout: Layout = ({ children }) => {
  return (
    <>
      {/* Rakkas relies on react-helmet-async for managing the document head */}
      {/* See their documentation: https://github.com/staylor/react-helmet-async#readme */}
      <Head title="Listings">
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="description" content="Real Esate Listings" />
        <meta name="keywords" content="real estate listings in kenya" />
      </Head>

      <section className={" h-full w-full "}>{children}</section>
    </>
  );
};

export default MainLayout;
