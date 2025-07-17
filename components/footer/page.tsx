import styles from "./footer.module.css";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.topLine}></div>
      <div className={styles.content}>
        <p className={styles.title}>Graille Zone — Street Food Cestas</p>
        <div className={styles.icons}>
          <a
            href="https://facebook.com/graillezone"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://instagram.com/graillezone"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>
        </div>
        <p className={styles.rights}>
          © {new Date().getFullYear()} Graille Zone. Tous droits réservés.
        </p>
      </div>
      <div className={styles.bottomLine}></div>
    </footer>
  );
}

