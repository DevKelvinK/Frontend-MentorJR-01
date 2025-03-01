import styles from "./Header.module.css";

import Logo from "./../assets/logo.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={Logo} alt="Logotipo Hunddle" />

      <button disabled="disabled">
        <a href="#buttonCTA">Try it free</a>
      </button>
    </header>
  );
}
