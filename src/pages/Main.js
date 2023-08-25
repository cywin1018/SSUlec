import Tabs from "../Components/Tabs";
import styles from "./cssPage/Main.module.css";

export default function Main() {
  return (
    <>
      <div className={styles.tot}>
        <h1 className={styles.title}>SSULEC</h1>
        <Tabs />
      </div>
    </>
  );
}
