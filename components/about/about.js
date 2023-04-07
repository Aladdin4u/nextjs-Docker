import Image from "next/image";
import styles from "./about.module.css";
import utilStyles from "../../styles/utils.module.css";

export default function About() {
  return (
    <section className={styles.header} id="about">
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
  );
}
