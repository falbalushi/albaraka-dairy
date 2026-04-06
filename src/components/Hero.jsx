import React from 'react'

export default function Hero({ t, lang, mode }) {
  const scrollToProducts = () =>
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })
  const scrollToContact = () =>
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section style={{ position: 'relative', minHeight: '100svh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>

      {/* Farm background image */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'url(/farm.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        transition: 'filter 0.8s ease',
        filter: mode === 'dark' ? 'brightness(0.35) saturate(0.6)' : 'brightness(1) saturate(1.05)',
      }} />

      {/* Night overlay — deep blue tint in dark mode */}
      <div style={{
        position: 'absolute', inset: 0,
        background: mode === 'dark'
          ? 'linear-gradient(180deg, rgba(5,5,30,0.6) 0%, rgba(10,5,40,0.4) 100%)'
          : 'linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.15) 100%)',
        transition: 'background 0.8s ease',
        zIndex: 1,
      }} />

      {/* Moon — dark mode only */}
      <div style={{
        position: 'absolute', top: '9%', right: '10%',
        width: '72px', height: '72px', borderRadius: '50%',
        background: 'radial-gradient(circle at 35% 35%, #FEFCE8 0%, #E8E0B0 55%, #C8BC80 100%)',
        boxShadow: '0 0 40px 18px rgba(220,210,150,0.4), 0 0 80px 40px rgba(180,160,80,0.2)',
        opacity: mode === 'dark' ? 1 : 0,
        transition: 'opacity 0.8s ease',
        zIndex: 2,
      }} />

      {/* Stars — dark mode only */}
      {mode === 'dark' && (
        <div style={{ position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none' }}>
          {Array.from({ length: 80 }).map((_, i) => (
            <div key={i} style={{
              position: 'absolute',
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              borderRadius: '50%',
              background: '#fff',
              top: `${Math.random() * 60}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.8 + 0.2,
              animation: `twinkle ${2 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 4}s`,
            }} />
          ))}
        </div>
      )}

      {/* Text content */}
      <div style={{
        position: 'relative', zIndex: 10,
        maxWidth: '700px', textAlign: 'center',
        padding: '2.5rem 2rem',
        background: mode === 'dark'
          ? 'rgba(5,5,20,0.55)'
          : 'rgba(255,255,255,0.45)',
        backdropFilter: 'none',
        WebkitBackdropFilter: 'none',
        borderRadius: '24px',
        border: mode === 'dark'
          ? '1px solid rgba(232,168,48,0.2)'
          : '1px solid rgba(255,255,255,0.6)',
        boxShadow: mode === 'dark'
          ? '0 8px 48px rgba(0,0,0,0.6)'
          : '0 8px 48px rgba(0,0,0,0.15)',
        transition: 'background 0.8s, border-color 0.8s, box-shadow 0.8s',
      }}>
        {/* Large logo in hero */}
        <img
          src="/logo.png"
          alt="Albaraka Dairy Farm"
          onError={(e) => { e.target.style.display = 'none' }}
          style={{ width: '160px', height: '160px', marginBottom: '1rem', filter: 'drop-shadow(0 4px 16px rgba(0,0,0,0.4))' }}
        />

        <div className={`hero-badge ${lang === 'ar' ? 'ar' : ''}`}>{t.badge}</div>

        <h1 className="hero-title" style={{ textShadow: mode === 'dark' ? '0 2px 12px rgba(0,0,0,0.8)' : '0 2px 8px rgba(0,0,0,0.15)' }}>
          {t.heroTitle1} <span className="accent">{t.heroAccent}</span>
          <br />
          {t.heroTitle2}
        </h1>

        <p className={`hero-sub ${lang === 'ar' ? 'ar' : ''}`}>{t.heroSub}</p>

        <div className="hero-btns">
          <button className="btn-primary" onClick={scrollToProducts}>
            {t.heroBtnPrimary}
          </button>
          <button className="btn-secondary" onClick={scrollToContact}>
            {t.heroBtnSecondary}
          </button>
        </div>
      </div>
    </section>
  )
}
