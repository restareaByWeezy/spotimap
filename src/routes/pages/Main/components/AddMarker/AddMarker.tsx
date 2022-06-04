import { useRecoilState, useRecoilValue } from 'recoil'
import { positionAtom, trackInfoAtom, markerInfoAtom } from 'states/atom'
import styles from './AddMarker.module.scss'
import store from 'store'

const AddMarker = () => {
  const position = useRecoilValue(positionAtom)
  const trackInfo = useRecoilValue(trackInfoAtom)
  const [markerInfo, setMarkerInfo] = useRecoilState(markerInfoAtom)

  const handleClick = () => {
    if (position.lat !== 0 && Object.keys(trackInfo).length !== 0) {
      const tempInfo = [...markerInfo, { spotifyInfo: trackInfo, lat: position.lat, lng: position.lng }]
      setMarkerInfo(tempInfo)
      store.set('marker', tempInfo)
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.textWrap}>
        <p className={styles.title}>Selected song:</p>
        <p>{trackInfo.title} </p>
      </div>
      <div className={styles.buttonWrap}>
        <button type='button' onClick={handleClick}>
          Add Marker
        </button>
      </div>
    </div>
  )
}

export default AddMarker
