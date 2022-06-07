import { Routes, Route } from 'react-router-dom'

import Main from './pages/Main/Main'
import Navbar from 'components/_common/Navbar/Navbar'

import styles from './Routes.module.scss'
import Favorite from './pages/Favorite/Favorite'

const App = () => {
  return (
    <div className={styles.appWrapper}>
      <Navbar />
      <div className={styles.app}>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='favorite' element={<Favorite />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
