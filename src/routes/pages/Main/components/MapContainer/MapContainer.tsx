import { useState } from 'react'
import { Map, MapMarker } from 'react-kakao-maps-sdk'
import { useRecoilState } from 'recoil'
import { positionAtom } from 'states/atom'
import styles from './MapContainer.module.scss'

const MapContainer = () => {
  const [position, setPosition] = useRecoilState(positionAtom)

  return (
    <div className={styles.container}>
      <Map
        center={{ lat: 33.450701, lng: 126.570667 }}
        style={{ width: '100%', height: '100%' }}
        onClick={(_t, mouseEvent) => {
          if (mouseEvent.latLng) {
            setPosition({
              lat: mouseEvent.latLng.getLat(),
              lng: mouseEvent.latLng.getLng(),
            })
          }
        }}
      >
        {position && <MapMarker position={position} />}
        <MapMarker position={{ lat: 33.450701, lng: 126.570667 }}>
          <div style={{ color: '#000' }}>Hello World!</div>
        </MapMarker>
      </Map>
    </div>
  )
}

export default MapContainer
