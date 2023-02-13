// This is the main layout of our app. It renders the header and the footer.

import { Head, Link, StyledLink, Layout } from "rakkasjs";
import '../styles/tailwind.css'
import "./layout.module.css";

const MainLayout: Layout = ({ children }) => (
  <>
    {/* Rakkas relies on react-helmet-async for managing the document head */}
    {/* See their documentation: https://github.com/staylor/react-helmet-async#readme */}
    <Head title="Real estates">
      <link rel="icon" type="image/x-icon" href="favicon.ico"/>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"></link>
    </Head>

    <header className='w-full h-12 p-2 sticky top-0 bg-slate-900'>
      {/* <Link /> is like <a /> but it provides client-side navigation without full page reload. */}
 <nav className="w-full flex items-center justify-between gap-2 ">
      <div>
          <Link className="h-full truncate min-w-24 text-3xl font-bold hover:text-purple-900" href="/">
            Real Estates
          </Link>
      </div>
      <div className="flex flex-wrap">
          <StyledLink href="/" activeClass={"text-purple-700"} className="p-2 hover:text-purple-700">Home</StyledLink>
          <StyledLink href="/about" activeClass={"text-purple-700"} className="p-2 hover:text-purple-700">About</StyledLink>
          <StyledLink href="listings" activeClass={"text-purple-700"} className="p-2 hover:text-purple-700">Listings</StyledLink>
          <StyledLink href="/contact" activeClass={"text-purple-700"} className="p-2 hover:text-purple-700">Contact Us</StyledLink>
          </div>
        </nav>
</header>

    <section className={" h-full w-full"}>{children}</section>

  <footer className="footer h-14 flex flex-col md:flex-row items-center justify-center p-2">
    <div className="f1">
      <div className="line1">
        <a href="#" className="nlinks">Locations</a>
        <a href="#" className="nlinks">Developers</a>
        <a href="#" className="nlinks">Hot Zones</a>
        <a href="#" className="nlinks">Sold</a>
      </div>
      <div className="line2">
        <a href="#" className="nlinks">Buy</a>
        <a href="#" className="nlinks">Sell</a>
        <a href="#" className="nlinks">Rent</a>
      </div>
      <div className="line3">
        <div className="sub">
          <input type="text" placeholder="Subscribe"/>
          <button className="subtn">Enter</button>
        </div>
      </div>
    </div>
    <div className="f2">
      <div className="topicons">
        <i className="fab fa-instagram"></i>
        <i className="fab fa-facebook"></i>
        <i className="fab fa-twitter"></i>
        <i className="fab fa-whatsapp"></i>
      </div>
      <p className="copy">&copy; findhome 2023</p>
      <a href="#top"><i className="far fa-arrow-alt-circle-up"></i></a>
    </div>
  </footer>
  </>
);

export default MainLayout;
