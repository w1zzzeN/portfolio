import React, { useContext } from 'react'
import { LocaleContext } from '../App'

export default function Home() {
  const { locale } = useContext(LocaleContext)

  return (
    <section className="home hero">
      <div className="hero-inner container">
        <h1>{locale === 'ru' ? 'Привет! Я Frontend разработчик' : 'Hi! I\'m a Frontend Developer'}</h1>
        <p>{locale === 'ru' ? 'Привет! Меня зовут Дмитрий, мне 18 лет. Я Frontend-разработчик и студент IT-направления. Специализируюсь на создании быстрых, адаптивных и современных веб-приложений. Мой стек — это React, TypeScript и актуальные инструменты фронтенда. Постоянно развиваюсь, пишу чистый код и создаю удобные интерфейсы для пользователей.' : 'Hi! My name is Dmitry, I\'m 18 years old. I\'m a Frontend Developer and an IT university student. I specialize in building fast, responsive, and modern web applications. My tech stack includes React, TypeScript, and modern frontend tools. I\'m constantly learning, writing clean code, and creating seamless user experiences.'}</p>
      </div>
    </section>
  )
}
