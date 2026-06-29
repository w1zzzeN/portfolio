import React, { useContext } from 'react'
import { LocaleContext } from '../App'
import avatarImg from '../../public/avatar.jpg'

export default function About() {
  const { locale } = useContext(LocaleContext)

  return (
    <section className="about container">
      <h2 >{locale === 'ru' ? 'О себе' : 'About me'}</h2>
      <div className="about-grid">
        <img className="avatar" src={avatarImg} alt="avatar" />
        <div className="about-info">
          <p>{locale === 'ru' ? 'Мне 18 лет, я живу в Ташкенте и недавно поступил в университет на IT-специальность, чтобы глубже изучить сферу разработки. Фронтендом занимаюсь всерьез: прошёл мощную базу от классического веб-интерфейса до комплексных приложений. В работе использую современный сборщик Vite и связку React + TypeScript. Умею грамотно управлять глобальным состоянием через Redux Toolkit и Context API, настраивать сложную навигацию с React Router, а также собирать бэкенд-заглушки или простые серверные скрипты на Node.js. Весь код бережно веду в Git и выкладываю на GitHub. Стремлюсь расти до уровня Strong Junior / Middle и готов к реальным коммерческим задачам.' : 'I\'m 18 years old, based in Tashkent, and recently started my university journey in IT to deepen my engineering background. I\'m deeply passionate about frontend development and have built a solid foundation from basic layouts to complex web applications.My daily workflow is based on Vite with React + TypeScript. I can confidently handle global state management using Redux Toolkit and Context API, implement dynamic routing via React Router, and write lightweight backend scripts using Node.js. Naturally, I track all my code with Git and GitHub. My goal is to grow into a Strong Junior / Middle developer, and I\'m ready for real-world projects.'}</p>
          <ul className="skills">
            <li>HTML / CSS</li>
            <li>React</li>
            <li>Redux Toolkit</li>
            <li>React Router</li>            
            <li>JavaScript</li>
            <li>Node.js</li>
            <li>TypeScript</li>
            <li>Vite</li>       
            <li>Git</li>      
            <li>GitHub</li>      
            <li>Figma</li>      
            <li>Scss</li>      
            <li>Axios</li>      

          </ul>
        </div>
      </div>
    </section>
  )
}
