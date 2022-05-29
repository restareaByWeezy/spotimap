import { Slogo } from 'assets/svgs/index'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <div className={styles.title}>
      <Slogo className={styles.logo} />
      <div className={styles.textTitle}>What you heard?</div>
    </div>
  )
}

export default Header
