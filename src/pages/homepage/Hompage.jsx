import styles from './Homepage.module.css';
import Navbar from './Navbar/Navbar';


function Homepage() {
  return (
    <div className={styles.container}>
      <div className={styles.herosection}>
        <div className={styles.leftSection}>
          <Navbar />
          <div className={styles.twoInone}>
            <div className={styles.textBox}>
              <div className={styles.parent}>
                <p className={styles.heading}>Plumber prices are
                  crazy. Your home’s
                  BISH! code fixes that</p>

                <p className={styles.normalPara}>
                  We got fed up pf crazy plumbing quotes
                  and now we’re on a mission to solve
                  Homeowners over £1 million on plumbing
                  jobs and more. Get your home’s BISH!
                  code to join the challenge.
                </p>

              </div>

              <div className={styles.addressBox}>
                <p className={styles.topText}>GET YOUR HOME’S BISH! CODE</p>
                <button className={styles.findAddressButton}>
                  Find your address
                  <span className={styles.arrow}>➝</span>
                </button>
              </div>

            </div>

            <div className={styles.bishCard3}>
              <h3 className={styles.bishTitle3}>ALREADY GOT YOUR HOME’S BISH! CODE?</h3>
              <p className={styles.bishDescription3}>
                Great. you’re ready to get your BISH! price for your next tradesperson job.
              </p>
              <button className={styles.bishButton3}>
                Get my BISH! Price <span className={styles.bishArrow3}>→</span>
              </button>
            </div>
          </div>

        </div>
        <div className={styles.rightSection}>
          <img src='Vector 2.png' className={styles.shadow}></img>
          <img src='Vector3.png' className={styles.overshadow}></img>
          <div className={styles.mobileImgContainer}>
            <img src='Group 417.png' className={styles.mobileImg}></img>
          </div>

        </div>

      </div>

    </div>
  )
}
export default Homepage;