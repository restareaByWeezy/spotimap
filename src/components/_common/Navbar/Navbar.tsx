import { Slogo } from 'assets/svgs'
import styles from './Navbar.module.scss'

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Slogo className={styles.Slogo} />
        Spotimap
      </div>
      <div className={styles.menu}>
        <div className={styles.home}>Home</div>
      </div>
    </div>
  )
}

export default Navbar
