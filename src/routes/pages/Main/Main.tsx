import AddMarker from './components/AddMarker/AddMarker'
import MapContainer from './components/MapContainer/MapContainer'
import Spotify from './components/Spotify/Spotify'

import styles from './Main.module.scss'

const Main = () => {
  return (
    <div className={styles.container}>
      <div className={styles.searchWrapper}>
        <Spotify />
        <MapContainer />
      </div>
      <div className={styles.formWrapper}>
        <AddMarker />
      </div>
    </div>
  )
}

export default Main
