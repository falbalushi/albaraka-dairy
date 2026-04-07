import React, { useEffect, useRef } from 'react'

const reviews = [
  {
    en: { name: 'Ahmed Al-Balushi', text: 'Best milk I have ever tasted. You can tell it\'s completely natural — no weird taste, just pure fresh milk. My whole family switched to Albaraka.' },
    ar: { name: 'أحمد البلوشي', text: 'أفضل حليب ذقته في حياتي. تشعر أنه طبيعي تماماً — لا طعم غريب، فقط حليب طازج نقي. كل عائلتي تحولت إلى البركة.' },
  },
  {
    en: { name: 'Fatima Al-Rawahi', text: 'I order every day for my kids. The quality is consistent and the pickup is so easy. Love that there are no preservatives — exactly what I want for my family.' },
    ar: { name: 'فاطمة الرواحي', text: 'أطلب كل يوم لأطفالي. الجودة ثابتة والاستلام سهل جداً. أحب أنه بلا مواد حافظة — هذا بالضبط ما أريده لعائلتي.' },
  },
  {
    en: { name: 'Khalid Al-Harthi', text: 'The laban is incredible. Thick, fresh, and tastes like what my grandmother used to make. Highly recommend to anyone who values real dairy.' },
    ar: { name: 'خالد الحارثي', text: 'اللبن رائع جداً. كثيف وطازج وطعمه مثل ما كانت جدتي تصنعه. أوصي به بشدة لكل من يقدّر الألبان الأصيلة.' },
  },
]

export default function Testimonials({ lang }) {
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
    <section className="section">
      <div className="sec-header" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <h2 className={`sec-title ${lang === 'ar' ? 'ar' : ''}`}>
          {lang === 'ar' ? 'ماذا يقول زبائننا' : 'What Our Customers Say'}
        </h2>
        <p className={`sec-sub ${lang === 'ar' ? 'ar' : ''}`}>
          {lang === 'ar' ? 'آراء حقيقية من زبائن حقيقيين' : 'Real reviews from real customers'}
        </p>
      </div>
      <div className="testimonials-grid reveal" ref={ref}>
        {reviews.map((r, i) => {
          const data = lang === 'ar' ? r.ar : r.en
          return (
            <div key={i} className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p className={`testimonial-text ${lang === 'ar' ? 'ar' : ''}`}>"{data.text}"</p>
              <div className={`testimonial-name ${lang === 'ar' ? 'ar' : ''}`}>— {data.name}</div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
