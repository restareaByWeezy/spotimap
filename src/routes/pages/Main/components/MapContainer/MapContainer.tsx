import React from 'react'
import { Map, MapMarker } from 'react-kakao-maps-sdk'
import { useRecoilState, useRecoilValue } from 'recoil'
import { markerInfoAtom, positionAtom } from 'states/atom'

const MapContainer = () => {
  const [position, setPosition] = useRecoilState(positionAtom)
  const markerInfo = useRecoilValue(markerInfoAtom)

  const markerList = markerInfo.map((marker, index) => {
    return (
      marker.spotifyInfo !== '' && (
        <MapMarker key={index} position={{ lat: marker.lat, lng: marker.lng }}>
          <div style={{ color: '#000' }}>{marker.spotifyInfo.artist}</div>
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
      {markerList}
    </Map>
  )
}

export default React.memo(MapContainer)
