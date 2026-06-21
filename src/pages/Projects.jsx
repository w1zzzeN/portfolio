import React, { useContext, useState } from 'react'
import { LocaleContext } from '../App'
import { porsche_Img, porsche_gall_Img, porsche_about_Img, perfume_Img, perfume_coll_Img, brutalism_Img, brutalism_about_Img, brutalism_coll_Img, feng_shui_head_Img, feng_shui_shop_Img, feng_shui_about_Img, todo_setka_Img, avtosalon_Img, todo_spisok_Img, todo_edit_Img, clock_Img, clock_sec_Img, clock_set_sec_Img, reg_user_Img, reg_user_name_Img, avtosalon_info_Img, avtosalon_map_Img } from '../assets/image'
const projects = [
  {
    id: 1,
    title: 'Porsche',
    description: 'ru: Промо-страница спортивного автомобиля. Сделал стильный темный дизайн, интерактивную галерею изображений и рабочую форму обратной связи в подвале. Сайт полностью адаптирован под мобильные устройства. | en: Sports car promo page. Dark design, interactive image gallery, and working feedback form. Fully responsive.',
    url: 'https://w1zzzen.github.io/porsche-1500/',
    url_p: 'https://github.com/w1zzzeN/porsche-1500',
    images: [porsche_Img, porsche_gall_Img, porsche_about_Img]
  },
  {
    id: 2,
    title: 'Perfume Line',
    description: 'ru: Минималистичный многостраничный концепт интернет-магазина парфюмерии. Разработал элегантный дизайн в светлых тонах, структурированный каталог мужской и женской коллекций, а также адаптивную шапку с поиском и корзиной. | en: A minimalist multi-page concept for a fragrance e-commerce store. Features an elegant light-themed UI, a structured catalog for men\'s and women\'s collections, and a fully responsive navigation header with search and cart layout elements.',
    url: 'https://w1zzzen.github.io/perfume-line/',
    url_p: 'https://github.com/w1zzzeN/perfume-line',
    images: [perfume_Img, perfume_coll_Img]
  },
  {
    id: 3,
    title: 'Brutalism',
    description: 'ru: Минималистичный концепт сайта для студии интерьерного дизайна в стиле брутализм. Разработал строгий макет в глубоких темных тонах, структурированную галерею с философией стиля и блоками готовых проектов, а также интерактивные элементы навигации и удобную форму обратной связи. | en: A minimalist website concept for an interior design studio in the brutalist style. Developed a sleek layout in deep dark tones, a structured gallery showcasing the style\'s philosophy and completed projects, as well as interactive navigation elements and a user-friendly feedback form.', 
    url: 'https://w1zzzen.github.io/brutalism/',
    url_p: 'https://github.com/w1zzzeN/brutalism',
    images: [brutalism_Img, brutalism_about_Img, brutalism_coll_Img]
  },
  {
    id: 4,
    title: 'Feng Shui',
    description: 'ru: Атмосферный концепт интернет-магазина глиняной посуды ручной работы. Сверстал эстетичный сайт в мягких природных тонах с акцентом на уют. Сделал интересную асимметричную сетку для карточек товаров в каталоге, добавил аккуратные блоки с историей бренда и настроил чистую, не перегруженную деталями шапку профиля. | en: An atmospheric e-commerce concept for a handmade clay pottery brand. Created an aesthetic layout using soft, earth-toned colors focused on warmth and comfort. Features an engaging asymmetric grid for the product catalog, clean storytelling sections, and a streamlined navigation header.',
    url: 'https://w1zzzen.github.io/Feng-Shui/',
    url_p: 'https://github.com/w1zzzeN/Feng-Shui',
    images: [feng_shui_head_Img, feng_shui_shop_Img, feng_shui_about_Img]
  },
  {
    id: 5,
    title: 'Todo',
    description: 'ru: Веб-приложение для управления заметками, написанное на React. Реализовал полный цикл CRUD: создание, редактирование и удаление записей через всплывающие модальные окна. Добавил переключение отображения (сетка/список), динамический поиск и сохранение всех данных, чтобы ничего не пропадало при перезагрузке страницы. | en: A fully functional React-based note-taking web application. Features complete CRUD operations (create, read, update, delete) handled via interactive modal windows. Includes a grid/list layout toggle, dynamic search functionality, and persistent data storage across browser sessions.',
    url: 'https://todo-hazel-pi-32.vercel.app/',
    url_p: 'https://github.com/w1zzzeN/todo',
    images: [todo_setka_Img, todo_spisok_Img, todo_edit_Img]
  },
  {
    id: 6,
    title: 'Clock',
    description: 'ru: Веб-приложение с часами и секундомером. Реализовал два интерактивных режима с переключением через табы: аналоговый циферблат с динамически движущимися стрелками и цифровым дублированием времени, а также точный секундомер с функциями запуска, паузы и полного сброса отсчета. | en: A web application combining a clock and a stopwatch interface. Features tab-based navigation between two functional modes: an analog clock with dynamically moving hands and a digital time display, alongside a precise stopwatch with start, stop, and reset controls.',
    url: 'https://w1zzzen.github.io/Clock/',
    url_p: 'https://github.com/w1zzzeN/Clock',
    images: [clock_Img, clock_sec_Img, clock_set_sec_Img]
  },
  {
    id: 7,
    title: 'Registration Form',
    description: 'ru: Интерактивное веб-приложение на React для записи пользователей в спортивные секции. Реализовал динамическую форму добавления участников с выпадающим списком (Select) для выбора дисциплины (футбол, баскетбол, волейбол). Настроил автоматическую сортировку и обновление списков внутри карточек при добавлении нового имени, а также вывод дефолтного состояния, если секция пуста. | en: An interactive React-based web application for sports club registrations. Features a dynamic input form with a dropdown selector for choosing sports categories (Football, Basketball, Volleyball). Implemented automatic list updates and sorting within category cards upon adding a new user name, alongside a default state display for empty sections.',
    url: 'https://project-d396o.vercel.app/',
    url_p: 'https://github.com/w1zzzeN/Registration',
    images: [reg_user_Img, reg_user_name_Img]
  },
  {
    id: 8,
    title: 'Avtosalon',
    description: 'ru: Один из моих первых проектов — многостраничный сайт для студии архитектуры. Учился работать со структурой и сетками, правильно расставлять крупные фотографии и текст. Сверстал главную страницу, блок с описанием конкретного проекта и страницу «О нас» с карточками команды. | en: One of my first projects — a multi-page website layout for an architecture studio. Focused on learning site structure, grid layouts, and balancing large images with text. Built the homepage, a detailed project description block, and an "About Us" section with team cards.',
    url: 'https://w1zzzen.github.io/avtosalon/index.html',
    url_p: 'https://github.com/w1zzzeN/avtosalon',
    images: [avtosalon_Img, avtosalon_info_Img, avtosalon_map_Img]
  }
]

export default function Projects() {
  const { locale } = useContext(LocaleContext)
  const [activeSlides, setActiveSlides] = useState(() =>
    projects.reduce((acc, project) => {
      acc[project.id] = 0
      return acc
    }, {})
  )

  const handleSlide = (id, direction) => {
    setActiveSlides(prev => {
      const project = projects.find(item => item.id === id)
      const count = project.images.length
      const current = prev[id]
      const next = direction === 'next' ? (current + 1) % count : (current - 1 + count) % count
      return { ...prev, [id]: next }
    })
  }

  return (
    <section className="projects container">
      <h2>{locale === 'ru' ? 'Проекты' : 'Projects'}</h2>
      <div className="grid">
        {projects.map(p => {
          const activeIndex = activeSlides[p.id]
          const currentImage = p.images[activeIndex]

          return (
            <article key={p.id} className="card">
              <div className="thumb">
                <img
                  src={currentImage}
                  alt={p.title}
                  onError={e => {
                    e.target.src = 'https://via.placeholder.com/800x400?text=Project'
                  }}
                />
                {p.images.length > 1 && (
                  <>
                    <button className="slide-button left" onClick={() => handleSlide(p.id, 'prev')} aria-label="previous image">
                      ‹
                    </button>
                    <button className="slide-button right" onClick={() => handleSlide(p.id, 'next')} aria-label="next image">
                      ›
                    </button>
                    <div className="slide-indicators">
                      {p.images.map((_, index) => (
                        <span key={index} className={index === activeIndex ? 'active' : ''} />
                      ))}
                    </div>
                  </>
                )}
              </div>
              <h3>{p.title}</h3>
              <p className="descr">
                {locale === 'ru' 
                  ? p.description.split(' | ')[0].replace('ru: ', '')
                  : p.description.split(' | ')[1].replace('en: ', '')
                }
              </p>
              
              <div className="links">

                <a href={p.url} target="_blank" rel="noreferrer">
                  {locale === 'ru' ? 'Открыть сайт' : 'Visit site'}
                </a>
              </div>
              <div className="links">
                <a href={p.url_p} target="_blank" rel="noreferrer">
                  {locale === 'ru' ? 'Открыть репозиторий' : 'Visit repository'}
                </a>
                
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
1