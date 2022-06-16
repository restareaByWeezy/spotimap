import { useRecoilState, useRecoilValue } from 'recoil'
import store from 'store'

import { positionAtom, trackInfoAtom, markerInfoAtom } from 'states/atom'

import styles from './AddMarker.module.scss'
import { useEffect, useState } from 'react'
import Button from 'components/_common/Button/Button'

const AddMarker = () => {
  const position = useRecoilValue(positionAtom)
  const trackInfo = useRecoilValue(trackInfoAtom)
  const [markerInfo, setMarkerInfo] = useRecoilState(markerInfoAtom)
  const [hasTrack, setHasTrack] = useState(false)
  const [hasLocation, setHasLocation] = useState(false)

  const handleClick = () => {
    if (position.lat !== 0 && Object.keys(trackInfo).length !== 0) {
      const tempInfo = [...markerInfo, { spotifyInfo: trackInfo, lat: position.lat, lng: position.lng }]
      setMarkerInfo(tempInfo)
      store.set('marker', tempInfo)
    }
  }

  useEffect(() => {
    trackInfo.artist && setHasTrack(true)
    position.lat !== 0 && setHasLocation(true)
  }, [trackInfo, position])

  return (
    <div className={styles.container}>
      <div className={styles.textWrap}>
        <p className={styles.title}>Selected song:</p>
        <p>{trackInfo.title} </p>
      </div>
      <div className={styles.buttonWrap}>
        <div className={styles.validationWrap}>
          {!hasTrack && <p>Select your Song</p>}
          {!hasLocation && <p>Specify your place</p>}
        </div>
        <Button id='id' text='Add Marker' onClick={handleClick} />
      </div>
    </div>
  )
}

export default AddMarker
