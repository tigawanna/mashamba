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

      <header className="w-full h-12 p-2 z-30 sticky top-0 bg-slate-900 text-white">
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
