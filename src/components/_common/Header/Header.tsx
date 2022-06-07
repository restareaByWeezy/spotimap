import { Slogo } from 'assets/svgs/index'

import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={styles.title}>
      <Slogo className={styles.logo} />
      <h1 className={styles.textTitle}>What you heard?</h1>
    </header>
  )
}

export default Header
