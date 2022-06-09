import React, { MouseEvent, useEffect, useState } from 'react'
import store from 'store'
import { useRecoilState } from 'recoil'
import { CustomOverlayMap, Map, MapMarker } from 'react-kakao-maps-sdk'

import { markerInfoAtom, positionAtom } from 'states/atom'

import { Trash } from 'assets/svgs'

import styles from './MapContainer.module.scss'

const MapContainer = () => {
  const [position, setPosition] = useRecoilState(positionAtom)
  const [markerInfo, setMarkerInfo] = useRecoilState(markerInfoAtom)
  const [isOpen, setIsOpen] = useState(-1)

  const handleErase = (e: MouseEvent<HTMLElement>) => {
    const clickedIdx = Number(e.currentTarget.dataset.index)
    const erasedList = markerInfo.filter((item, idx) => idx !== clickedIdx)
    setMarkerInfo(erasedList)
  }

  useEffect(() => {
    store.set('marker', markerInfo)
  }, [markerInfo])

  const markerList = markerInfo.map((marker, index) => {
    const info = marker.spotifyInfo

    return (
      info !== '' && (
        <MapMarker
          key={info.uri + String(marker.lat)}
          position={{ lat: marker.lat, lng: marker.lng }}
          image={{
            src: `${info.img}`,
            size: { width: 40, height: 40 },
            options: { shape: 'rect' },
          }}
          onClick={() => {
            isOpen === index ? setIsOpen(-1) : setIsOpen(index)
          }}
        >
          {isOpen === index && (
            <CustomOverlayMap position={{ lat: marker.lat, lng: marker.lng }} zIndex={1000} yAnchor={1.65}>
              <div className={styles.markerContainer}>
                <img className={styles.img} src={info.img} alt='img' />
                <div className={styles.detail}>
                  <div className={styles.artist}>{info.artist}</div>
                  <div className={styles.title}>{info.title}</div>
                </div>
                <button data-index={index} type='button' onClick={handleErase}>
                  <Trash className={styles.trashIcon} />
                </button>
              </div>
            </CustomOverlayMap>
          )}
        </MapMarker>
      )
    )
  })

  return (
    <div className={styles.mapContainer}>
      <Map
        center={{ lat: 37.55125, lng: 126.98822 }}
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
    </div>
  )
}

export default React.memo(MapContainer)
