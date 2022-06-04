import styles from './Player.module.scss'
import SpotifyPlayer from 'react-spotify-web-playback'
import { useRecoilValue } from 'recoil'
import { playUriAtom } from 'states/atom'
import { useState } from 'react'

const Player = () => {
  const playUri = useRecoilValue(playUriAtom)
  const [token, setToken] = useState('')

  return <div className={styles.container}>{token && <SpotifyPlayer token={token} uris={[playUri]} />}</div>
}

export default Player
