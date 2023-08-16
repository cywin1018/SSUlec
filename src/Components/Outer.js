import styles from "./Outer.module.css";

export default function Outer() {
  return (
    <>
      <div className={styles.AppOuter}>
        <div className={styles.AppContent}></div>
      </div>
    </>
  );
}
