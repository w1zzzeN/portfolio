import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'
import Contact from './pages/Contact'

export const LocaleContext = React.createContext()

export default function App() {
  const [theme, setTheme] = useState('dark')
  const [locale, setLocale] = useState('ru')

  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      <div className="app-root">
        <NavBar theme={theme} setTheme={setTheme} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </LocaleContext.Provider>
  )
}
