import React, { useState, useEffect, useCallback } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Story from './components/Story'
import WhyUs from './components/WhyUs'
import Products from './components/Products'
import Contact from './components/Contact'
import BookingModal from './components/BookingModal'
import translations from './translations'

const PHONE = '96899364699'

export default function App() {
  const [mode, setMode]       = useState('dark')   // 'dark' | 'light'
  const [lang, setLang]       = useState('en')      // 'en' | 'ar'
  const [stock, setStock]     = useState({ milk: 0, laban: 0 })
  const [modal, setModal]     = useState(null)      // null | 'milk' | 'laban'
  const [toast, setToast]     = useState('')

  const t = translations[lang]

  const SHEET_ID = '1OhDDI3Xxwb2pVtQUmvue8NjLi8d56aBrrrv82OtLSvY'
  const API_KEY  = 'AIzaSyAY8ncDPVyL-CJ9u-itPjlsixq9HCghXWU'

  // Fetch stock from Google Sheets API (real-time, no caching)
  useEffect(() => {
    const fetchStock = () => {
      fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/Sheet1!A2:B10?key=${API_KEY}`)
        .then(r => r.json())
        .then(data => {
          const rows = data.values || []
          const stock = {}
          rows.forEach(([name, qty]) => {
            if (name && qty) stock[name.trim().toLowerCase()] = parseInt(qty.trim(), 10)
          })
          if (!isNaN(stock.milk) && !isNaN(stock.laban)) {
            setStock({ milk: stock.milk, laban: stock.laban })
          }
        })
        .catch(() => {})
    }
    fetchStock()
    const interval = setInterval(fetchStock, 10000)
    return () => clearInterval(interval)
  }, [])

  // Apply theme class to <html> and direction to <body>
  useEffect(() => {
    document.documentElement.className = mode
    document.body.style.direction = lang === 'ar' ? 'rtl' : 'ltr'
    document.body.style.fontFamily = lang === 'ar' ? "'Tajawal', sans-serif" : "'Inter', sans-serif"
  }, [mode, lang])

  const toggleMode = () => setMode(m => m === 'dark' ? 'light' : 'dark')

  const showToast = useCallback((msg) => {
    setToast(msg)
    setTimeout(() => setToast(''), 4000)
  }, [])

  const handleConfirm = (product, qty) => {
    setStock(prev => ({ ...prev, [product]: Math.max(0, prev[product] - qty) }))
    setModal(null)
    showToast(t.toastMsg)
  }

  const handleQuickWA = (product) => {
    const productName = product === 'milk' ? t.p1Name : t.p2Name
    const msg = t.quickMsg(productName)
    window.open(`https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`, '_blank')
  }

  return (
    <>
      <Navbar
        t={t}
        lang={lang}
        setLang={setLang}
        mode={mode}
        toggleMode={toggleMode}
      />

      <Hero t={t} lang={lang} mode={mode} />

      <Story t={t} lang={lang} />

      <WhyUs lang={lang} />

      <Products
        t={t}
        lang={lang}
        stock={stock}
        mode={mode}
        onBook={(product) => setModal(product)}
        onWA={handleQuickWA}
      />

      <Contact t={t} lang={lang} />

      <footer>
        <p>
          © 2025 <span className="gold">Albaraka Dairy Farm</span> · مزرعة البركة للألبان · Muscat, Oman 🇴🇲
        </p>
        <p style={{ marginTop: '6px', fontSize: '11px' }} className={lang === 'ar' ? 'ar' : ''}>
          {t.footerSub}
        </p>
      </footer>

      {/* Booking Modal */}
      <BookingModal
        t={t}
        lang={lang}
        product={modal}
        maxQty={modal ? stock[modal] : 1}
        isOpen={modal !== null}
        onClose={() => setModal(null)}
        onConfirm={handleConfirm}
      />

      {/* Floating WhatsApp button */}
      <a
        href={`https://wa.me/${PHONE}`}
        target="_blank"
        rel="noopener noreferrer"
        className="wa-float"
        title="Chat on WhatsApp"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>

      {/* Toast notification */}
      <div className={`toast ${toast ? 'show' : ''}`}>
        {toast}
      </div>
    </>
  )
}
