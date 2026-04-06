import React from 'react'

const WA_ICON = (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)


const AlbarakaLogo = () => (
  <svg width="56" height="56" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
    {/* Outer decorative ring */}
    <circle cx="50" cy="50" r="48.5" fill="none" stroke="#C9980A" strokeWidth="0.8" strokeOpacity="0.35" />
    {/* Main gold border ring */}
    <circle cx="50" cy="50" r="46.5" fill="none" stroke="#C9980A" strokeWidth="2.2" />
    {/* Dark inner background */}
    <circle cx="50" cy="50" r="45.2" fill="#110E07" />

    <g fill="#C9980A">
      {/* MAIN BODY */}
      <path d="M 20 65 C 19 60 19 54 20 50 C 22 44 27 41 33 39 C 37 37 42 36 47 36 C 53 36 59 37 64 40 C 69 43 72 48 72 54 C 72 59 70 64 67 67 C 63 70 57 71 50 71 C 43 71 36 70 29 69 C 24 68 21 67 20 65 Z" />
      {/* SHOULDER HUMP */}
      <path d="M 22 53 C 21 48 22 43 25 39 C 28 35 33 33 38 32 C 43 31 47 32 49 35 C 47 35 43 36 38 38 C 32 40 26 46 22 53 Z" />
      {/* NECK */}
      <path d="M 65 42 C 67 40 70 38 74 36 C 77 34 80 32 82 31 C 84 30 85 31 85 32 C 83 33 80 35 77 38 C 74 41 71 44 69 47 C 67 45 65 43 65 42 Z" />
      {/* HEAD */}
      <path d="M 73 36 C 76 33 80 31 84 31 C 87 31 90 33 91 37 C 92 40 91 43 89 45 C 87 47 84 48 81 48 C 78 48 75 47 73 45 C 71 43 71 40 72 38 C 72 37 73 37 73 36 Z" />
      {/* MUZZLE */}
      <path d="M 83 47 C 86 47 89 49 90 52 C 91 55 89 58 87 59 C 84 60 81 59 79 57 C 77 55 77 52 79 50 C 80 48 82 47 83 47 Z" />
      {/* NOSTRIL */}
      <path d="M 87 51 C 88 53 88 56 87 57 C 86 56 85 54 85 52 C 85 51 86 50 87 51 Z" fill="#110E07" />
      {/* CHIN */}
      <path d="M 80 57 C 81 59 82 62 81 65 C 80 67 78 68 76 67 C 74 66 74 63 75 61 C 76 59 78 57 80 57 Z" />
      {/* EYE */}
      <circle cx="86" cy="39" r="1.8" fill="#110E07" />
      <circle cx="86.5" cy="38.5" r="0.6" fill="#C9980A" />
      {/* EAR */}
      <path d="M 80 34 C 79 31 80 28 82 28 C 83 28 84 30 83 33 C 82 35 81 35 80 34 Z" />
      {/* FAR HORN */}
      <path d="M 73 34 C 71 30 67 25 62 21 C 59 18 56 16 55 16 C 55 17 56 19 58 22 C 61 26 65 31 68 36 C 70 36 72 35 73 34 Z" />
      {/* NEAR HORN */}
      <path d="M 77 32 C 79 28 81 23 81 18 C 81 15 79 13 77 13 C 75 14 74 17 74 21 C 73 25 73 30 74 34 C 75 34 76 33 77 32 Z" />
      {/* Horn tip */}
      <path d="M 77 13 C 76 12 74 13 73 15 C 74 16 75 15 76 14 C 77 14 77 13 77 13 Z" />
      {/* DEWLAP */}
      <path d="M 69 45 C 71 47 72 51 71 56 C 70 59 68 61 66 60 C 64 59 64 56 65 53 C 66 50 68 47 69 45 Z" />
      {/* FRONT LEG FAR */}
      <path d="M 60 70 C 59 70 58 71 58 72 L 57 82 C 57 84 58 85 59 85 C 61 85 62 84 62 82 L 63 72 C 63 71 62 70 60 70 Z" />
      {/* FRONT LEG NEAR */}
      <path d="M 66 71 C 65 71 64 72 64 73 L 63 84 C 63 85 64 86 66 86 C 67 86 68 85 68 84 L 69 73 C 69 72 68 71 66 71 Z" />
      {/* Front hoof */}
      <path d="M 62 84 C 62 85 63 87 65 87 C 67 87 68 85 68 84 C 67 84 66 85 65 85 C 64 85 63 84 62 84 Z" />
      {/* HIND LEG FAR */}
      <path d="M 29 70 C 28 70 27 71 27 72 L 26 82 C 26 83 27 84 28 84 C 30 84 31 83 31 82 L 32 72 C 32 71 30 70 29 70 Z" />
      {/* HIND LEG NEAR */}
      <path d="M 37 71 C 36 71 35 72 35 73 L 34 78 C 33 80 32 81 32 83 L 32 86 C 32 87 33 87 34 87 C 36 87 37 86 37 86 L 37 82 C 38 80 40 79 40 77 L 40 73 C 40 72 39 71 37 71 Z" />
      {/* Hind hoof */}
      <path d="M 31 85 C 31 86 32 88 34 88 C 36 88 37 86 37 86 C 36 86 35 87 34 87 C 33 87 32 86 31 85 Z" />
      {/* TAIL */}
      <path d="M 21 58 C 18 57 15 58 13 61 C 11 64 12 68 13 70 C 14 69 14 66 15 63 C 16 61 18 59 21 59 Z" />
      {/* Tail tuft */}
      <path d="M 13 69 C 12 71 11 73 12 75 C 13 76 15 76 16 75 C 15 73 14 71 13 69 Z" />
    </g>

    {/* GROUND LINE */}
    <line x1="8" y1="90" x2="92" y2="90" stroke="#C9980A" strokeWidth="0.9" strokeOpacity="0.5" />

    {/* GRASS TUFTS */}
    <g stroke="#C9980A" strokeWidth="1.3" strokeLinecap="round" fill="none">
      <line x1="83" y1="90" x2="81" y2="83" strokeOpacity="0.9" />
      <line x1="85" y1="90" x2="85" y2="82" strokeOpacity="0.9" />
      <line x1="87" y1="90" x2="89" y2="83" strokeOpacity="0.9" />
      <line x1="81" y1="90" x2="80" y2="85" strokeOpacity="0.75" />
      <line x1="89" y1="90" x2="91" y2="85" strokeOpacity="0.6" />
      <line x1="56" y1="90" x2="55" y2="85" strokeOpacity="0.7" />
      <line x1="58" y1="90" x2="59" y2="84" strokeOpacity="0.7" />
      <line x1="44" y1="90" x2="43" y2="85" strokeOpacity="0.65" />
      <line x1="46" y1="90" x2="47" y2="84" strokeOpacity="0.65" />
      <line x1="14" y1="90" x2="13" y2="85" strokeOpacity="0.6" />
      <line x1="16" y1="90" x2="17" y2="84" strokeOpacity="0.6" />
    </g>

    {/* Inner rim glow */}
    <circle cx="50" cy="50" r="45.2" fill="none" stroke="#C9980A" strokeWidth="0.4" strokeOpacity="0.12" />
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
