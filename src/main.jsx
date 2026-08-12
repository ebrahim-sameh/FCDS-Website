import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import './i18n';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import bootstrapIconsWoff2 from 'bootstrap-icons/font/fonts/bootstrap-icons.woff2?url'
import './index.css'
import App from './App.jsx'

const iconPreload = document.createElement('link')
iconPreload.rel = 'preload'
iconPreload.as = 'font'
iconPreload.type = 'font/woff2'
iconPreload.crossOrigin = 'anonymous'
iconPreload.href = bootstrapIconsWoff2
document.head.appendChild(iconPreload)

// HashRouter avoids GitHub Pages document 404s (and console errors) on deep links.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
)
