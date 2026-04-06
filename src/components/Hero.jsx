import React, { useEffect, useRef } from 'react'

export default function Hero({ t, lang, mode }) {
  const starsRef = useRef(null)

  useEffect(() => {
    const container = starsRef.current
    if (!container) return
    container.innerHTML = ''
    for (let i = 0; i < 80; i++) {
      const star = document.createElement('div')
      star.className = 'star'
      const size = Math.random() * 2.5 + 1
      star.style.cssText = `
        width:${size}px; height:${size}px;
        top:${Math.random() * 100}%;
        left:${Math.random() * 100}%;
        animation-delay:${Math.random() * 4}s;
        animation-duration:${2 + Math.random() * 3}s;
      `
      container.appendChild(star)
    }
  }, [])

  const scrollToProducts = () =>
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })
  const scrollToContact = () =>
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="hero">
      {/* Stars (visible in dark mode via CSS var) */}
      <div className="stars" ref={starsRef} />

      {/* Sun glow (visible in light mode via CSS var) */}
      <div className="sun-glow" />

      {/* Floating orbs */}
      <div className="float-orb orb1" />
      <div className="float-orb orb2" />

      <div className="hero-inner">
        <div className={`hero-badge ${lang === 'ar' ? 'ar' : ''}`}>{t.badge}</div>

        <h1 className="hero-title">
          {lang === 'ar' ? (
            <>
              {t.heroTitle1} <span className="accent">{t.heroAccent}</span>
              <br />
              {t.heroTitle2}
            </>
          ) : (
            <>
              {t.heroTitle1} <span className="accent">{t.heroAccent}</span>
              <br />
              {t.heroTitle2}
            </>
          )}
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
