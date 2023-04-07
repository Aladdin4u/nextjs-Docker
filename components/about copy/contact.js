import styles from "./contact.module.css";
import utilStyles from "../../styles/utils.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { FiMail, } from "react-icons/fi";
import { MdLocationOn } from "react-icons/md";

export default function Contact() {
  return (
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
  );
}
