import Image from "next/image";
import styles from "./services.module.css";
import utilStyles from "../../styles/utils.module.css";

export default function Services() {
  return (
    <section className={styles.header} id="services">
      <h3 className={utilStyles.heading2Xl}>Services</h3>
      <h4>What we do best</h4>
      <p>Our experience to always updates the latest styles</p>

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
            <div className={styles.desc}>
              <p className={styles.descp}>Ankara</p>
              <div className={styles.info}>
                <b>#10,000</b>
                <button className={styles.btn}>BUY</button>
              </div>
            </div>
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
            <div className={styles.desc}>
              <p className={styles.descp}>English wear</p>
              <div className={styles.info}>
                <b>#20,000</b>
                <button className={styles.btn}>BUY</button>
              </div>
            </div>
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
            <div className={styles.desc}>
              <p className={styles.descp}>Native</p>
              <div className={styles.info}>
                <b>#50,000</b>
                <button className={styles.btn}>BUY</button>
              </div>
            </div>
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
            <div className={styles.desc}>
              <p className={styles.descp}>Senator</p>
              <div className={styles.info}>
                <b>#100,000</b>
                <button className={styles.btn}>BUY</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className={styles.open} />
      
      <h3>Opening Hours</h3>
      <h4>
        Monday - Saturday <b>8:30am - 7pm</b>
      </h4>
    </section>
  );
}
