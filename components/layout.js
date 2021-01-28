import Link from "next/link";
import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress";

Router.onRouteChangeStart = (url) => {
  console.log(url);
  NProgress.start();
};

Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

const Layout = ({ children, title }) => (
  <div className="layout">
    <Head>
      <title>Portfolio</title>
    </Head>
    <header>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/work">
        <a>Work</a>
      </Link>
      <Link href="/contact">
        <a>Contact</a>
      </Link>
    </header>

    <h1>{title}</h1>

    {children}

    <footer>
      <p>
        RISHABH TANWAR <span>&copy;{new Date().getFullYear()}</span>
      </p>
    </footer>

    <style jsx>{`
      .layout {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
      }
      header {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-around;
        background: #121013;
        padding: 1em;
        font-size: 1.2rem;
      }
      header a {
        color: #fff;
        text-decoration: none;
        font-weight: 600;
      }
      header a:hover {
        color: #000;
      }
      footer {
        background: #0f3057;
        color: #fff;
        width: 100%;
        font-size: 20px;
        text-align: center;
        padding: 10px;
        letter-spacing: 2px;
      }
    `}</style>
    <style global jsx>{`
      body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        width: 100%;
        background: #2d2e2e;
        color: #fff;
        overflow-x: hidden;
        font-family: "Raleway", sans-serif;
      }
      ::-webkit-scrollbar {
        width: 5px;
      }
      ::-webkit-scrollbar-thumb {
        background: #fff;
        border-radius: 3px;
      }
      ::-webkit-scrollbar-track {
        background: #fff;
      }
    `}</style>
  </div>
);

export default Layout;
