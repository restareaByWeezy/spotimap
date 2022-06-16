import styles from './Favorite.module.scss'
import SpotifyPlayer from 'react-spotify-web-playback'
import Login from 'components/_common/Login/Login'
import { tokenAtom } from 'states/atom'
import { useRecoilValue } from 'recoil'

const Favorite = () => {
  const token = useRecoilValue(tokenAtom)

  return (
    <div className={styles.container}>
      <aside>123</aside>
      <div className={styles.mainWrapper}>
        <div className={styles.topTrackContainer}>
          <div className={styles.topTrackTitle}>
            <h1>Top Tracks</h1>
            <p>-top 50</p>
            <Login />
          </div>
        </div>
        <ul>
          <li>track</li>
        </ul>
      </div>
    </div>
  )
}

export default Favorite
