import styles from './MiddleLineLogo.module.css';
function MiddleLineLogo() {
  return (
    <div className={styles.container}>
      <div className={styles.line}></div>
      <div className={styles.logoWrapper}>
        <div className={styles.logoBox}>
          <div className={styles.iconWrapper}>
            <img src='Vector.png'></img>
            {/* <div className={styles.iconContainer}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className={styles.icon}
              >
                <path
                  d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                />
                <path d="M9 22V12h6v10" />
              </svg>
            </div> */}
          </div>
        </div>
      </div>
      <div className={styles.line}></div>
    </div>
  )
}
export default MiddleLineLogo;