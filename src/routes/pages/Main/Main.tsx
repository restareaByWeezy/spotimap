import MapContainer from './components/MapContainer'
import Spotify from './components/Spotify'

import styles from './Main.module.scss'

const Main = () => {
  return (
    <div className={styles.container}>
      <MapContainer />
      <Spotify />
    </div>
  )
}

export default Main
