import React, { useEffect, useRef } from 'react'

const reasons = [
  { icon: '🚫', en: 'No Chemicals', ar: 'بلا كيماويات', enSub: 'Zero preservatives or additives — ever.', arSub: 'لا مواد حافظة أو إضافات بأي شكل.' },
  { icon: '⚡', en: 'Same Day Fresh', ar: 'طازج في نفس اليوم', enSub: 'Bottled and ready for pickup daily.', arSub: 'يُعبأ ويكون جاهزاً للاستلام يومياً.' },
  { icon: '🐃', en: 'Pure Buffalo Milk', ar: 'حليب جاموس أصيل', enSub: 'Rich, creamy, and full of natural goodness.', arSub: 'غني وكريمي ومليء بالفوائد الطبيعية.' },
  { icon: '📍', en: 'Local Farm Pickup', ar: 'استلام من المزرعة', enSub: 'Come meet us in Rumais, Muscat.', arSub: 'تفضلوا بزيارتنا في الرميس، مسقط.' },
  { icon: '💰', en: 'Fair Price', ar: 'سعر عادل', enSub: '1.500 OMR per 1.5L bottle — pure value.', arSub: '١٫٥٠٠ ريال للزجاجة ١٫٥ لتر.' },
  { icon: '📱', en: 'Easy Booking', ar: 'حجز سهل', enSub: 'Book in seconds via WhatsApp or online.', arSub: 'احجز في ثوانٍ عبر واتساب أو الموقع.' },
]

export default function WhyUs({ lang }) {
  const headerRef = useRef(null)
  const gridRef = useRef(null)

  useEffect(() => {
    const els = [headerRef.current, gridRef.current].filter(Boolean)
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target) } })
    }, { threshold: 0.1 })
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section className="whyus-section">
      <div className="section">
        <div className="sec-header reveal" ref={headerRef}>
          <h2 className={`sec-title ${lang === 'ar' ? 'ar' : ''}`}>
            {lang === 'ar' ? 'لماذا تختار البركة؟' : 'Why Choose Albaraka?'}
          </h2>
          <p className={`sec-sub ${lang === 'ar' ? 'ar' : ''}`}>
            {lang === 'ar' ? 'ما يجعلنا مختلفين' : 'What makes us different'}
          </p>
        </div>
        <div className="whyus-grid reveal" ref={gridRef}>
          {reasons.map((r, i) => (
            <div key={i} className="whyus-card">
              <div className="whyus-icon">{r.icon}</div>
              <div className={`whyus-title ${lang === 'ar' ? 'ar' : ''}`}>{lang === 'ar' ? r.ar : r.en}</div>
              <div className={`whyus-sub ${lang === 'ar' ? 'ar' : ''}`}>{lang === 'ar' ? r.arSub : r.enSub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
