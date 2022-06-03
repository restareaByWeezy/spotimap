import { atom } from 'recoil'
import store from 'store'

export const trackDataAtom = atom({
  key: '#trackData',
  default: [],
})

export const searchTextAtom = atom({
  key: '#searchText',
  default: '',
})

export const positionAtom = atom({
  key: '#position',
  default: { lat: 0, lng: 0 },
})

export const trackInfoAtom = atom<SpotifyInfo>({
  key: '#trackIdAtom',
  default: {},
})

export const markerInfoAtom = atom<{ spotifyInfo: SpotifyInfo; lat: number; lng: number }[]>({
  key: '#markerInfo',
  default: store.get('marker') ? store.get('marker') : [],
})

export const spotifyAtoms = { trackDataAtom, searchTextAtom, trackInfoAtom }
export const mapAtoms = { positionAtom, markerInfoAtom }
