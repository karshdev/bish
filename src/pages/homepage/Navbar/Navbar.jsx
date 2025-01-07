import styles from './Navbar.module.css';
function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <img src='Group 397.png' alt='logo'></img>
      </div>
    </div>
  )
}
export default Navbar;