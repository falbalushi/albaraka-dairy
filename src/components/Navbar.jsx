import React from 'react'

const WA_ICON = (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

const AlbarakaLogo = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
    {/* Outer gold ring */}
    <circle cx="24" cy="24" r="23" fill="none" stroke="#C9980A" strokeWidth="2" />
    <circle cx="24" cy="24" r="20" fill="#1a1208" />
    {/* Buffalo silhouette */}
    <g fill="#C9980A">
      {/* Body */}
      <ellipse cx="24" cy="28" rx="10" ry="7" />
      {/* Hump */}
      <ellipse cx="20" cy="22" rx="5" ry="4" />
      {/* Head */}
      <ellipse cx="31" cy="23" rx="5" ry="4" />
      {/* Horn left */}
      <path d="M28 20 Q25 14 28 12 Q30 15 30 20Z" />
      {/* Horn right */}
      <path d="M34 20 Q37 14 34 12 Q32 15 32 20Z" />
      {/* Legs */}
      <rect x="16" y="33" width="2.5" height="6" rx="1" />
      <rect x="20" y="34" width="2.5" height="5" rx="1" />
      <rect x="26" y="34" width="2.5" height="5" rx="1" />
      <rect x="30" y="33" width="2.5" height="6" rx="1" />
      {/* Tail */}
      <path d="M14 26 Q10 24 11 28" stroke="#C9980A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    </g>
    {/* Ground line */}
    <line x1="8" y1="39" x2="40" y2="39" stroke="#C9980A" strokeWidth="0.8" strokeOpacity="0.5" />
  </svg>
)

export default function Navbar({ t, lang, setLang, mode, toggleMode }) {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <nav className="navbar">
      <div className="logo-row">
        <AlbarakaLogo />
        <div>
          <div className={`logo-name ${lang === 'ar' ? 'ar' : ''}`}>{t.logoName}</div>
          <div className={`logo-tag ${lang === 'ar' ? 'ar' : ''}`}>{t.logoTag}</div>
        </div>
      </div>

      <div className="nav-right">
        <div className="nav-links">
          <a onClick={() => scrollTo('products')}>{t.navProducts}</a>
          <a onClick={() => scrollTo('booking')}>{t.navBook}</a>
          <a onClick={() => scrollTo('contact')}>{t.navContact}</a>
        </div>

        {/* Language Toggle */}
        <div className="lang-pill">
          <button className={lang === 'en' ? 'active' : ''} onClick={() => setLang('en')}>EN</button>
          <button className={lang === 'ar' ? 'active' : ''} onClick={() => setLang('ar')}>ع</button>
        </div>

        {/* Dark / Light Toggle */}
        <button className="mode-toggle" onClick={toggleMode} title="Toggle dark/light mode">
          <div className="toggle-track">
            <span>☀️</span>
            <span>🌙</span>
          </div>
          <div className="toggle-thumb">{mode === 'dark' ? '🌙' : '☀️'}</div>
        </button>
      </div>
    </nav>
  )
}
