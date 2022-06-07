import { NavLink } from 'react-router-dom'

import { Slogo } from 'assets/svgs'

import styles from './Navbar.module.scss'

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <NavLink to='/' className={styles.logo}>
        <Slogo className={styles.Slogo} />
        <span>Spotimap</span>
      </NavLink>
      <div className={styles.menu}>
        <NavLink to='/' className={styles.navLink}>
          Home
        </NavLink>
        <NavLink to='favorite' className={styles.navLink}>
          Favorite
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar
