import { useRecoilState, useRecoilValue } from 'recoil'
import { positionAtom, trackInfoAtom, markerInfoAtom } from 'states/atom'
import styles from './AddMarker.module.scss'
import { FormEvent } from 'react'
import store from 'store'

const AddMarker = () => {
  const position = useRecoilValue(positionAtom)
  const trackInfo = useRecoilValue(trackInfoAtom)
  const [, setMarkerInfo] = useRecoilState(markerInfoAtom)

  let getMarkerInfo: { spotifyInfo: SpotifyInfo; lat: number; lng: number }[] = []
  if (store.get('marker')) {
    getMarkerInfo = store.get('marker')
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    getMarkerInfo.push({ spotifyInfo: trackInfo, lat: position.lat, lng: position.lng })
    store.set('marker', getMarkerInfo)
    setMarkerInfo(getMarkerInfo)
  }

  const onClick = () => {
    getMarkerInfo.push({ spotifyInfo: trackInfo, lat: position.lat, lng: position.lng })
    store.set('marker', getMarkerInfo)
    setMarkerInfo(getMarkerInfo)
    console.log(getMarkerInfo)
  }

  return (
    <div className={styles.container}>
      <form action='submit' onSubmit={handleSubmit}>
        <p>lat:{position.lat}</p>
        <p>lan:{position.lng}</p>
        <p>Selected song:{trackInfo.title} </p>
        <button type='button' onClick={onClick}>
          submit
        </button>
      </form>
    </div>
  )
}

export default AddMarker
