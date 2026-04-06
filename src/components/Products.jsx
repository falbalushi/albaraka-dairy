import React, { useEffect, useRef } from 'react'

const WA_ICON = (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

function ProductCard({ icon, name, size, perLabel, status, statusType, count, stockLabel, bookLabel, waLabel, onBook, onWA, lang, delay }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { el.classList.add('visible'); obs.disconnect() }
    }, { threshold: 0.1 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div className="product-card reveal" ref={ref} style={{ transitionDelay: delay }}>
      <span className="product-icon">{icon}</span>
      <div className={`product-name ${lang === 'ar' ? 'ar' : ''}`}>{name}</div>
      <div className={`product-size ${lang === 'ar' ? 'ar' : ''}`}>{size}</div>
      <div className="product-price">
        1.500 OMR <span>{perLabel}</span>
      </div>
      <div className={`stock-badge ${statusType === 'in' ? 'stock-in' : 'stock-low'}`}>
        <div className={`stock-dot ${statusType === 'in' ? 'dot-green' : 'dot-orange'}`} />
        <span className={lang === 'ar' ? 'ar' : ''}>{status}</span>
      </div>
      <div className="stock-row">
        <span className="stock-count">{count}</span>
        <span className={`stock-label ${lang === 'ar' ? 'ar' : ''}`}>{stockLabel}</span>
      </div>
      <button className={`book-btn ${lang === 'ar' ? 'ar' : ''}`} onClick={onBook}>{bookLabel}</button>
      <button className="wa-btn" onClick={onWA}>
        {WA_ICON}
        <span className={lang === 'ar' ? 'ar' : ''}>{waLabel}</span>
      </button>
    </div>
  )
}

export default function Products({ t, lang, stock, mode, onBook, onWA }) {
  const headerRef = useRef(null)
  const infoRef = useRef(null)

  useEffect(() => {
    const els = [headerRef.current, infoRef.current].filter(Boolean)
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target) } })
    }, { threshold: 0.1 })
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  // Wave fill colour depends on mode
  const waveFill = mode === 'dark' ? '#110E07' : '#FFFFFF'

  return (
    <>
      {/* Wave between hero and products */}
      <div className="wave-wrap">
        <svg viewBox="0 0 1440 50" xmlns="http://www.w3.org/2000/svg">
          <path d={`M0,25 C360,50 1080,0 1440,25 L1440,50 L0,50 Z`} fill={waveFill} />
        </svg>
      </div>

      <div className="products-bg" id="products">
        <section className="section">
          <div className="sec-header reveal" ref={headerRef}>
            <h2 className={`sec-title ${lang === 'ar' ? 'ar' : ''}`}>{t.sectionTitle}</h2>
            <p className={`sec-sub ${lang === 'ar' ? 'ar' : ''}`}>{t.sectionSub}</p>
          </div>

          <div className="products-grid">
            <ProductCard
              icon="🥛"
              name={t.p1Name}
              size={t.pSize}
              perLabel={t.pPer}
              status={t.p1Status}
              statusType="in"
              count={stock.milk}
              stockLabel={t.pAvail}
              bookLabel={t.bookBtn}
              waLabel={t.waBtn}
              onBook={() => onBook('milk')}
              onWA={() => onWA('milk')}
              lang={lang}
              delay="0.1s"
            />
            <ProductCard
              icon="🫙"
              name={t.p2Name}
              size={t.pSize}
              perLabel={t.pPer}
              status={t.p2Status}
              statusType="low"
              count={stock.laban}
              stockLabel={t.pAvail}
              bookLabel={t.bookBtn}
              waLabel={t.waBtn}
              onBook={() => onBook('laban')}
              onWA={() => onWA('laban')}
              lang={lang}
              delay="0.2s"
            />
          </div>

          {/* Info bar */}
          <div className="info-bar reveal" ref={infoRef}>
            <div className="info-item">
              <div className="info-num">100%</div>
              <div className={`info-label ${lang === 'ar' ? 'ar' : ''}`}>{t.info1}</div>
            </div>
            <div className="info-item">
              <div className="info-num">Daily</div>
              <div className={`info-label ${lang === 'ar' ? 'ar' : ''}`}>{t.info2}</div>
            </div>
            <div className="info-item">
              <div className="info-num">1.5L</div>
              <div className={`info-label ${lang === 'ar' ? 'ar' : ''}`}>{t.info3}</div>
            </div>
            <div className="info-item">
              <div className="info-num">1.500</div>
              <div className={`info-label ${lang === 'ar' ? 'ar' : ''}`}>{t.info4}</div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
