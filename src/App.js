import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Header/Nav'
import About from './pages/About'
import SignUpPage from './pages/Signup'
import MyPage from './pages/MyPage'
//import Header from './components/Header/Header'
import Main from './pages/Main'
import LoginPage from './pages/LoginPage'
import Quiz1 from './pages/quiz/quiz1'
import Quiz2 from './pages/quiz/quiz2'
import Quiz3 from './pages/quiz/quiz3'
import Quiz4 from './pages/quiz/quiz4'
import Quiz5 from './pages/quiz/quiz5'
import Footer from './components/Footer/footer'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/*<Header /> */}
        <Nav />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/MyPage" element={<MyPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/LoginPage" element={<LoginPage />} />
          <Route path="Quiz1" element={<Quiz1 />} />
          <Route path="Quiz2" element={<Quiz2 />} />
          <Route path="Quiz3" element={<Quiz3 />} />
          <Route path="/quiz4" element={<Quiz4 />} />
          <Route path="/quiz5" element={<Quiz5 />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
