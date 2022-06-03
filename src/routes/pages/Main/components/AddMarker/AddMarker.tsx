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
      <p>Selected song: {trackInfo.title} </p>
      <button type='button' onClick={handleClick}>
        Add Marker
      </button>
    </div>
  )
}

export default AddMarker
