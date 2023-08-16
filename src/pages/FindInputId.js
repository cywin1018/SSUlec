import styles from "./cssPage/FindInputId.module.css";
export default function FindInputId() {
  return (
    <>
      <div className={styles.Outer}>
        <h1 className={styles.title}>비밀번호 찾기</h1>
        <h2 className={styles.idTitle}>아이디 입력</h2>
        <form>
          <input
            className={styles.InputId}
            placeholder="아이디를 입력하세요."
          />
        </form>
        <button className={styles.send}>send</button>
      </div>
    </>
  );
}
