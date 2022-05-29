import { Map, MapMarker } from 'react-kakao-maps-sdk'
import styles from './MapContainer.module.scss'

const MapContainer = () => {
  return (
    <div className={styles.container}>
      <Map center={{ lat: 33.450701, lng: 126.570667 }} style={{ width: '60%', height: '100%' }}>
        <MapMarker position={{ lat: 33.450701, lng: 126.570667 }}>
          <div style={{ color: '#000' }}>Hello World!</div>
        </MapMarker>
      </Map>
    </div>
  )
}

export default MapContainer
