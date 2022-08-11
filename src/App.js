import logo from './logo.svg';
import './App.css';
import { useTranslation, Trans } from 'react-i18next'
import { useState, Suspense, useEffect } from 'react'


function App() {
  const { t, i18n } = useTranslation()
  //  counter for language switch
  const [count, setCount] = useState(0)
  // connect to backend locize
  const [lngs, setLngs] = useState({ en: { nativeName: 'English' }});

  useEffect(() => {
    i18n.services.backendConnector.backend.getLanguages((err, ret) => {
      if (err) return // TODO: handle err...
      setLngs(ret);
  })
}, [])


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          {Object.keys(lngs).map((lng) => (
            <button key={lng} style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }} type="submit" onClick={() =>  {
              i18n.changeLanguage(lng)
              setCount(count + 1)
            }}>
              {lngs[lng].nativeName}
            </button>
          ))}
        </div>
            
            
        <div>{t('new.key', 'this will be added automatically')}</div>
        <div>{t('second.key', 'this is an example.')}</div>

        
  



        <p>
          <i>{t('counter', { count })}</i>
        </p>

        <p>
          {t('edit', 'Edit <code>src/App.js</code> and save to reload.')}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('learn', 'Learn React')}
        </a>
      </header>
    </div>
  );
}

export default function WrappedApp() {
  return (
    <Suspense fallback="...is loading">
      <App />
    </Suspense>
  );
}