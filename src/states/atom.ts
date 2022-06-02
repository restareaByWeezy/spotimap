import { atom } from 'recoil'

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
  default: [{ spotifyInfo: { img: '', artist: '', title: '' }, lat: 33, lng: 33 }],
})
