import { MouseEvent } from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { playUriAtom, trackInfoAtom } from 'states/atom'
import styles from './List.module.scss'

interface Props {
  tracks: RootObject[]
}

const List = ({ tracks }: Props) => {
  const setPlayUri = useSetRecoilState(playUriAtom)
  const [, setTrackInfo] = useRecoilState(trackInfoAtom)

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    const { dataset } = e.currentTarget
    const spotifyInfo: SpotifyInfo = { img: dataset.img, artist: dataset.artist, title: dataset.title }
    if (spotifyInfo) {
      setTrackInfo(spotifyInfo)
    }
    dataset.uri && setPlayUri(dataset.uri)
  }

  const listMap = tracks.map((track) => {
    return (
      <li key={track.id} className={styles.track}>
        <div
          className={styles.trackInfo}
          role='button'
          data-img={track.album.images[2].url}
          data-artist={track.artists[0].name}
          data-title={track.name}
          data-uri={track.uri}
          onClick={handleClick}
          tabIndex={0}
        >
          <img src={`${track.album.images[2].url}`} alt='img' />
          <div className={styles.detail}>
            <p className={styles.title}>{track.artists[0].name}</p>
            <p className={styles.trackName}>{track.name}</p>
          </div>
        </div>
      </li>
    )
  })

  return <ul className={styles.container}>{listMap}</ul>
}

export default List
