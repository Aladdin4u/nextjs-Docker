import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPhoneAlt,
  FaStar
} from "react-icons/fa";
import { FiMail, } from "react-icons/fi";
import { MdLocationOn } from "react-icons/md";
import Navbar from "./navbar/navbar";
import Header from "./header/header";

const name = "Aladdin";
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
      <section className={styles.header}>
        <h1 className={utilStyles.heading2Xl}>Gallery</h1>
        <p>Our experirence always updates the latest styles</p>
        <div>
          <div className={styles.grid}>
            <Image
              priority
              src="/images/junior-reis-c7kxs1aA4v8-unsplash.jpg"
              // className={utilStyles.borderCircle}
              height={400}
              width={400}
              alt=""
            />
            <Image
              priority
              src="/images/pedro-vit-nxssxDuytMA-unsplash.jpg"
              // className={utilStyles.borderCircle}
              height={400}
              width={400}
              alt=""
            />
            <Image
              priority
              src="/images/valeria-odnovol-vFcfeKAKGlg-unsplash.jpg"
              // className={utilStyles.borderCircle}
              height={400}
              width={400}
              alt=""
            />
            <Image
              priority
              src="/images/s-o-c-i-a-l-c-u-t-7KkDiSs5UdQ-unsplash.jpg"
              // className={utilStyles.borderCircle}
              height={400}
              width={400}
              alt=""
            />
          </div>
        </div>
      </section>
      <section className={styles.header} id="services">
        <h1 className={utilStyles.heading2Xl}>SERVICES AND OPEN HOURS</h1>
        <h6>Monday - Saturday 8:30am - 7pm</h6>
        <button className={styles.btn}>Contact Us</button>
        <div>
          <div className={styles.grid_4}>
            <div className={styles.card}>
              <Image
                priority
                src="/images/s-o-c-i-a-l-c-u-t-7KkDiSs5UdQ-unsplash.jpg"
                className={styles.card_image}
                height={200}
                width={200}
                alt=""
              />
              <div className={styles.card_desc}>Ankara</div>
            </div>
            <div className={styles.card}>
              <Image
                priority
                src="/images/junior-reis-c7kxs1aA4v8-unsplash.jpg"
                className={styles.card_image}
                height={200}
                width={200}
                alt=""
              />
              <div className={styles.card_desc}>English</div>
            </div>
            <div className={styles.card}>
              <Image
                priority
                src="/images/pedro-vit-nxssxDuytMA-unsplash.jpg"
                className={styles.card_image}
                height={200}
                width={200}
                alt=""
              />
              <div className={styles.card_desc}>Native</div>
            </div>
            <div className={styles.card}>
              <Image
                priority
                src="/images/prince-akachi-6NhEFn3aqjc-unsplash.jpg"
                className={styles.card_image}
                height={200}
                width={200}
                alt=""
              />
              <div className={styles.card_desc}>Senator</div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.header}>
        <Image
          priority
          src="/images/prince-akachi-6NhEFn3aqjc-unsplash.jpg"
          className={utilStyles.borderCircle}
          height={200}
          width={200}
          alt=""
        />
        <div className={styles.desc}>
          <p>ABout Me, The Fashion Designer</p>
          <p>
            Just me, myself and I, exploring the universe of unknownment. I have
            a heart of love and an interest of lorem ipsum and mauris neque quam
            blog. I want to share my world with you. Praesent tincidunt sed
            tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae,
            ultricies congue gravida diam non fringilla. Praesent tincidunt sed
            tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae,
            ultricies congue gravida diam non fringilla.
          </p>
        </div>
      </section>
      <section className={styles.header} id="contact">
        <h1 className={utilStyles.heading2Xl}>Contact</h1>
        <p>Let us Known your next design</p>
        <div className={styles.grid_2}>
          <div>
            <MdLocationOn /> Lagos, Nigeria
            <br />
            <FaPhoneAlt /> Phone: +00 151515
            <br />
            <FiMail /> Email: mail@mail.com
            <br />
          </div>
          <div>
            <form className={styles.form_data}>
              <div className={styles.half}>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  className={styles.input}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className={styles.input}
                />
              </div>
              <div className={styles.half_col}>
                <input
                  type="text"
                  name="message"
                  placeholder="Message"
                  className={styles.block}
                />
                <button className={styles.form_button}>SEND</button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <footer className={styles.footer_card}>
        <div className={styles.footer_card_desc}>
          <div className={styles.footer_card_info}>
            <h4>Deens wears</h4>
            <p>Home made quality</p>
            <div className={styles.footer_social}>
              <FaFacebook />
              <FaTwitter />
              <FaInstagram />
            </div>

            <p>&copy;copyright 2023 by Deens wears. All Right Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
