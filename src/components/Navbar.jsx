import React from 'react'

const WA_ICON = (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

/* ── SVG Circular Badge Logo ── */
const AlbarakaLogo = () => (
  <svg
    width="52"
    height="52"
    viewBox="0 0 120 120"
    xmlns="http://www.w3.org/2000/svg"
    style={{ flexShrink: 0, filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.18))' }}
  >
    {/* ── Outer gold ring ── */}
    <circle cx="60" cy="60" r="58" fill="#C9980A" />
    <circle cx="60" cy="60" r="52" fill="#B8860B" fillOpacity="0.35" />
    <circle cx="60" cy="60" r="49" fill="none" stroke="#FFD700" strokeWidth="0.8" strokeOpacity="0.6" />

    {/* ── Curved text path: top arc "ALBARAKA DAIRY FARM" ── */}
    <defs>
      <path id="topArc" d="M 12,60 A 48,48 0 0,1 108,60" />
      <path id="botArc" d="M 16,68 A 46,46 0 0,0 104,68" />
      <clipPath id="innerClip">
        <circle cx="60" cy="60" r="44" />
      </clipPath>
    </defs>

    <text fontSize="9.5" fontWeight="700" fill="#FFFFFF" fontFamily="Georgia, serif" letterSpacing="2.4">
      <textPath href="#topArc" startOffset="50%" textAnchor="middle">ALBARAKA DAIRY FARM</textPath>
    </text>
    <text fontSize="8" fontWeight="600" fill="#FFFFFF" fontFamily="Georgia, serif" letterSpacing="1.8">
      <textPath href="#botArc" startOffset="50%" textAnchor="middle">BUFFALO DAIRY PRODUCTS</textPath>
    </text>

    {/* ── Stars on left and right ── */}
    {/* Left star */}
    <g transform="translate(10,62)">
      <polygon points="0,-4 1,-1 4,-1 2,1 3,4 0,2 -3,4 -2,1 -4,-1 -1,-1" fill="#FFD700" />
    </g>
    {/* Right star */}
    <g transform="translate(110,62)">
      <polygon points="0,-4 1,-1 4,-1 2,1 3,4 0,2 -3,4 -2,1 -4,-1 -1,-1" fill="#FFD700" />
    </g>

    {/* ── Inner cream circle ── */}
    <circle cx="60" cy="60" r="44" fill="#FFFFF0" />
    <circle cx="60" cy="60" r="43" fill="none" stroke="#C9980A" strokeWidth="1.2" strokeOpacity="0.5" />

    {/* ── Green hills (bottom of inner circle) ── */}
    <clipPath id="hillClip">
      <circle cx="60" cy="60" r="44" />
    </clipPath>
    <g clipPath="url(#hillClip)">
      {/* Back hill */}
      <ellipse cx="60" cy="95" rx="50" ry="22" fill="#6AAF5A" />
      {/* Front hill left */}
      <ellipse cx="30" cy="100" rx="38" ry="20" fill="#4A7C3F" />
      {/* Front hill right */}
      <ellipse cx="90" cy="100" rx="38" ry="20" fill="#4A7C3F" />
      {/* Ground strip */}
      <rect x="16" y="100" width="88" height="10" fill="#3D6B35" />
    </g>

    {/* ── Buffalo head illustration ── */}
    <g transform="translate(60,52)" clipPath="url(#innerClip)">
      {/* Horns */}
      <path d="M-18,-14 Q-28,-26 -20,-30 Q-14,-28 -12,-18 Z" fill="#6B5040" />
      <path d="M18,-14 Q28,-26 20,-30 Q14,-28 12,-18 Z" fill="#6B5040" />
      {/* Horn tips */}
      <ellipse cx="-20" cy="-29" rx="3" ry="2.5" fill="#8B7355" transform="rotate(-15,-20,-29)" />
      <ellipse cx="20" cy="-29" rx="3" ry="2.5" fill="#8B7355" transform="rotate(15,20,-29)" />
      {/* Main head */}
      <ellipse cx="0" cy="-6" rx="20" ry="17" fill="#8B7355" />
      {/* Forehead tuft / dark patch */}
      <ellipse cx="0" cy="-18" rx="10" ry="7" fill="#6B5040" />
      {/* Muzzle */}
      <ellipse cx="0" cy="7" rx="13" ry="9" fill="#A08060" />
      {/* Nostrils */}
      <ellipse cx="-5" cy="8" rx="3" ry="2" fill="#6B4030" />
      <ellipse cx="5" cy="8" rx="3" ry="2" fill="#6B4030" />
      {/* Eyes */}
      <ellipse cx="-9" cy="-9" rx="4" ry="3.5" fill="#2C1810" />
      <ellipse cx="9" cy="-9" rx="4" ry="3.5" fill="#2C1810" />
      {/* Eye shine */}
      <ellipse cx="-8" cy="-10" rx="1.2" ry="1" fill="#FFFFFF" opacity="0.7" />
      <ellipse cx="10" cy="-10" rx="1.2" ry="1" fill="#FFFFFF" opacity="0.7" />
      {/* Ear left */}
      <ellipse cx="-19" cy="-6" rx="5" ry="7" fill="#8B7355" transform="rotate(-20,-19,-6)" />
      <ellipse cx="-19" cy="-6" rx="3" ry="5" fill="#C4956A" transform="rotate(-20,-19,-6)" />
      {/* Ear right */}
      <ellipse cx="19" cy="-6" rx="5" ry="7" fill="#8B7355" transform="rotate(20,19,-6)" />
      <ellipse cx="19" cy="-6" rx="3" ry="5" fill="#C4956A" transform="rotate(20,19,-6)" />
    </g>

    {/* ── ALBARAKA text ── */}
    <text
      x="60" y="76"
      textAnchor="middle"
      fontFamily="'Playfair Display', Georgia, serif"
      fontWeight="700"
      fontSize="10.5"
      fill="#2D5A1B"
      letterSpacing="0.8"
    >ALBARAKA</text>

    {/* ── DAIRY FARM text ── */}
    <text
      x="60" y="85"
      textAnchor="middle"
      fontFamily="Georgia, serif"
      fontWeight="600"
      fontSize="7"
      fill="#2D5A1B"
      letterSpacing="1.2"
    >DAIRY FARM</text>

    {/* ── EST. 2024 ── */}
    <text
      x="45" y="93"
      textAnchor="middle"
      fontFamily="Georgia, serif"
      fontSize="5.2"
      fill="#6B5A3E"
      letterSpacing="0.4"
    >EST. 2024</text>

    {/* ── Divider dots ── */}
    <circle cx="58" cy="92" r="1" fill="#C9980A" />
    <circle cx="62" cy="92" r="1" fill="#C9980A" />

    {/* ── PURE & NATURAL ── */}
    <text
      x="78" y="93"
      textAnchor="middle"
      fontFamily="Georgia, serif"
      fontSize="5.2"
      fill="#6B5A3E"
      letterSpacing="0.4"
    >PURE &amp; NATURAL</text>
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
