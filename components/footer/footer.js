import styles from "./footer.module.css";
import {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaPhoneAlt,
  } from "react-icons/fa";

export default function Footer() {
    return (
    <footer className={styles.footer_card}>
    <div className={styles.footer_card_desc}>
      <div className={styles.footer_card_info}>
        <h4>Deens wears</h4>
        <span>Follow us:</span>
        <div className={styles.footer_social}>
          <FaFacebook className={styles.footer_social_icon} />
          <FaTwitter className={styles.footer_social_icon} />
          <FaInstagram className={styles.footer_social_icon} />
        </div>

        <p>&copy;copyright 2023 by Deens wears. All Right Reserved</p>
      </div>
    </div>
  </footer>
  );
}
