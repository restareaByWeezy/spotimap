import { ChangeEvent, FormEvent, useState } from 'react'
import { useRecoilState } from 'recoil'
import { searchTextAtom } from 'states/atom'
import styles from './Search.module.scss'

const Search = () => {
  const [text, setText] = useState('')
  const [, setSearchText] = useRecoilState(searchTextAtom)

  const handleText = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.currentTarget.value)
  }
  const onClick = () => {
    setSearchText(text)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSearchText(text)
  }

  return (
    <div className={styles.container}>
      <form action='submit' onSubmit={handleSubmit}>
        <input type='text' onChange={handleText} value={text} placeholder='Search Tracks' />
        <button type='button' onClick={onClick}>
          search
        </button>
      </form>
    </div>
  )
}

export default Search
