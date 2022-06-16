import { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { tokenAtom } from 'states/atom'
import { cx } from 'styles'
import Cookies from 'universal-cookie'

import styles from './Login.module.scss'

const cookies = new Cookies()

const REDIRECT_URI = 'http://localhost:3000/'
const RESPONSE_TYPE = 'token'
const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize'
const scopes = ['user-read-currently-playing', 'user-read-playback-state', 'streaming']

const Login = () => {
  const [token, setToken] = useRecoilState(tokenAtom)

  const handleLogout = () => {
    cookies.remove('token')
    setToken('')
  }

  useEffect(() => {
    const localHash = window.location.hash
    const localToken = localHash.substring(1).split('&')[0].split('=')[1]
    if (!token && localHash) {
      window.location.hash = ''
      setToken(localToken)
      cookies.set('token', localToken)
    }

    localToken && setToken(localToken)
  }, [setToken, token])

  return token === '' ? (
    <a
      className={cx(styles.login, styles.button)}
      href={`${AUTH_ENDPOINT}?client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${scopes}`}
    >
      Login to Spotify
    </a>
  ) : (
    <button type='button' className={cx(styles.logout, styles.button)} onClick={handleLogout}>
      Logout
    </button>
  )
}
export default Login
