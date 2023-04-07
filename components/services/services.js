import Image from "next/image";
import styles from "./services.module.css";
import utilStyles from "../../styles/utils.module.css";

export default function Services() {
  return (
    <section className={styles.header} id="services">
        <h1 className={utilStyles.heading2Xl}>Services</h1>
        <h6>Monday - Saturday <b>8:30am - 7pm</b></h6>
        
        <div>
          <div className={styles.grid}>
            <div className={styles.card}>
              <Image
                priority
                src="/images/s-o-c-i-a-l-c-u-t-7KkDiSs5UdQ-unsplash.jpg"
                className={styles.card_image}
                height={200}
                width={200}
                alt=""
              />
              <div className={styles.card_middle}>Ankara</div>
            </div>
            <div className={styles.card_desc}>
              <p>lorem Praesent tincidunt sed
            tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae,
            ultricies congue gravida diam non fringilla.</p>
            <b>price - #10,000</b>
            <button className={styles.btn}>Contact Us</button>
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
              <div className={styles.card_middle}>English</div>
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
              <div className={styles.card_middle}>Native</div>
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
              <div className={styles.card_middle}>Senator</div>
            </div>
          </div>
        </div>
      </section>
  );
}
