import axios from 'axios'
import qs from 'qs'
import Cookies from 'universal-cookie'

const baseUrl = 'https://api.spotify.com/v1'

const cookies = new Cookies()

const getAuthorizationToken = async () => {
  return axios
    .post(
      'https://accounts.spotify.com/api/token',
      qs.stringify({
        grant_type: 'client_credentials',
        client_id: process.env.REACT_APP_CLIENT_ID,
        client_secret: process.env.REACT_APP_CLLIENT_SECRET,
      }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    )
    .then((response) => {
      cookies.set('auth', response.data.access_token, {
        maxAge: response.data.expires_in,
      })
    })
}

const getAuth = async () => {
  let auth = cookies.get('auth')

  if (!auth) {
    await getAuthorizationToken()
    auth = cookies.get('auth')
  }

  return auth
}

export const getTracks = async (text: string) => {
  const auth = await getAuth()

  const res = await axios.get(`${baseUrl}/search`, {
    headers: {
      Authorization: `Bearer ${auth}`,
    },
    params: {
      q: `${text === '' ? 'avicii' : text}`,
      type: 'track',
      market: 'es',
      limit: 20,
      offset: 5,
    },
  })
  const tracks: [] = await res.data.tracks.items
  return tracks
}
