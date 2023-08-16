import styles from "./cssPage/FindId.module.css";

export default function FindId() {
  return (
    <>
      <div className={styles.Outer}>
        <h1 className={styles.title}>아이디 찾기</h1>
        <h2 className={styles.idTitle}>이메일 인증</h2>
        <p className={styles.content}>
          회원 가입 시 작성한 이메일 주소로
          <p> 전달된 인증번호를 입력하세요.</p>
        </p>
        <form className={styles.buttonWith1}>
          <input
            className={styles.InputId}
            placeholder="이메일 주소를 입력하세요."
          />
          <button className={styles.send}>인증번호 받기</button>
        </form>
        <form className={styles.buttonWith1}>
          <input className={styles.InputId} placeholder="인증번호 입력" />
          <button className={styles.send}>인증</button>
        </form>
        <form className={styles.nxtBtnForm}>
          <button className={styles.nextButton}>다음</button>
        </form>
      </div>
    </>
  );
}
