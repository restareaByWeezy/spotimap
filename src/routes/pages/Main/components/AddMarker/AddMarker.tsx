import { useRecoilValue } from 'recoil'
import { positionAtom, trackIdAtom } from 'states/atom'
import styles from './AddMarker.module.scss'

const AddMarker = () => {
  const position = useRecoilValue(positionAtom)
  const trackId = useRecoilValue(trackIdAtom)

  return (
    <div className={styles.container}>
      <form action='submit'>
        <p>lat:{position.lat}</p>
        <p>lan:{position.lng}</p>
        <p>track id:{trackId} </p>
        <button type='button'>submit</button>
      </form>
    </div>
  )
}

export default AddMarker
