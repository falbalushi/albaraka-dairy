import React, { useEffect, useRef } from 'react'

export default function Story({ t, lang }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.add('visible'); obs.disconnect() }
    }, { threshold: 0.1 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section className="section" id="story">
      <div className="story-grid reveal" ref={ref}>
        <div className="story-text">
          <div className="story-label">{lang === 'ar' ? '🌿 قصتنا' : '🌿 Our Story'}</div>
          <h2 className={`sec-title ${lang === 'ar' ? 'ar' : ''}`} style={{ textAlign: 'left', marginBottom: '1.2rem' }}>
            {lang === 'ar' ? 'من المزرعة إلى مائدتكم' : 'From the Farm, Straight to You'}
          </h2>
          <p className={`story-p ${lang === 'ar' ? 'ar' : ''}`}>
            {lang === 'ar'
              ? 'منذ أكثر من ٥ سنوات، نحرص في مزرعة البركة على تقديم حليب الجاموس الطازج والنقي مباشرةً إلى زبائننا. لا مواد حافظة، لا إضافات كيميائية — فقط حليب طبيعي ١٠٠٪ ينتقل من الجاموسة إلى الزجاجة في نفس اليوم.'
              : 'For over 5 years, Albaraka Dairy Farm has been delivering fresh, pure buffalo milk straight to our customers. No preservatives, no chemicals, no additives — just 100% natural milk that goes from the buffalo straight into the bottle and into your hands the same day.'}
          </p>
          <p className={`story-p ${lang === 'ar' ? 'ar' : ''}`} style={{ marginTop: '1rem' }}>
            {lang === 'ar'
              ? 'نمتلك أكثر من ١٠ رأس من الجاموس المُعتنى بها بعناية في مزرعتنا بالرميس، مسقط. كل زجاجة تصلكم هي شهادة على التزامنا بالجودة والنقاء.'
              : 'We raise over 10 carefully tended buffalo at our farm in Rumais, Muscat. Every bottle that reaches you is a testament to our commitment to quality and purity.'}
          </p>
        </div>
        <div className="story-stats">
          {[
            { num: '5+', label: lang === 'ar' ? 'سنوات من الخبرة' : 'Years of Experience' },
            { num: '10+', label: lang === 'ar' ? 'رأس جاموس' : 'Buffalo on the Farm' },
            { num: '100%', label: lang === 'ar' ? 'طبيعي ونقي' : 'Natural & Pure' },
            { num: 'Daily', label: lang === 'ar' ? 'إنتاج يومي طازج' : 'Fresh Daily Production' },
          ].map((s, i) => (
            <div key={i} className="story-stat">
              <div className="story-stat-num">{s.num}</div>
              <div className={`story-stat-label ${lang === 'ar' ? 'ar' : ''}`}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
