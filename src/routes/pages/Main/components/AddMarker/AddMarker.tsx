import { useRecoilState, useRecoilValue } from 'recoil'
import { positionAtom, trackInfoAtom, markerInfoAtom } from 'states/atom'
import styles from './AddMarker.module.scss'
import store from 'store'

const AddMarker = () => {
  const position = useRecoilValue(positionAtom)
  const trackInfo = useRecoilValue(trackInfoAtom)
  const [markerInfo, setMarkerInfo] = useRecoilState(markerInfoAtom)

  const handleClick = () => {
    const tempInfo = [...markerInfo, { spotifyInfo: trackInfo, lat: position.lat, lng: position.lng }]
    setMarkerInfo(tempInfo)
    store.set('marker', tempInfo)
  }

  return (
    <div className={styles.container}>
      <p>Selected song:{trackInfo.title} </p>
      <button type='button' onClick={handleClick}>
        submit
      </button>
    </div>
  )
}

export default AddMarker
