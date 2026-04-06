import React from 'react'

/* ─── Inline style objects ─────────────────────────── */

const scene = (mode) => ({
  position: 'absolute',
  inset: 0,
  overflow: 'hidden',
  transition: 'all 0.8s ease',
})

const sky = (mode) => ({
  position: 'absolute',
  inset: 0,
  background: mode === 'dark'
    ? 'linear-gradient(180deg, #0A0520 0%, #120830 40%, #1A0A2E 70%, #0D1A10 100%)'
    : 'linear-gradient(180deg, #87CEEB 0%, #B0D8F0 35%, #D4ECF7 60%, #FFF4B8 100%)',
  transition: 'background 0.8s ease',
})

/* ── Sun ── */
const sunStyle = (mode) => ({
  position: 'absolute',
  top: '8%',
  left: '62%',
  width: '90px',
  height: '90px',
  borderRadius: '50%',
  background: 'radial-gradient(circle, #FFFDE0 0%, #FFE040 40%, #FFB800 70%, rgba(255,184,0,0) 100%)',
  boxShadow: '0 0 60px 30px rgba(255,220,60,0.35), 0 0 120px 60px rgba(255,180,0,0.15)',
  opacity: mode === 'dark' ? 0 : 1,
  transition: 'opacity 0.8s ease',
  zIndex: 2,
})

/* ── Moon ── */
const moonStyle = (mode) => ({
  position: 'absolute',
  top: '9%',
  right: '12%',
  width: '72px',
  height: '72px',
  borderRadius: '50%',
  background: 'radial-gradient(circle at 35% 35%, #FEFCE8 0%, #E8E0B0 55%, #C8BC80 100%)',
  boxShadow: '0 0 40px 18px rgba(220,210,150,0.25), 0 0 80px 40px rgba(180,160,80,0.1)',
  opacity: mode === 'dark' ? 1 : 0,
  transition: 'opacity 0.8s ease',
  zIndex: 2,
})

/* Moon craters */
const craterStyle = (top, left, size) => ({
  position: 'absolute',
  top, left,
  width: size,
  height: size,
  borderRadius: '50%',
  background: 'rgba(160,150,100,0.3)',
})

/* ── Sun rays wrapper ── */
const sunRaysStyle = (mode) => ({
  position: 'absolute',
  top: '8%',
  left: '62%',
  width: '90px',
  height: '90px',
  opacity: mode === 'dark' ? 0 : 1,
  transition: 'opacity 0.8s ease',
  zIndex: 1,
  animation: 'sunRotate 18s linear infinite',
  transformOrigin: 'center center',
})

/* ── Mountains (background) ── */
const mountainsBg = (mode) => ({
  position: 'absolute',
  bottom: '30%',
  left: 0,
  right: 0,
  height: '220px',
  zIndex: 3,
})

/* ── Middle hills ── */
const hillsMid = (mode) => ({
  position: 'absolute',
  bottom: '20%',
  left: 0,
  right: 0,
  height: '200px',
  zIndex: 4,
})

/* ── Foreground grass ── */
const grassFg = (mode) => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  height: '22%',
  background: mode === 'dark'
    ? 'linear-gradient(180deg, #0D2208 0%, #0A1A06 100%)'
    : 'linear-gradient(180deg, #5A9A35 0%, #3D7A20 100%)',
  zIndex: 5,
  transition: 'background 0.8s ease',
  borderRadius: '60% 60% 0 0 / 20px 20px 0 0',
})

/* ── Dirt path ── */
const dirtPath = (mode) => ({
  position: 'absolute',
  bottom: 0,
  left: '50%',
  transform: 'translateX(-50%)',
  width: 0,
  height: 0,
  borderLeft: '60px solid transparent',
  borderRight: '60px solid transparent',
  borderBottom: mode === 'dark'
    ? '240px solid #3A2510'
    : '240px solid #C4956A',
  zIndex: 6,
  transition: 'border-bottom-color 0.8s ease',
  filter: 'blur(0.5px)',
})

/* ── Fort silhouette ── */
const fortStyle = (mode) => ({
  position: 'absolute',
  bottom: '20%',
  left: '3%',
  zIndex: 7,
  opacity: mode === 'dark' ? 0.75 : 0.85,
  transition: 'opacity 0.8s ease',
})

/* ── Lantern glow (dark mode only) ── */
const lanternGlow = (mode) => ({
  position: 'absolute',
  bottom: '25%',
  left: '9%',
  width: '60px',
  height: '60px',
  borderRadius: '50%',
  background: 'radial-gradient(circle, rgba(255,200,80,0.7) 0%, rgba(255,150,30,0.3) 50%, transparent 70%)',
  opacity: mode === 'dark' ? 1 : 0,
  transition: 'opacity 0.8s ease',
  zIndex: 8,
  filter: 'blur(3px)',
})

/* ── Cloud styles ── */
const cloudBase = (top, left, scale, delay, mode) => ({
  position: 'absolute',
  top,
  left,
  transform: `scale(${scale})`,
  transformOrigin: 'left center',
  opacity: mode === 'dark' ? 0.08 : 0.92,
  transition: 'opacity 0.8s ease',
  animation: `cloudDrift ${18 + delay * 4}s linear ${delay}s infinite`,
  zIndex: 2,
})

/* ─── Components ─── */

const SunRays = ({ mode }) => {
  const rays = Array.from({ length: 12 }, (_, i) => {
    const angle = (i * 30) * (Math.PI / 180)
    const x1 = 45 + Math.cos(angle) * 52
    const y1 = 45 + Math.sin(angle) * 52
    const x2 = 45 + Math.cos(angle) * 70
    const y2 = 45 + Math.sin(angle) * 70
    return { x1, y1, x2, y2 }
  })
  return (
    <div style={sunRaysStyle(mode)}>
      <svg width="90" height="90" viewBox="0 0 90 90">
        {rays.map((r, i) => (
          <line
            key={i}
            x1={r.x1} y1={r.y1} x2={r.x2} y2={r.y2}
            stroke="#FFD700"
            strokeWidth={i % 3 === 0 ? '2.5' : '1.5'}
            strokeLinecap="round"
            opacity={i % 3 === 0 ? '0.9' : '0.5'}
          />
        ))}
      </svg>
    </div>
  )
}

const Cloud = ({ top, left, scale, delay, mode }) => (
  <div style={cloudBase(top, left, scale, delay, mode)}>
    <svg width="120" height="55" viewBox="0 0 120 55">
      <ellipse cx="60" cy="38" rx="55" ry="18" fill="white" />
      <ellipse cx="40" cy="32" rx="28" ry="22" fill="white" />
      <ellipse cx="72" cy="30" rx="26" ry="20" fill="white" />
      <ellipse cx="55" cy="26" rx="20" ry="18" fill="white" />
    </svg>
  </div>
)

const Stars = ({ mode }) => {
  const stars = Array.from({ length: 90 }, (_, i) => ({
    top: `${(i * 7.3 + 2.1) % 85}%`,
    left: `${(i * 11.7 + 1.3) % 100}%`,
    size: ((i * 0.37) % 2) + 0.8,
    delay: (i * 0.23) % 4,
    dur: 2 + ((i * 0.41) % 3),
  }))
  return (
    <div style={{
      position: 'absolute', inset: 0, zIndex: 2,
      opacity: mode === 'dark' ? 1 : 0,
      transition: 'opacity 0.8s ease',
      pointerEvents: 'none',
    }}>
      {stars.map((s, i) => (
        <div key={i} style={{
          position: 'absolute',
          top: s.top, left: s.left,
          width: s.size, height: s.size,
          borderRadius: '50%',
          background: '#FFFFFF',
          animation: `twinkle ${s.dur}s ease-in-out ${s.delay}s infinite`,
        }} />
      ))}
    </div>
  )
}

/* Mountains SVG (background layer) */
const Mountains = ({ mode }) => (
  <svg
    viewBox="0 0 1440 220"
    preserveAspectRatio="none"
    style={{ width: '100%', height: '100%', display: 'block' }}
  >
    <polygon
      points="0,220 180,60 310,140 420,40 560,130 680,20 820,110 960,30 1100,120 1240,50 1360,130 1440,80 1440,220"
      fill={mode === 'dark' ? '#1A0E30' : '#C4A882'}
      style={{ transition: 'fill 0.8s ease' }}
    />
    <polygon
      points="0,220 140,90 260,160 380,70 500,150 620,55 760,140 900,60 1040,150 1180,70 1300,140 1440,90 1440,220"
      fill={mode === 'dark' ? '#22103A' : '#D4B892'}
      opacity="0.7"
      style={{ transition: 'fill 0.8s ease' }}
    />
  </svg>
)

/* Rolling hills SVG (mid layer) */
const Hills = ({ mode }) => (
  <svg
    viewBox="0 0 1440 200"
    preserveAspectRatio="none"
    style={{ width: '100%', height: '100%', display: 'block' }}
  >
    {/* Back rolling hill */}
    <ellipse cx="400" cy="200" rx="600" ry="130" fill={mode === 'dark' ? '#1A3A0F' : '#5A8A3C'} style={{ transition: 'fill 0.8s ease' }} />
    <ellipse cx="1100" cy="200" rx="550" ry="120" fill={mode === 'dark' ? '#1A3A0F' : '#5A8A3C'} style={{ transition: 'fill 0.8s ease' }} />
    {/* Front rolling hill */}
    <ellipse cx="300" cy="210" rx="480" ry="120" fill={mode === 'dark' ? '#0F2808' : '#4A7A2C'} style={{ transition: 'fill 0.8s ease' }} />
    <ellipse cx="1180" cy="210" rx="460" ry="115" fill={mode === 'dark' ? '#0F2808' : '#4A7A2C'} style={{ transition: 'fill 0.8s ease' }} />
    <ellipse cx="720" cy="215" rx="400" ry="110" fill={mode === 'dark' ? '#0F2808' : '#4A7A2C'} style={{ transition: 'fill 0.8s ease' }} />
  </svg>
)

/* Palm tree SVG */
const PalmTree = ({ flip, mode }) => (
  <svg
    width="90" height="200"
    viewBox="0 0 90 200"
    style={{ transform: flip ? 'scaleX(-1)' : 'none' }}
  >
    {/* Trunk */}
    <path
      d="M42,200 Q38,160 40,120 Q38,80 43,50"
      stroke={mode === 'dark' ? '#4A3020' : '#8B5E3C'}
      strokeWidth="10"
      strokeLinecap="round"
      fill="none"
      style={{ transition: 'stroke 0.8s ease' }}
    />
    {/* Trunk texture lines */}
    <path d="M39,170 Q44,167 39,164" stroke={mode === 'dark' ? '#3A2010' : '#6B4020'} strokeWidth="1.5" fill="none" />
    <path d="M40,155 Q45,152 40,149" stroke={mode === 'dark' ? '#3A2010' : '#6B4020'} strokeWidth="1.5" fill="none" />
    <path d="M39,140 Q44,137 39,134" stroke={mode === 'dark' ? '#3A2010' : '#6B4020'} strokeWidth="1.5" fill="none" />

    {/* Fronds - each with sway animation via CSS class */}
    <g className="palm-fronds" style={{ transformOrigin: '43px 50px' }}>
      <path d="M43,50 Q10,20 -5,8" stroke={mode === 'dark' ? '#1A5A1A' : '#3D8B3D'} strokeWidth="5" strokeLinecap="round" fill="none" style={{ transition: 'stroke 0.8s ease' }} />
      <path d="M43,50 Q30,15 28,-4" stroke={mode === 'dark' ? '#1A5A1A' : '#3D8B3D'} strokeWidth="5" strokeLinecap="round" fill="none" style={{ transition: 'stroke 0.8s ease' }} />
      <path d="M43,50 Q55,15 60,-2" stroke={mode === 'dark' ? '#1E6A1E' : '#4A9A3A'} strokeWidth="5" strokeLinecap="round" fill="none" style={{ transition: 'stroke 0.8s ease' }} />
      <path d="M43,50 Q75,25 88,12" stroke={mode === 'dark' ? '#1E6A1E' : '#4A9A3A'} strokeWidth="5" strokeLinecap="round" fill="none" style={{ transition: 'stroke 0.8s ease' }} />
      <path d="M43,50 Q20,45 0,55" stroke={mode === 'dark' ? '#1A5A1A' : '#3D8B3D'} strokeWidth="4" strokeLinecap="round" fill="none" style={{ transition: 'stroke 0.8s ease' }} />
      <path d="M43,50 Q65,42 84,52" stroke={mode === 'dark' ? '#1A5A1A' : '#3D8B3D'} strokeWidth="4" strokeLinecap="round" fill="none" style={{ transition: 'stroke 0.8s ease' }} />
      {/* Frond leaflets left */}
      <path d="M43,50 Q10,20 -5,8 M15,30 Q8,18 -2,12 M28,22 Q22,10 18,2" stroke={mode === 'dark' ? '#156015' : '#2D7A2D'} strokeWidth="2" fill="none" opacity="0.7" style={{ transition: 'stroke 0.8s ease' }} />
      {/* Frond leaflets right */}
      <path d="M43,50 Q75,25 88,12 M65,34 Q75,20 80,14 M55,22 Q60,10 62,2" stroke={mode === 'dark' ? '#156015' : '#2D7A2D'} strokeWidth="2" fill="none" opacity="0.7" style={{ transition: 'stroke 0.8s ease' }} />
    </g>

    {/* Coconuts */}
    <circle cx="38" cy="54" r="5" fill={mode === 'dark' ? '#2A1A08' : '#5C3A1E'} style={{ transition: 'fill 0.8s ease' }} />
    <circle cx="48" cy="52" r="4.5" fill={mode === 'dark' ? '#2A1A08' : '#5C3A1E'} style={{ transition: 'fill 0.8s ease' }} />
  </svg>
)

/* Omani fort SVG silhouette */
const Fort = ({ mode }) => (
  <svg width="160" height="140" viewBox="0 0 160 140">
    {/* Main tower */}
    <rect x="55" y="40" width="50" height="90" fill={mode === 'dark' ? '#1A0E20' : '#C4A882'} style={{ transition: 'fill 0.8s ease' }} />
    {/* Battlement top */}
    <rect x="50" y="32" width="12" height="14" fill={mode === 'dark' ? '#1A0E20' : '#C4A882'} style={{ transition: 'fill 0.8s ease' }} />
    <rect x="66" y="32" width="12" height="14" fill={mode === 'dark' ? '#1A0E20' : '#C4A882'} style={{ transition: 'fill 0.8s ease' }} />
    <rect x="82" y="32" width="12" height="14" fill={mode === 'dark' ? '#1A0E20' : '#C4A882'} style={{ transition: 'fill 0.8s ease' }} />
    <rect x="98" y="32" width="12" height="14" fill={mode === 'dark' ? '#1A0E20' : '#C4A882'} style={{ transition: 'fill 0.8s ease' }} />
    <rect x="50" y="46" width="60" height="3" fill={mode === 'dark' ? '#150A18' : '#B89A6A'} style={{ transition: 'fill 0.8s ease' }} />
    {/* Side wall left */}
    <rect x="20" y="70" width="35" height="60" fill={mode === 'dark' ? '#150A18' : '#B89A6A'} style={{ transition: 'fill 0.8s ease' }} />
    <rect x="16" y="62" width="10" height="12" fill={mode === 'dark' ? '#150A18' : '#B89A6A'} style={{ transition: 'fill 0.8s ease' }} />
    <rect x="28" y="62" width="10" height="12" fill={mode === 'dark' ? '#150A18' : '#B89A6A'} style={{ transition: 'fill 0.8s ease' }} />
    <rect x="40" y="62" width="10" height="12" fill={mode === 'dark' ? '#150A18' : '#B89A6A'} style={{ transition: 'fill 0.8s ease' }} />
    {/* Side wall right */}
    <rect x="105" y="70" width="35" height="60" fill={mode === 'dark' ? '#150A18' : '#B89A6A'} style={{ transition: 'fill 0.8s ease' }} />
    <rect x="106" y="62" width="10" height="12" fill={mode === 'dark' ? '#150A18' : '#B89A6A'} style={{ transition: 'fill 0.8s ease' }} />
    <rect x="118" y="62" width="10" height="12" fill={mode === 'dark' ? '#150A18' : '#B89A6A'} style={{ transition: 'fill 0.8s ease' }} />
    <rect x="130" y="62" width="10" height="12" fill={mode === 'dark' ? '#150A18' : '#B89A6A'} style={{ transition: 'fill 0.8s ease' }} />
    {/* Arched gate */}
    <path d="M70,130 L70,95 Q80,85 90,95 L90,130 Z" fill={mode === 'dark' ? '#0A0515' : '#8B6A42'} style={{ transition: 'fill 0.8s ease' }} />
    {/* Windows */}
    <path d="M60,65 L60,55 Q65,50 70,55 L70,65 Z" fill={mode === 'dark' ? '#0A0515' : '#8B6A42'} style={{ transition: 'fill 0.8s ease' }} />
    <path d="M90,65 L90,55 Q95,50 100,55 L100,65 Z" fill={mode === 'dark' ? '#0A0515' : '#8B6A42'} style={{ transition: 'fill 0.8s ease' }} />
    {/* Lantern (dark mode) */}
    {mode === 'dark' && (
      <>
        <rect x="78" y="78" width="4" height="8" fill="#8B6A42" />
        <path d="M75,86 L85,86 L87,94 L73,94 Z" fill="#C8A048" opacity="0.9" />
        <ellipse cx="80" cy="94" rx="7" ry="3" fill="#C8A048" opacity="0.7" />
      </>
    )}
    {/* Crenellation detail */}
    <rect x="55" y="46" width="50" height="2" fill={mode === 'dark' ? '#2A1830' : '#D4B882'} opacity="0.5" style={{ transition: 'fill 0.8s ease' }} />
  </svg>
)

/* Buffalo silhouette SVG */
const Buffalo = ({ mode }) => (
  <div className="buffalo-graze" style={{ display: 'inline-block' }}>
    <svg width="160" height="110" viewBox="0 0 160 110">
      {/* Body */}
      <ellipse cx="85" cy="72" rx="55" ry="32" fill={mode === 'dark' ? '#3A2214' : '#2C1810'} style={{ transition: 'fill 0.8s ease' }} />
      {/* Neck */}
      <path d="M40,58 Q30,38 38,28 Q50,20 60,32 Q55,48 50,58 Z" fill={mode === 'dark' ? '#3A2214' : '#2C1810'} style={{ transition: 'fill 0.8s ease' }} />
      {/* Head */}
      <ellipse cx="38" cy="26" rx="20" ry="16" fill={mode === 'dark' ? '#3A2214' : '#2C1810'} style={{ transition: 'fill 0.8s ease' }} />
      {/* Horns */}
      <path d="M28,14 Q16,2 22,-2 Q28,0 30,12" fill={mode === 'dark' ? '#4A3020' : '#3D2415'} style={{ transition: 'fill 0.8s ease' }} />
      <path d="M50,14 Q62,2 56,-2 Q50,0 48,12" fill={mode === 'dark' ? '#4A3020' : '#3D2415'} style={{ transition: 'fill 0.8s ease' }} />
      {/* Horn tips */}
      <circle cx="20" cy="-1" r="3" fill={mode === 'dark' ? '#5A4030' : '#4D3020'} style={{ transition: 'fill 0.8s ease' }} />
      <circle cx="58" cy="-1" r="3" fill={mode === 'dark' ? '#5A4030' : '#4D3020'} style={{ transition: 'fill 0.8s ease' }} />
      {/* Muzzle */}
      <ellipse cx="24" cy="30" rx="11" ry="8" fill={mode === 'dark' ? '#4A3020' : '#3D2815'} style={{ transition: 'fill 0.8s ease' }} />
      {/* Nostril */}
      <ellipse cx="20" cy="31" rx="3" ry="2" fill={mode === 'dark' ? '#2A1208' : '#1A0C04'} style={{ transition: 'fill 0.8s ease' }} />
      {/* Eye */}
      <circle cx="42" cy="22" r="3.5" fill={mode === 'dark' ? '#6B5040' : '#5A3820'} style={{ transition: 'fill 0.8s ease' }} />
      <circle cx="42" cy="22" r="2" fill={mode === 'dark' ? '#150A04' : '#0A0402'} style={{ transition: 'fill 0.8s ease' }} />
      <circle cx="43" cy="21" r="0.8" fill="rgba(255,255,255,0.6)" />
      {/* Hump */}
      <ellipse cx="90" cy="44" rx="28" ry="16" fill={mode === 'dark' ? '#2A1810' : '#1E1008'} style={{ transition: 'fill 0.8s ease' }} />
      {/* Legs */}
      <rect x="52" y="95" width="12" height="15" rx="4" fill={mode === 'dark' ? '#3A2214' : '#2C1810'} style={{ transition: 'fill 0.8s ease' }} />
      <rect x="68" y="97" width="11" height="13" rx="4" fill={mode === 'dark' ? '#3A2214' : '#2C1810'} style={{ transition: 'fill 0.8s ease' }} />
      <rect x="108" y="95" width="12" height="15" rx="4" fill={mode === 'dark' ? '#3A2214' : '#2C1810'} style={{ transition: 'fill 0.8s ease' }} />
      <rect x="122" y="97" width="11" height="13" rx="4" fill={mode === 'dark' ? '#3A2214' : '#2C1810'} style={{ transition: 'fill 0.8s ease' }} />
      {/* Hooves */}
      <rect x="52" y="107" width="12" height="5" rx="2" fill={mode === 'dark' ? '#1A0A04' : '#0A0402'} style={{ transition: 'fill 0.8s ease' }} />
      <rect x="68" y="107" width="11" height="5" rx="2" fill={mode === 'dark' ? '#1A0A04' : '#0A0402'} style={{ transition: 'fill 0.8s ease' }} />
      <rect x="108" y="107" width="12" height="5" rx="2" fill={mode === 'dark' ? '#1A0A04' : '#0A0402'} style={{ transition: 'fill 0.8s ease' }} />
      <rect x="122" y="107" width="11" height="5" rx="2" fill={mode === 'dark' ? '#1A0A04' : '#0A0402'} style={{ transition: 'fill 0.8s ease' }} />
      {/* Tail */}
      <path d="M138,65 Q148,55 145,70 Q142,80 138,78" stroke={mode === 'dark' ? '#3A2214' : '#2C1810'} strokeWidth="4" fill="none" strokeLinecap="round" style={{ transition: 'stroke 0.8s ease' }} />
      {/* Ear */}
      <ellipse cx="55" cy="22" rx="7" ry="5" fill={mode === 'dark' ? '#4A3020' : '#3D2415'} style={{ transition: 'fill 0.8s ease' }} />
    </svg>
  </div>
)

/* ── Horizon glow line ── */
const HorizonGlow = ({ mode }) => (
  <div style={{
    position: 'absolute',
    bottom: '19%',
    left: 0,
    right: 0,
    height: '4px',
    background: mode === 'dark'
      ? 'linear-gradient(90deg, transparent 0%, rgba(80,200,80,0.08) 30%, rgba(100,220,100,0.14) 50%, rgba(80,200,80,0.08) 70%, transparent 100%)'
      : 'linear-gradient(90deg, transparent 0%, rgba(255,220,80,0.3) 30%, rgba(255,240,120,0.5) 50%, rgba(255,220,80,0.3) 70%, transparent 100%)',
    zIndex: 5,
    filter: 'blur(2px)',
    transition: 'background 0.8s ease',
  }} />
)

export default function Hero({ t, lang, mode }) {
  const scrollToProducts = () =>
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })
  const scrollToContact = () =>
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section style={{
      minHeight: '90vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '3rem 2rem',
      position: 'relative',
      overflow: 'hidden',
    }}>

      {/* ── Scene background ── */}
      <div style={scene(mode)}>

        {/* Sky gradient */}
        <div style={sky(mode)} />

        {/* Stars (dark mode) */}
        <Stars mode={mode} />

        {/* Sun rays */}
        <SunRays mode={mode} />

        {/* Sun */}
        <div style={sunStyle(mode)} />

        {/* Moon */}
        <div style={moonStyle(mode)}>
          <div style={craterStyle('20%', '55%', '12px')} />
          <div style={craterStyle('55%', '25%', '8px')} />
          <div style={craterStyle('35%', '65%', '6px')} />
        </div>

        {/* Clouds */}
        <Cloud top="8%" left="-5%" scale={1.1} delay={0} mode={mode} />
        <Cloud top="12%" left="25%" scale={0.75} delay={3} mode={mode} />
        <Cloud top="6%" left="55%" scale={0.9} delay={6} mode={mode} />
        <Cloud top="15%" left="78%" scale={0.65} delay={1.5} mode={mode} />

        {/* Background mountains */}
        <div style={mountainsBg(mode)}>
          <Mountains mode={mode} />
        </div>

        {/* Middle hills */}
        <div style={hillsMid(mode)}>
          <Hills mode={mode} />
        </div>

        {/* Horizon glow */}
        <HorizonGlow mode={mode} />

        {/* Foreground grass strip */}
        <div style={grassFg(mode)} />

        {/* Dirt path */}
        <div style={dirtPath(mode)} />

        {/* Fort silhouette – left side */}
        <div style={fortStyle(mode)}>
          <Fort mode={mode} />
        </div>

        {/* Lantern glow in dark mode */}
        <div style={lanternGlow(mode)} />

        {/* Palm tree – left */}
        <div style={{
          position: 'absolute',
          bottom: '19%',
          left: '14%',
          zIndex: 7,
          opacity: 0.93,
          transform: 'scale(1.1)',
          transformOrigin: 'bottom center',
        }}>
          <PalmTree flip={false} mode={mode} />
        </div>

        {/* Palm tree – right */}
        <div style={{
          position: 'absolute',
          bottom: '19%',
          right: '10%',
          zIndex: 7,
          opacity: 0.88,
          transform: 'scale(0.9)',
          transformOrigin: 'bottom center',
        }}>
          <PalmTree flip={true} mode={mode} />
        </div>

        {/* Extra small palm – far left background */}
        <div style={{
          position: 'absolute',
          bottom: '24%',
          left: '24%',
          zIndex: 6,
          opacity: 0.65,
          transform: 'scale(0.65)',
          transformOrigin: 'bottom center',
        }}>
          <PalmTree flip={true} mode={mode} />
        </div>

        {/* Buffalo silhouette – right of center */}
        <div style={{
          position: 'absolute',
          bottom: '20%',
          right: '18%',
          zIndex: 8,
          transform: 'scaleX(-1)',
        }}>
          <Buffalo mode={mode} />
        </div>

        {/* Scene depth overlay — subtle gradient on top and bottom for text legibility */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: mode === 'dark'
            ? 'radial-gradient(ellipse at 50% 40%, rgba(0,0,0,0) 30%, rgba(0,0,0,0.25) 100%)'
            : 'radial-gradient(ellipse at 50% 40%, rgba(0,0,0,0) 20%, rgba(0,0,0,0.08) 100%)',
          zIndex: 9,
          transition: 'background 0.8s ease',
          pointerEvents: 'none',
        }} />
      </div>

      {/* ── Text content overlay ── */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        maxWidth: '700px',
        padding: '2.5rem 2rem',
        borderRadius: '24px',
        background: mode === 'dark'
          ? 'rgba(8,4,20,0.52)'
          : 'rgba(255,250,235,0.55)',
        backdropFilter: 'blur(6px)',
        WebkitBackdropFilter: 'blur(6px)',
        boxShadow: mode === 'dark'
          ? '0 8px 48px rgba(0,0,0,0.5)'
          : '0 8px 48px rgba(160,120,40,0.12)',
        border: mode === 'dark'
          ? '1px solid rgba(255,255,255,0.06)'
          : '1px solid rgba(184,122,30,0.18)',
        transition: 'background 0.8s ease, box-shadow 0.8s ease, border-color 0.8s ease',
      }}>
        <div
          className={`hero-badge ${lang === 'ar' ? 'ar' : ''}`}
          style={{
            color: mode === 'dark' ? '#E8A830' : '#8A5A10',
            borderColor: mode === 'dark' ? 'rgba(232,168,48,0.3)' : 'rgba(184,122,30,0.25)',
            background: mode === 'dark' ? 'rgba(232,168,48,0.12)' : 'rgba(184,122,30,0.1)',
          }}
        >
          {t.badge}
        </div>

        <h1
          className="hero-title"
          style={{
            color: mode === 'dark' ? '#F5EDD8' : '#1A1208',
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2.1rem, 6vw, 3.7rem)',
            lineHeight: 1.14,
            marginBottom: '1rem',
            transition: 'color 0.5s',
            textShadow: mode === 'dark'
              ? '0 2px 12px rgba(0,0,0,0.6)'
              : '0 1px 6px rgba(255,255,255,0.6)',
          }}
        >
          {t.heroTitle1}{' '}
          <span style={{
            color: mode === 'dark' ? '#E8A830' : '#B87A1E',
            transition: 'color 0.5s',
          }}>
            {t.heroAccent}
          </span>
          <br />
          {t.heroTitle2}
        </h1>

        <p
          className={`hero-sub ${lang === 'ar' ? 'ar' : ''}`}
          style={{
            color: mode === 'dark' ? '#C8B890' : '#6B5A3E',
            fontSize: '15px',
            marginBottom: '2rem',
            lineHeight: 1.75,
            transition: 'color 0.5s',
          }}
        >
          {t.heroSub}
        </p>

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
