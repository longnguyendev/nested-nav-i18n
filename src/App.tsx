
import './App.css'
import { Link, Outlet } from 'react-router'
import { LANGUAGES } from './constants'
import { onChangeLang } from './helpers'
import { useTranslation } from 'react-i18next'

function App() {

  const {t} = useTranslation()

  const defaultLang = localStorage.getItem('lang') ?? 'en'

  return (
    <>
    <p>{t('label')}</p>
      <select defaultValue={defaultLang} onChange={onChangeLang}>
        {LANGUAGES.map(({ code, label }) => (
          <option key={code} value={code}>
            {label}
          </option>
        ))}
      </select><br/>
    <Link to='/about'>{t('about.content')}</Link><br/>
    <Link to='/'>{t('home.title')}</Link>
     <Outlet/>
    </>
  )
}

export default App
