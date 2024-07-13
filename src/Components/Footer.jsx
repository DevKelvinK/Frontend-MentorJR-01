/* Icons */
import {
  BiLogoFacebookSquare,
  BiLogoInstagram,
  BiLogoTwitter,
} from "react-icons/bi";

/* Images */
import styles from "./Footer.module.css";

import Logo from "../assets/logoFooter.svg";
import iconPhone from "../assets/icon-phone.svg";
import iconEmail from "../assets/icon-email.svg";

/* Component */
import { Form } from "./Form";

export function Footer() {
  return (
    <>
      <div className={styles.bgTop}></div>

      <footer>
        <section className={styles.contactSection}>
          <img className={styles.logo} src={Logo} alt="Logotipo Hunddle" />

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            nulla quam, hendrerit lacinia vestibulum a, ultrices quis sem.
          </p>

          <div className={styles.contact}>
            <img src={iconPhone} />
            <span>Phone: +1-543-123-4567</span>
          </div>

          <div className={styles.contact}>
            <img src={iconEmail} />
            <span>example@huddle.com</span>
          </div>

          <nav className={styles.socialMediaIcons}>
            <a
              className={styles.iconFacebook}
              href="http://facebook.com"
              target="_blank"
            >
              <BiLogoFacebookSquare />
            </a>

            <a
              className={styles.iconInstagram}
              href="http://instagram.com"
              target="_blank"
            >
              <BiLogoInstagram />
            </a>

            <a
              className={styles.iconTwitter}
              href="http://x.com"
              target="_blank"
            >
              <BiLogoTwitter />
            </a>
          </nav>
        </section>

        <section className={styles.formSection}>
          <h3>Newsletter</h3>

          <p>
            To recieve tips on how to grow your community, sign up to our weekly
            newsletter. We'll never send you spam or pass on your email address
          </p>

          <Form />
        </section>
      </footer>
    </>
  );
}
