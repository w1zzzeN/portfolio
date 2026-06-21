import React, { useContext } from 'react'
import { LocaleContext } from '../App'

export default function Contact() {
  const { locale } = useContext(LocaleContext)

  return (
    <section className="contact container">
      <h2>{locale === 'ru' ? 'Контакты' : 'Contact'}</h2>
      <p>
        <a href="mailto:drusanov804@gmail.com">{locale === 'ru' ? 'Email: drusanov804@gmail.com' : 'Email: drusanov804@gmail.com'}</a>
      </p>
      <p>
        <a href="tel:+998771442469">{locale === 'ru' ? 'Телефон: +998 77 144 24 69' : 'Phone: +998 77 144 24 69'}</a>
      </p>
    </section>
  )
}
