import { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'
import { getTracks } from 'services/getSpotifyApi'
import { searchTextAtom } from 'states/atom'
import List from './List'
import Search from './Search'
import styles from './Spotify.module.scss'

const Spotify = () => {
  const [tracks, setTracks] = useState<[]>([])
  const searchText = useRecoilValue(searchTextAtom)

  useEffect(() => {
    getTracks(searchText).then((res) => setTracks(res))
  }, [searchText])
  return (
    <div className={styles.container}>
      <Search />
      <List tracks={tracks} />
    </div>
  )
}

export default Spotify
