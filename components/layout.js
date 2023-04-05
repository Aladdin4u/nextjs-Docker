import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
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
        <h1 className={utilStyles.heading2Xl}>SERVICES</h1>
        <p>Services we render and open hours</p>
        <div>
          <div className={styles.grid_2}>
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
              <div>
                <h5>Open Hours</h5>
                <h6>Monday - 8:30am - 7pm</h6>
                <h6>Tuesday - 8:30am - 7pm</h6>
                <h6>Wednesday - 8:30am - 7pm</h6>
                <h6>Thursday - 8:30am - 7pm</h6>
                <h6>Friday - 8:30am - 7pm</h6>
                <h6>Saturday - 8:30am - 7pm</h6>
                <button>book Appointment</button>
              </div>
          </div>
        </div>
      </section>
      <section className={styles.header} id="contact">
        <h1 className={utilStyles.heading2Xl}>Contact</h1>
        <p>Let us Known your next design</p>
        <div className={styles.grid_2}>
          <div>
            <i class="fa fa-map-marker"></i> Lagos, Nigeria
            <br />
            <i class="fa fa-phone"></i> Phone: +00 151515
            <br />
            <i class="fa fa-envelope"> </i> Email: mail@mail.com
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
            <p>copyright 2023&copy;</p>
          </div>
          <div className={styles.footer_card_info}>
            <h4>Links</h4>
            <ul>
              <li>
                <Link href="#about">About</Link>
              </li>
              <li>
                <Link href="#about">Offers</Link>
              </li>
              <li>
                <Link href="#services">services</Link>
              </li>
              <li>
                <Link href="#contact">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className={styles.footer_card_info}>
            <h4>follow us on social media</h4>
          </div>
        </div>
      </footer>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/prince-akachi-6NhEFn3aqjc-unsplash.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt=""
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/images/profile.jpg"
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt=""
              />
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherit}>
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
    </div>
  );
}
