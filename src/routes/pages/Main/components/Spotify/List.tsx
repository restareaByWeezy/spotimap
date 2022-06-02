import { MouseEvent } from 'react'
import { useRecoilState } from 'recoil'
import { trackInfoAtom } from 'states/atom'
import styles from './List.module.scss'

interface Props {
  tracks: RootObject[]
}

const List = ({ tracks }: Props) => {
  const [, setTrackInfo] = useRecoilState(trackInfoAtom)

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    const { dataset } = e.currentTarget
    const spotifyInfo: SpotifyInfo = { img: dataset.img, artist: dataset.artist, title: dataset.title }
    if (spotifyInfo) {
      setTrackInfo(spotifyInfo)
    }
  }

  const listMap = tracks.map((track) => {
    return (
      <li key={track.id}>
        <div
          role='button'
          data-img={track.album.images[2].url}
          data-artist={track.artists[0].name}
          data-title={track.name}
          onClick={handleClick}
          tabIndex={0}
        >
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
