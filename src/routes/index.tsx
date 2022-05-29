import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Main from './pages/Main/Main'
import styles from './Routes.module.scss'
import Navbar from 'components/_common/Navbar/Navbar'
import Header from 'components/_common/Header/Header'

const App = () => {
  return (
    <div className={styles.appWrapper}>
      <Navbar />
      <Header />
      <div className={styles.app}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Main />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
