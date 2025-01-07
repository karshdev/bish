import styles from './Card.module.css';
function Card() {
  return (
    <div className={styles.testimonialSection}>
      <h2 className={styles.heading}>What's being said...</h2>
      <div className={styles.testimonialContainer}>
        <div className={styles.testimonialCard}>
          <h3 className={styles.name1}>John H.</h3>
          <p className={styles.name2}>Kingston</p>
          <div className={styles.stars}>
            &#9733; &#9733; &#9733; &#9733; &#9733;</div>
          <p>It's a really good idea My home's BISH! code saved us</p>
          <p className={styles.amount}>£150 on our radiator job.</p>
        </div>
        <div className={styles.testimonialCard}>
          <h3 className={styles.name1}>John H.</h3>
          <p className={styles.name2}>Kingston</p>
          <div className={styles.stars}>&#9733; &#9733; &#9733; &#9733; &#9733;</div>
          <p>It's a really good idea My home's BISH! code saved us</p>
          <p className={styles.amount}>£150 on our radiator job.</p>
        </div>
        <div className={styles.testimonialCard}>
          <h3 className={styles.name1}>John H.</h3>
          <p className={styles.name2}>Kingston</p>
          <div className={styles.stars}>&#9733; &#9733; &#9733; &#9733; &#9733;</div>
          <p>It's a really good idea My home's BISH! code saved us</p>
          <p className={styles.amount}>£150 on our radiator job.</p>
        </div>
      </div>
    </div>
  )
}
export default Card;