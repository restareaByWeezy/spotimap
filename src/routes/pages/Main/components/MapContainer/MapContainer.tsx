import React, { useState } from 'react'
import { Map, MapMarker } from 'react-kakao-maps-sdk'
import { useRecoilState, useRecoilValue } from 'recoil'
import { markerInfoAtom, positionAtom } from 'states/atom'
import styles from './MapContinaer.module.scss'

const MapContainer = () => {
  const [position, setPosition] = useRecoilState(positionAtom)
  const markerInfo = useRecoilValue(markerInfoAtom)
  const [isOpen, setIsOpen] = useState(-1)

  const markerList = markerInfo.map((marker, index) => {
    return (
      marker.spotifyInfo !== '' && (
        <MapMarker
          key={marker.spotifyInfo.uri}
          position={{ lat: marker.lat, lng: marker.lng }}
          image={{
            src: `${marker.spotifyInfo.img}`,
            size: { width: 40, height: 40 },
          }}
          clickable
          onMouseOver={() => setIsOpen(index)}
          onMouseOut={() => setIsOpen(-1)}
        >
          {isOpen === index && (
            <div className={styles.markerContainer}>
              <img className={styles.img} src={marker.spotifyInfo.img} alt='img' />
              <div className={styles.detail}>
                <div className={styles.artist}>{marker.spotifyInfo.artist}</div>
                <div className={styles.title}>{marker.spotifyInfo.title}</div>
              </div>
            </div>
          )}
        </MapMarker>
      )
    )
  })

  return (
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
      {markerInfo.length ? markerList : ''}
    </Map>
  )
}

export default React.memo(MapContainer)
