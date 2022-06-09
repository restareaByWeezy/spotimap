import styles from './Favorite.module.scss'
import SpotifyPlayer from 'react-spotify-web-playback'
import Cookies from 'universal-cookie'

const Favorite = () => {
  const cookie = new Cookies()
  const token = cookie.get('auth')

  return (
    <div className={styles.container}>
      <aside>123</aside>
      <div className={styles.mainWrapper}>
        <div className={styles.topTrackContainer}>
          <div className={styles.topTrackTitle}>
            <h1>Top Tracks</h1>
            <p>-top 50</p>
          </div>
        </div>
        <ul>
          <li>track</li>
          <SpotifyPlayer token={token} uris={['spotify:artist:6HQYnRM4OzToCYPpVBInuU']} />
        </ul>
      </div>
    </div>
  )
}

export default Favorite
