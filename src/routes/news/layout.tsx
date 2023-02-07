// This is the main layout of our app. It renders the header and the footer.

import { Head, Link, StyledLink, Layout } from "rakkasjs";




const MainLayout: Layout = ({ children }) => (
  <>
    {/* Rakkas relies on react-helmet-async for managing the document head */}
    {/* See their documentation: https://github.com/staylor/react-helmet-async#readme */}
    <Head title="News Time" />
    <header className="w-full text-lg font-bold text-center sticky top-12">NEWS</header>

    <section className="">{children}</section>


  </>
);

export default MainLayout;
