import styles from "./cssPage/NewPassword.module.css";
export default function NewPassword() {
  return (
    <>
      <div className={styles.Outer}>
        <h1 className={styles.title}>SSULEC</h1>
        <h2 className={styles.passTitle}>비밀번호 재설정</h2>

        <form>
          <input
            className={styles.password}
            type="password"
            placeholder="비밀번호 입력"
          />
          <input
            className={styles.passConfirm}
            type="password"
            placeholder="비밀번호 확인"
          />
        </form>
        <button className={styles.send}>confirm</button>
      </div>
    </>
  );
}
