// This is the main layout of our app. It renders the header and the footer.

import {
  ClientSuspense,
  Head,
  Layout,
  useLocation,
  UseLocationResult,
} from "rakkasjs";
import "../styles/tailwind.css";
import "./layout.module.css";

const MainLayout: Layout = ({ children }) => {
  const location = useLocation();

  return (
    <>
      {/* Rakkas relies on react-helmet-async for managing the document head */}
      {/* See their documentation: https://github.com/staylor/react-helmet-async#readme */}
      <Head title="About">
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
        ></link>
      </Head>

      <section className={" h-full w-full "}>{children}</section>
    </>
  );
};

export default MainLayout;
