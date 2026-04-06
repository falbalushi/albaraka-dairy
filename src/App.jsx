import React, { useState, useEffect, useCallback } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
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

  const SHEET_ID = '1OhDDI3Xiwb2pVtQUmvue8NjLi8d56aBrrrv82OtLSvY'
  const API_KEY  = 'AIzaSyAY8ncDPVyL-CJ9u-itPjlsixq9HCghXWU'

  // Fetch stock from Google Sheets API (real-time, no caching)
  useEffect(() => {
    const fetchStock = () => {
      fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/Sheet1!A1:B10?key=${API_KEY}`)
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
    document.body.style.fontFamily = lang === 'ar' ? "'Tajawal', sans-serif" : "'DM Sans', sans-serif"
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

      {/* Toast notification */}
      <div className={`toast ${toast ? 'show' : ''}`}>
        {toast}
      </div>
    </>
  )
}
