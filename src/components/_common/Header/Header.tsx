import { Slogo } from 'assets/svgs/index'

import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={styles.title}>
      <Slogo className={styles.logo} />
      <title className={styles.textTitle}>What you heard?</title>
    </header>
  )
}

export default Header
