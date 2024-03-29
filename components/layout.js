import Head from "next/head";
import styles from "./layout.module.css";
import Navbar from "./navbar/navbar";
import Header from "./header/header";
import Services from "./services/services";
import Gallery from "./gallery/gallery";
import About from "./about/about";
import Contact from "./about copy/contact";
import Footer from "./footer/footer";

export const siteTitle = "Fashion Designer";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Navbar />
      <Header />
      <Services />
      <About />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}
