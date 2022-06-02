import { Map, MapMarker } from 'react-kakao-maps-sdk'
import { useRecoilState, useRecoilValue } from 'recoil'
import { markerInfoAtom, positionAtom } from 'states/atom'
import styles from './MapContainer.module.scss'

const MapContainer = () => {
  const [position, setPosition] = useRecoilState(positionAtom)
  const markerInfo = useRecoilValue(markerInfoAtom)

  console.log(markerInfo)

  const markerList = markerInfo.map((marker) => {
    console.log(markerInfo)

    return marker.spotifyInfo !== '' ? (
      <MapMarker key={marker.spotifyInfo.img} position={{ lat: marker.lat, lng: marker.lng }}>
        <div style={{ color: '#000' }}>{marker.spotifyInfo.artist}</div>
      </MapMarker>
    ) : (
      ''
    )
  })

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
        {/* {markerList} */}
      </Map>
    </div>
  )
}

export default MapContainer
