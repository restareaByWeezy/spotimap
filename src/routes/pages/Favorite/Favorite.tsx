import styles from './Favorite.module.scss'

const Favorite = () => {
  return (
    <div className={styles.container}>
      <aside>123</aside>
      <div className={styles.listWrapper}>
        <div>search</div>
        <div>current track</div>
        <ul>
          <li>track</li>
        </ul>
      </div>
    </div>
  )
}

export default Favorite
