import styles from "./App.module.css";

import { Header } from "./Components/Header";
import { Main } from "./Components/Main";
import { Footer } from "./Components/Footer";

export function App() {
  return (
    <div className={styles.container}>
      <Header />

      <Main />

      <Footer />
    </div>
  );
}