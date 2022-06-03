import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Main from './pages/Main/Main'
import styles from './Routes.module.scss'
import Navbar from 'components/_common/Navbar/Navbar'
import Header from 'components/_common/Header/Header'
import About from './pages/About/About'

const App = () => {
  return (
    <div className={styles.appWrapper}>
      <Navbar />
      <Header />
      <div className={styles.app}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
