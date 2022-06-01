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

export const trackIdAtom = atom<string | undefined>({
  key: '#trackIdAtom',
  default: '',
})
