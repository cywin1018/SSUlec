import Logo from "../Components/Logo";
import Tabs from "../Components/Tabs";
import styles from "./cssPage/Main.module.css";

export default function Main() {
  return (
    <>
      <div className={styles.tot}>
        <Logo />
        <Tabs />
      </div>
    </>
  );
}
