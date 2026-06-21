import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { LocaleContext } from '../App'

export default function NavBar({ theme, setTheme }) {
  const { locale, setLocale } = useContext(LocaleContext)
  const loc = useLocation()

  return (
    <header className="navbar">
      <div className="nav-inner">
        <div className="brand">{locale === 'ru' ? 'Моё портфолио' : 'My portfolio'}</div>
        <nav>
          <Link to="/" className={loc.pathname === '/' ? 'active' : ''}>{locale === 'ru' ? 'Главная' : 'Home'}</Link>
          <Link to="/projects" className={loc.pathname === '/projects' ? 'active' : ''}>{locale === 'ru' ? 'Проекты' : 'Projects'}</Link>
          <Link to="/about" className={loc.pathname === '/about' ? 'active' : ''}>{locale === 'ru' ? 'О себе' : 'About'}</Link>
          <Link to="/contact" className={loc.pathname === '/contact' ? 'active' : ''}>{locale === 'ru' ? 'Контакты' : 'Contact'}</Link>
        </nav>

        <div className="controls">
          <button
            aria-label="toggle-theme"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>

          <button
            className="locale-toggle"
            aria-label="toggle-language"
            onClick={() => setLocale(locale === 'ru' ? 'en' : 'ru')}
          >
            {locale.toUpperCase()}
          </button>
        </div>
      </div>
    </header>
  )
}
