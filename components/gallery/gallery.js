import Image from "next/image";
import styles from "./gallery.module.css";
import utilStyles from "../../styles/utils.module.css";

export default function Gallery() {
  return (
    <section className={styles.header}>
        <h1 className={utilStyles.heading2Xl}>Gallery</h1>
        <p>Our collections</p>
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
  );
}
