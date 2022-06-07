import AddMarker from 'components/Main/AddMarker/AddMarker'
import MapContainer from 'components/Main/MapContainer/MapContainer'
import Spotify from 'components/Main/Spotify/Spotify'
import Header from 'components/_common/Header/Header'

import styles from './Main.module.scss'

const Main = () => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.infoWrapper}>
        <div className={styles.spotifyWrapper}>
          <AddMarker />
          <Spotify />
        </div>
        <div className={styles.mapWrapper}>
          <MapContainer />
        </div>
      </div>
    </div>
  )
}

export default Main
