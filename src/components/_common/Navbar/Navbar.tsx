import { Slogo } from 'assets/svgs'
import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.scss'

const Navbar = () => {
  return (
    <div className={styles.container}>
      <NavLink to='/' className={styles.logo}>
        <Slogo className={styles.Slogo} />
        Spotimap
      </NavLink>

      <div className={styles.menu}>
        <NavLink to='/' className={styles.home}>
          Home
        </NavLink>
      </div>
    </div>
  )
}

export default Navbar
