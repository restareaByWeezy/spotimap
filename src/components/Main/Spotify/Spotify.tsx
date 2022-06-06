import { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'

import List from './List'
import Search from './Search'

import { searchTextAtom } from 'states/atom'

import { getTracks } from 'services/getSpotifyApi'

import styles from './Spotify.module.scss'

const Spotify = () => {
  const [tracks, setTracks] = useState<[]>([])
  const searchText = useRecoilValue(searchTextAtom)

  useEffect(() => {
    getTracks(searchText).then((res) => setTracks(res))
  }, [searchText])
  return (
    <aside className={styles.container}>
      <Search />
      <List tracks={tracks} />
    </aside>
  )
}

export default Spotify
