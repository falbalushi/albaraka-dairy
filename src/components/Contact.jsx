import React, { useEffect, useRef } from 'react'

const PHONE = '96899364699'

export default function Contact({ t, lang }) {
  const headerRef = useRef(null)
  const cardRef = useRef(null)

  useEffect(() => {
    const els = [headerRef.current, cardRef.current].filter(Boolean)
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target) } })
    }, { threshold: 0.1 })
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  const openWA = () => {
    const msg = t.quickMsg(t.p1Name)
    window.open(`https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`, '_blank')
  }

  return (
    <section className="section" id="contact">
      <div id="booking" style={{ height: '1px' }} />
      <div className="sec-header reveal" ref={headerRef}>
        <h2 className={`sec-title ${lang === 'ar' ? 'ar' : ''}`}>{t.contactTitle}</h2>
        <p className={`sec-sub ${lang === 'ar' ? 'ar' : ''}`}>{t.contactSub}</p>
      </div>
      <div className="contact-card reveal" ref={cardRef}>
        <div className="contact-item">
          <div className={`contact-label ${lang === 'ar' ? 'ar' : ''}`}>{t.label1}</div>
          <div className="contact-val">+968 9936 4699</div>
          <div className={`contact-muted ${lang === 'ar' ? 'ar' : ''}`}>{t.muted1}</div>
        </div>
        <div className="contact-item">
          <div className={`contact-label ${lang === 'ar' ? 'ar' : ''}`}>{t.label2}</div>
          <div className="contact-val">Muscat, Oman <span style={{ fontSize: '0.85em', opacity: 0.75 }}>(Rumais)</span></div>
          <div className={`contact-muted ${lang === 'ar' ? 'ar' : ''}`}>{t.muted2}</div>
        </div>
        <div className="contact-item">
          <div className={`contact-label ${lang === 'ar' ? 'ar' : ''}`}>{t.label3}</div>
          <div className={`contact-val ${lang === 'ar' ? 'ar' : ''}`}>{t.val3}</div>
          <div className={`contact-muted ${lang === 'ar' ? 'ar' : ''}`}>{t.muted3}</div>
        </div>
        <div className="contact-item">
          <div className={`contact-label ${lang === 'ar' ? 'ar' : ''}`}>{t.label4}</div>
          <div
            className={`contact-val clickable ${lang === 'ar' ? 'ar' : ''}`}
            style={{ color: 'var(--gold)' }}
            onClick={openWA}
          >
            {t.val4}
          </div>
          <div className="contact-muted">+968 9936 4699</div>
        </div>
      </div>
    </section>
  )
}
