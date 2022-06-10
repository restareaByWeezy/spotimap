import styles from './Favorite.module.scss'
import SpotifyPlayer from 'react-spotify-web-playback'
import Cookies from 'universal-cookie'
import { useEffect, useState } from 'react'

const Favorite = () => {
  const [token, setToken] = useState('')

  const REDIRECT_URI = 'http://localhost:3000/'
  const RESPONSE_TYPE = 'token'
  const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize'
  const scopes = ['user-read-currently-playing', 'user-read-playback-state', 'streaming']

  const logout = () => {
    setToken('')
    window.localStorage.removeItem('token')
  }

  useEffect(() => {
    const localHash = window.location.hash

    let localToken = window.localStorage.getItem('token')
    if (!localToken && localHash) {
      localToken = localHash.substring(1).split('&')[0].split('=')[1]

      window.location.hash = ''
      window.localStorage.setItem('token', token)
      setToken(localToken)
    }
    if (localToken) {
      setToken(localToken)
    }
  }, [])
  return (
    <div className={styles.container}>
      <aside>123</aside>
      <div className={styles.mainWrapper}>
        <div className={styles.topTrackContainer}>
          <div className={styles.topTrackTitle}>
            <h1>Top Tracks</h1>
            <p>-top 50</p>
            {!token ? (
              <a
                href={`${AUTH_ENDPOINT}?client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=http://localhost:3000/favorite&response_type=${RESPONSE_TYPE}&scope=${scopes}`}
              >
                Login to Spotify
              </a>
            ) : (
              <button type='button' onClick={logout}>
                Logout
              </button>
            )}
          </div>
        </div>
        <ul>
          <li>track</li>
          <SpotifyPlayer token={token} uris={['spotify:artist:6HQYnRM4OzToCYPpVBInuU']} />
        </ul>
      </div>
    </div>
  )
}

export default Favorite
