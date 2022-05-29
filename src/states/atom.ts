import { atom } from 'recoil'

export const trackDataAtom = atom({
  key: '#trackData',
  default: [],
})

export const searchTextAtom = atom({
  key: '#searchText',
  default: '',
})
