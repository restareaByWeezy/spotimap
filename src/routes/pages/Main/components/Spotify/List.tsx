import { MouseEvent, useState } from 'react'
import { useRecoilState } from 'recoil'
import { trackIdAtom } from 'states/atom'
import styles from './List.module.scss'

interface Props {
  tracks: RootObject[]
}

const List = ({ tracks }: Props) => {
  const [trackId, setTrackId] = useRecoilState(trackIdAtom)

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    const spotifyId: string | undefined = e.currentTarget.dataset.trackid
    setTrackId(spotifyId)
  }

  const listMap = tracks.map((track) => {
    return (
      <li key={`${track.id}`}>
        <div role='button' data-trackid={track.id} onClick={handleClick} tabIndex={0}>
          <img src={`${track.album.images[2].url}`} alt='img' />
          <div>
            <p>{track.artists[0].name}</p>
            <p>{track.name}</p>
          </div>
        </div>
      </li>
    )
  })

  return <ul className={styles.container}>{listMap}</ul>
}

export default List
