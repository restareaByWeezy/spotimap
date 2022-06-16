import { NavLink } from 'react-router-dom'

import { Slogo } from 'assets/svgs'

import styles from './Navbar.module.scss'
import SpotifyWebPlayer from 'react-spotify-web-playback/lib'
import { playUriAtom, tokenAtom } from 'states/atom'
import { useRecoilValue } from 'recoil'
import Login from '../Login/Login'

const Navbar = () => {
  const token = useRecoilValue(tokenAtom)
  const playUri = useRecoilValue(playUriAtom)

  return (
    <nav className={styles.container}>
      <NavLink to='/' className={styles.logo}>
        <Slogo className={styles.Slogo} />
        <span>Spotimap</span>
      </NavLink>
      <div className={styles.menu}>
        <NavLink to='/' className={styles.navLink}>
          Home
        </NavLink>
        <NavLink to='favorite' className={styles.navLink}>
          Favorite
        </NavLink>
      </div>
      {token && (
        <div className={styles.playerWrapper}>
          <SpotifyWebPlayer
            initialVolume={0.5}
            token={token}
            uris={playUri}
            styles={{
              activeColor: '#fff',
              bgColor: '#333',
              color: '#fff',
              loaderColor: '#fff',
              sliderColor: '#1cb954',
              trackArtistColor: '#ccc',
              trackNameColor: '#fff',
            }}
          />
        </div>
      )}
      <Login />
    </nav>
  )
}

export default Navbar
