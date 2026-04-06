import React from 'react'

/* ── Seeded pseudo-random for stable star positions ── */
function seededRandom(seed) {
  let s = seed
  return function () {
    s = (s * 1664525 + 1013904223) & 0xffffffff
    return (s >>> 0) / 0xffffffff
  }
}

export default function Hero({ t, lang, mode }) {
  const scrollToProducts = () => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })
  const scrollToContact  = () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })

  const isLight = mode !== 'dark'

  /* ── stable star data ── */
  const rng   = seededRandom(42)
  const stars = Array.from({ length: 120 }, (_, i) => ({
    cx:  rng() * 1440,
    cy:  rng() * 520,
    r:   rng() * 1.4 + 0.4,
    dur: 2 + rng() * 3,
    del: rng() * 4,
  }))

  return (
    <section style={{
      position: 'relative',
      minHeight: '100svh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
    }}>

      {/* ════════════════════════════════════════════════
          FARM SCENE — full-cover SVG
      ════════════════════════════════════════════════ */}
      <svg
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          transition: 'all 0.8s ease',
        }}
        aria-hidden="true"
      >
        <defs>
          {/* Sky gradients */}
          <linearGradient id="skyLight" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#4A8FBF" />
            <stop offset="35%"  stopColor="#5BA3D9" />
            <stop offset="65%"  stopColor="#87CEEB" />
            <stop offset="82%"  stopColor="#C8E8F5" />
            <stop offset="100%" stopColor="#F0C87A" />
          </linearGradient>
          <linearGradient id="skyDark" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#020818" />
            <stop offset="40%"  stopColor="#0A1628" />
            <stop offset="75%"  stopColor="#0F1E18" />
            <stop offset="100%" stopColor="#1A2A1A" />
          </linearGradient>

          {/* Sun glow */}
          <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#FFF0A0" stopOpacity="1" />
            <stop offset="40%"  stopColor="#FFD060" stopOpacity="0.9" />
            <stop offset="70%"  stopColor="#FFAA20" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#FF8800" stopOpacity="0" />
          </radialGradient>

          {/* Moon glow */}
          <radialGradient id="moonGlow" cx="40%" cy="35%" r="50%">
            <stop offset="0%"   stopColor="#FEFCE8" />
            <stop offset="55%"  stopColor="#E8E0B0" />
            <stop offset="100%" stopColor="#C8BC80" />
          </radialGradient>
          <filter id="moonBlur">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>

          {/* Field gradient */}
          <linearGradient id="fieldGradLight" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#4A8A28" />
            <stop offset="100%" stopColor="#2D6010" />
          </linearGradient>
          <linearGradient id="fieldGradDark" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#0D2A06" />
            <stop offset="100%" stopColor="#071503" />
          </linearGradient>

          {/* Vignette */}
          <radialGradient id="vignette" cx="50%" cy="50%" r="70%">
            <stop offset="0%"   stopColor="transparent" />
            <stop offset="100%" stopColor="rgba(0,0,0,0.45)" />
          </radialGradient>

          {/* Animations */}
          <style>{`
            @keyframes buffaloGraze {
              0%,100% { transform: translateY(0px) rotate(0deg); }
              25%      { transform: translateY(-3px) rotate(0.5deg); }
              75%      { transform: translateY(2px) rotate(-0.4deg); }
            }
            @keyframes palmSway {
              0%,100% { transform: rotate(0deg) skewX(0deg); }
              30%     { transform: rotate(4deg) skewX(1.5deg); }
              70%     { transform: rotate(-3deg) skewX(-1deg); }
            }
            @keyframes twinkleSVG {
              0%,100% { opacity: 0.2; }
              50%     { opacity: 1; }
            }
            @keyframes sunPulse {
              0%,100% { opacity: 0.9; }
              50%     { opacity: 1; }
            }
            .buffalo-anim { animation: buffaloGraze 3.5s ease-in-out infinite; transform-box: fill-box; transform-origin: center bottom; }
            .palm-sway    { animation: palmSway 4s ease-in-out infinite; transform-box: fill-box; transform-origin: center bottom; }
            .palm-sway2   { animation: palmSway 4.8s ease-in-out infinite; transform-box: fill-box; transform-origin: center bottom; }
            .palm-sway3   { animation: palmSway 5.5s ease-in-out infinite reverse; transform-box: fill-box; transform-origin: center bottom; }
          `}</style>
        </defs>

        {/* ── 1. SKY ── */}
        <rect
          x="0" y="0" width="1440" height="900"
          fill={isLight ? 'url(#skyLight)' : 'url(#skyDark)'}
          style={{ transition: 'fill 0.8s ease' }}
        />

        {/* ── 2. STARS (dark only) ── */}
        {!isLight && stars.map((s, i) => (
          <circle
            key={i}
            cx={s.cx} cy={s.cy} r={s.r}
            fill="#FFFFFF"
            style={{
              animation: `twinkleSVG ${s.dur}s ease-in-out ${s.del}s infinite`,
            }}
          />
        ))}

        {/* ── 3. MOON (dark only) ── */}
        {!isLight && (
          <g>
            <circle cx="1220" cy="110" r="55" fill="rgba(220,210,150,0.18)" />
            <circle cx="1220" cy="110" r="42" fill="rgba(220,210,150,0.28)" />
            <circle cx="1220" cy="110" r="30" fill="url(#moonGlow)" filter="url(#moonBlur)" />
          </g>
        )}

        {/* ── 4. SUN (light only) ── */}
        {isLight && (
          <g>
            <circle cx="1180" cy="90" r="80" fill="url(#sunGlow)" opacity="0.55" />
            <circle cx="1180" cy="90" r="38" fill="#FFE066" opacity="0.95" style={{ animation: 'sunPulse 3s ease-in-out infinite' }} />
          </g>
        )}

        {/* ── 5. DISTANT MOUNTAINS ── */}
        <polygon
          points="0,520 120,400 220,440 340,370 480,420 580,360 680,400 780,350 900,390 1020,355 1150,405 1280,360 1380,400 1440,375 1440,540 0,540"
          fill={isLight ? '#C4B49A' : '#1A1A2E'}
          opacity={isLight ? 0.7 : 0.9}
          style={{ transition: 'fill 0.8s ease' }}
        />
        <polygon
          points="0,540 80,460 200,490 320,450 450,480 560,445 680,470 800,440 920,465 1060,438 1180,460 1300,442 1440,455 1440,560 0,560"
          fill={isLight ? '#B8A890' : '#141428'}
          opacity={isLight ? 0.6 : 0.8}
          style={{ transition: 'fill 0.8s ease' }}
        />

        {/* ── 6. PALM FOREST BACKGROUND (horizon band) ── */}
        {/* Dense palm silhouettes across horizon ~y:460-570 */}
        {Array.from({ length: 32 }, (_, i) => {
          const x   = i * 46 + (i % 3 === 0 ? 8 : 0)
          const h   = 75 + (i % 5) * 14
          const trunkW = 5 + (i % 3)
          const baseY = 568 - (i % 4) * 6
          const col  = isLight
            ? (i % 2 === 0 ? '#2D5A1B' : '#3A7025')
            : (i % 2 === 0 ? '#0D1F08' : '#101A07')
          return (
            <g key={`bgpalm-${i}`}>
              <rect x={x + 18} y={baseY - h} width={trunkW} height={h} fill={isLight ? '#5A3A1A' : '#1A0E06'} />
              {/* frond cluster */}
              {[-40,-25,-12,0,12,25,40].map((angle, j) => (
                <line
                  key={j}
                  x1={x + 20} y1={baseY - h}
                  x2={x + 20 + Math.sin(angle * Math.PI / 180) * 28}
                  y2={baseY - h - Math.cos(angle * Math.PI / 180) * 22}
                  stroke={col}
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              ))}
            </g>
          )
        })}

        {/* ── 7. LEFT FIELD ── */}
        <polygon
          points="100,570 580,540 620,900 0,900 0,620"
          fill={isLight ? 'url(#fieldGradLight)' : 'url(#fieldGradDark)'}
          style={{ transition: 'fill 0.8s ease' }}
        />
        {/* crop row texture left field */}
        {Array.from({ length: 18 }, (_, i) => {
          const y = 570 + i * 19
          const x1 = 0 + i * 3
          const x2 = Math.min(610, 100 + i * 28)
          return (
            <line
              key={`lrow-${i}`}
              x1={x1} y1={y} x2={x2} y2={y + 8}
              stroke={isLight ? '#2A6010' : '#071203'}
              strokeWidth="1.5"
              opacity="0.5"
            />
          )
        })}

        {/* ── 8. RIGHT FIELD ── */}
        <polygon
          points="870,555 1440,535 1440,900 700,900"
          fill={isLight ? 'url(#fieldGradLight)' : 'url(#fieldGradDark)'}
          style={{ transition: 'fill 0.8s ease' }}
        />
        {/* crop row texture right field */}
        {Array.from({ length: 16 }, (_, i) => {
          const y = 565 + i * 21
          const x1 = 880 + i * 18
          return (
            <line
              key={`rrow-${i}`}
              x1={x1} y1={y} x2={x1 + 550 - i * 8} y2={y + 9}
              stroke={isLight ? '#2A6010' : '#071203'}
              strokeWidth="1.5"
              opacity="0.5"
            />
          )
        })}

        {/* ── 9. DIRT PATH ── */}
        {/* Trapezoid path vanishing to horizon, slight S-curve via polygon */}
        <polygon
          points="660,560 780,560 920,900 540,900"
          fill={isLight ? '#C4956A' : '#4A3020'}
          style={{ transition: 'fill 0.8s ease' }}
        />
        {/* path center track lines */}
        <line x1="720" y1="560" x2="730" y2="900" stroke={isLight ? '#B8845A' : '#3A2418'} strokeWidth="3" opacity="0.6" />
        {/* path edge shading */}
        <polygon
          points="660,560 690,560 830,900 540,900"
          fill={isLight ? '#B8845A' : '#3A2010'}
          opacity="0.35"
        />
        {/* path pebble texture */}
        {[600,640,680,720,750,770,790,830].map((y, i) => (
          <ellipse
            key={`pebble-${i}`}
            cx={680 + (y - 560) * 0.08 + (i % 3 - 1) * 18}
            cy={y}
            rx={3 + (i % 2)}
            ry={1.5}
            fill={isLight ? '#A0704A' : '#2A1808'}
            opacity="0.5"
          />
        ))}

        {/* ── 10. OMANI FORT (x:60–310, y:350–620) ── */}
        {(() => {
          const wallC  = isLight ? '#D4B896' : '#5A4428'
          const wallD  = isLight ? '#BFA07A' : '#4A3418'
          const shadow = isLight ? 'rgba(0,0,0,0.18)' : 'rgba(0,0,0,0.5)'
          const dark   = isLight ? '#7A5A38' : '#1A0E06'
          const window = isLight ? '#4A3020' : '#0A0604'

          return (
            <g>
              {/* ─ base shadow ─ */}
              <ellipse cx="188" cy="625" rx="145" ry="12" fill={shadow} />

              {/* ─ main front wall ─ */}
              <rect x="68" y="490" width="245" height="140" fill={wallC} rx="2" />
              <rect x="68" y="490" width="245" height="8" fill={wallD} />

              {/* ─ front wall battlements (merlons) ─ */}
              {Array.from({ length: 12 }, (_, i) => (
                <rect key={`fm-${i}`} x={70 + i * 21} y={474} width={12} height={18} fill={wallC} />
              ))}

              {/* ─ left tower ─ */}
              <rect x="50" y="440" width="68" height="190" fill={wallD} rx="3" />
              <rect x="50" y="440" width="68" height="8" fill={dark} opacity="0.3" />
              {/* tower battlements left */}
              {Array.from({ length: 4 }, (_, i) => (
                <rect key={`lt-${i}`} x={52 + i * 17} y={424} width={10} height={18} fill={wallD} />
              ))}
              {/* left tower window */}
              <rect x="74" y="478" width="20" height="28" rx="10" fill={window} />
              <rect x="74" y="536" width="20" height="20" fill={window} />

              {/* ─ right tower ─ */}
              <rect x="263" y="440" width="68" height="190" fill={wallD} rx="3" />
              <rect x="263" y="440" width="68" height="8" fill={dark} opacity="0.3" />
              {/* tower battlements right */}
              {Array.from({ length: 4 }, (_, i) => (
                <rect key={`rt-${i}`} x={265 + i * 17} y={424} width={10} height={18} fill={wallD} />
              ))}
              {/* right tower window */}
              <rect x="287" y="478" width="20" height="28" rx="10" fill={window} />
              <rect x="287" y="536" width="20" height="20" fill={window} />

              {/* ─ central arched gate ─ */}
              {/* gate surround */}
              <rect x="153" y="498" width="74" height="110" rx="37" fill={wallD} />
              {/* gate arch interior */}
              <rect x="160" y="506" width="60" height="100" rx="30" fill={dark} />
              {/* gate door lines */}
              <line x1="190" y1="506" x2="190" y2="606" stroke={wallC} strokeWidth="1.5" opacity="0.4" />
              <path d="M160,546 Q190,530 220,546" stroke={wallC} strokeWidth="1.5" fill="none" opacity="0.4" />

              {/* ─ wall windows ─ */}
              <rect x="105" y="510" width="26" height="22" rx="4" fill={window} />
              <rect x="105" y="548" width="26" height="18" rx="4" fill={window} />
              <rect x="250" y="510" width="26" height="22" rx="4" fill={window} />
              <rect x="250" y="548" width="26" height="18" rx="4" fill={window} />

              {/* ─ flag pole ─ */}
              <line x1="220" y1="340" x2="220" y2="440" stroke={isLight ? '#8B7355' : '#4A3820'} strokeWidth="3" />
              {/* Omani flag: red body with white khanjar stripe, green stripe */}
              <rect x="220" y="340" width="48" height="34" fill="#DB161B" rx="1" />
              <rect x="220" y="352" width="48" height="10" fill="#FFFFFF" />
              <rect x="220" y="362" width="16" height="12" fill="#008000" />
              {/* tiny khanjar symbol suggestion */}
              <line x1="228" y1="354" x2="228" y2="362" stroke="#DB161B" strokeWidth="1.5" />
              <path d="M225,356 Q228,352 231,356" stroke="#DB161B" strokeWidth="1" fill="none" />

              {/* ─ fort base / ground line ─ */}
              <rect x="50" y="625" width="282" height="8" rx="2" fill={isLight ? '#8B7040' : '#2A1808'} opacity="0.5" />
            </g>
          )
        })()}

        {/* ── 11. BACKGROUND PALM TREES (left edge) ── */}

        {/* Left large palm 1 */}
        <g>
          {/* trunk */}
          <path d="M38,900 Q42,820 52,740 Q56,680 60,630" stroke={isLight ? '#6B4A22' : '#3A2010'} strokeWidth="18" fill="none" strokeLinecap="round" />
          {/* fronds */}
          <g className="palm-sway" style={{ transformOrigin: '60px 630px' }}>
            {[
              [-80, -60], [-55, -80], [-25, -85], [5, -82], [32, -74],
              [55, -58], [70, -35], [60, -10], [-65, -20], [-78, -42],
            ].map(([dx, dy], j) => (
              <path
                key={j}
                d={`M60,630 Q${60 + dx * 0.4},${630 + dy * 0.5} ${60 + dx},${630 + dy}`}
                stroke={isLight ? '#2D5A1B' : '#0D1F08'}
                strokeWidth={j % 2 === 0 ? 5 : 4}
                fill="none"
                strokeLinecap="round"
              />
            ))}
          </g>
        </g>

        {/* Left large palm 2 */}
        <g>
          <path d="M-10,900 Q8,800 22,720 Q30,660 38,600" stroke={isLight ? '#5A3A18' : '#2A1408'} strokeWidth="14" fill="none" strokeLinecap="round" />
          <g className="palm-sway2" style={{ transformOrigin: '38px 600px' }}>
            {[
              [-70, -55], [-45, -75], [-15, -80], [15, -78],
              [42, -65], [60, -42], [62, -15], [-60, -25],
            ].map(([dx, dy], j) => (
              <path
                key={j}
                d={`M38,600 Q${38 + dx * 0.45},${600 + dy * 0.5} ${38 + dx},${600 + dy}`}
                stroke={isLight ? '#3A6E20' : '#0F2209'}
                strokeWidth={4}
                fill="none"
                strokeLinecap="round"
              />
            ))}
          </g>
        </g>

        {/* Left small palm 3 */}
        <g>
          <path d="M120,900 Q126,855 132,810 Q136,775 140,750" stroke={isLight ? '#7A5528' : '#3A2212'} strokeWidth="11" fill="none" strokeLinecap="round" />
          <g className="palm-sway3" style={{ transformOrigin: '140px 750px' }}>
            {[[-55,-48],[-30,-62],[0,-65],[28,-60],[50,-44],[58,-20],[-52,-22]].map(([dx, dy], j) => (
              <path
                key={j}
                d={`M140,750 Q${140 + dx * 0.45},${750 + dy * 0.5} ${140 + dx},${750 + dy}`}
                stroke={isLight ? '#2D5A1B' : '#0D1F08'}
                strokeWidth="3.5"
                fill="none"
                strokeLinecap="round"
              />
            ))}
          </g>
        </g>

        {/* Right edge palm 1 */}
        <g>
          <path d="M1400,900 Q1395,820 1388,745 Q1382,680 1376,630" stroke={isLight ? '#6B4A22' : '#3A2010'} strokeWidth="16" fill="none" strokeLinecap="round" />
          <g className="palm-sway2" style={{ transformOrigin: '1376px 630px' }}>
            {[
              [80,-60],[55,-80],[25,-85],[-5,-82],[-32,-74],
              [-55,-58],[-70,-35],[-60,-10],[65,-20],[78,-42],
            ].map(([dx, dy], j) => (
              <path
                key={j}
                d={`M1376,630 Q${1376 + dx * 0.4},${630 + dy * 0.5} ${1376 + dx},${630 + dy}`}
                stroke={isLight ? '#2D5A1B' : '#0D1F08'}
                strokeWidth={j % 2 === 0 ? 5 : 4}
                fill="none"
                strokeLinecap="round"
              />
            ))}
          </g>
        </g>

        {/* Right edge palm 2 */}
        <g>
          <path d="M1440,900 Q1435,820 1428,755 Q1424,700 1420,660" stroke={isLight ? '#5A3A18' : '#2A1408'} strokeWidth="12" fill="none" strokeLinecap="round" />
          <g className="palm-sway3" style={{ transformOrigin: '1420px 660px' }}>
            {[[70,-50],[45,-68],[18,-72],[-12,-70],[-40,-60],[-58,-38],[-62,-12],[60,-22]].map(([dx, dy], j) => (
              <path
                key={j}
                d={`M1420,660 Q${1420 + dx * 0.45},${660 + dy * 0.5} ${1420 + dx},${660 + dy}`}
                stroke={isLight ? '#3A6E20' : '#0F2209'}
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
              />
            ))}
          </g>
        </g>

        {/* ── 12. SMALL HUMAN FIGURES (far distance) ── */}
        {/* Figure 1 */}
        <g opacity={isLight ? 0.65 : 0.45}>
          <circle cx="700" cy="583" r="3.5" fill={isLight ? '#4A2C18' : '#0A0604'} />
          <line  x1="700" y1="586" x2="700" y2="600" stroke={isLight ? '#4A2C18' : '#0A0604'} strokeWidth="2.5" />
          <line  x1="694" y1="590" x2="706" y2="590" stroke={isLight ? '#4A2C18' : '#0A0604'} strokeWidth="2" />
          <line  x1="700" y1="600" x2="695" y2="610" stroke={isLight ? '#4A2C18' : '#0A0604'} strokeWidth="2" />
          <line  x1="700" y1="600" x2="705" y2="610" stroke={isLight ? '#4A2C18' : '#0A0604'} strokeWidth="2" />
        </g>
        {/* Figure 2 */}
        <g opacity={isLight ? 0.55 : 0.38}>
          <circle cx="745" cy="579" r="3" fill={isLight ? '#4A2C18' : '#0A0604'} />
          <line  x1="745" y1="582" x2="745" y2="595" stroke={isLight ? '#4A2C18' : '#0A0604'} strokeWidth="2" />
          <line  x1="739" y1="586" x2="751" y2="586" stroke={isLight ? '#4A2C18' : '#0A0604'} strokeWidth="1.8" />
          <line  x1="745" y1="595" x2="741" y2="604" stroke={isLight ? '#4A2C18' : '#0A0604'} strokeWidth="1.8" />
          <line  x1="745" y1="595" x2="749" y2="604" stroke={isLight ? '#4A2C18' : '#0A0604'} strokeWidth="1.8" />
        </g>
        {/* Figure 3 smaller, farther */}
        <g opacity={isLight ? 0.45 : 0.3}>
          <circle cx="772" cy="575" r="2.5" fill={isLight ? '#4A2C18' : '#0A0604'} />
          <line  x1="772" y1="578" x2="772" y2="589" stroke={isLight ? '#4A2C18' : '#0A0604'} strokeWidth="1.8" />
          <line  x1="767" y1="582" x2="777" y2="582" stroke={isLight ? '#4A2C18' : '#0A0604'} strokeWidth="1.5" />
          <line  x1="772" y1="589" x2="769" y2="597" stroke={isLight ? '#4A2C18' : '#0A0604'} strokeWidth="1.5" />
          <line  x1="772" y1="589" x2="775" y2="597" stroke={isLight ? '#4A2C18' : '#0A0604'} strokeWidth="1.5" />
        </g>

        {/* ── 13. WATER BUFFALO (right side, x:870–1130, y:530–800) ── */}
        {(() => {
          const bodyC  = isLight ? '#1C0E06' : '#120A04'
          const bodyM  = isLight ? '#2C1810' : '#1E1008'
          const hornC  = isLight ? '#C8B090' : '#8A7060'
          const hornTip= isLight ? '#E8D8C0' : '#A09080'
          const eyeC   = isLight ? '#FFFFFF' : '#E0D0C0'
          const noseC  = isLight ? '#3A1C0C' : '#220C04'
          const hoofC  = isLight ? '#0A0604' : '#080402'

          return (
            <g className="buffalo-anim">
              {/* shadow */}
              <ellipse cx="990" cy="798" rx="130" ry="18" fill="rgba(0,0,0,0.3)" />

              {/* ── BODY ── large oval with hump */}
              {/* main body */}
              <ellipse cx="985" cy="710" rx="145" ry="78" fill={bodyM} />
              {/* hump */}
              <ellipse cx="915" cy="665" rx="55" ry="45" fill={bodyC} />
              {/* underbelly lighter */}
              <ellipse cx="985" cy="748" rx="110" ry="35" fill={isLight ? '#2C1C0E' : '#1A100A'} />

              {/* ── NECK / HEAD area ── head angled down (grazing) */}
              {/* neck */}
              <ellipse cx="862" cy="718" rx="38" ry="30" fill={bodyC} transform="rotate(-30, 862, 718)" />
              {/* head */}
              <ellipse cx="832" cy="752" rx="48" ry="36" fill={bodyM} transform="rotate(-20, 832, 752)" />
              {/* snout */}
              <ellipse cx="808" cy="775" rx="30" ry="22" fill={noseC} />
              {/* nostrils */}
              <ellipse cx="800" cy="778" rx="5" ry="4" fill={isLight ? '#0A0402' : '#060200'} />
              <ellipse cx="816" cy="778" rx="5" ry="4" fill={isLight ? '#0A0402' : '#060200'} />
              {/* mouth line */}
              <path d="M796,784 Q808,788 820,784" stroke={isLight ? '#0A0402' : '#060200'} strokeWidth="2" fill="none" />

              {/* ── EYE ── */}
              <ellipse cx="848" cy="745" rx="8" ry="7" fill={isLight ? '#3A2010' : '#1A0E06'} />
              <ellipse cx="848" cy="745" rx="5" ry="5" fill="#0A0402" />
              <circle  cx="850" cy="743" r="1.5" fill={eyeC} />

              {/* ── EAR ── */}
              <ellipse cx="875" cy="730" rx="14" ry="9" fill={bodyC} transform="rotate(-35, 875, 730)" />
              <ellipse cx="875" cy="730" rx="9" ry="5" fill={isLight ? '#4A2818' : '#2A1408'} transform="rotate(-35, 875, 730)" />

              {/* ── HORNS ── wide curved water buffalo horns */}
              {/* left horn (away from viewer) */}
              <path
                d="M870,728 Q850,700 840,680 Q832,662 848,652 Q858,648 862,660"
                stroke={hornC} strokeWidth="10" fill="none" strokeLinecap="round"
              />
              <path
                d="M870,728 Q850,700 840,680 Q832,662 848,652"
                stroke={hornTip} strokeWidth="4" fill="none" strokeLinecap="round"
                opacity="0.7"
              />
              {/* right horn */}
              <path
                d="M885,726 Q920,695 945,678 Q965,665 960,648 Q952,638 940,644"
                stroke={hornC} strokeWidth="10" fill="none" strokeLinecap="round"
              />
              <path
                d="M885,726 Q920,695 945,678 Q965,665 960,648"
                stroke={hornTip} strokeWidth="4" fill="none" strokeLinecap="round"
                opacity="0.7"
              />

              {/* ── LEGS (4 legs visible) ── */}
              {/* front-left leg */}
              <rect x="878" y="768" width="22" height="72" rx="8" fill={bodyC} />
              <rect x="876" y="830" width="26" height="12" rx="4" fill={hoofC} />
              {/* front-right leg */}
              <rect x="918" y="770" width="22" height="70" rx="8" fill={bodyM} />
              <rect x="916" y="830" width="26" height="12" rx="4" fill={hoofC} />
              {/* rear-left leg */}
              <rect x="1050" y="768" width="22" height="72" rx="8" fill={bodyC} />
              <rect x="1048" y="830" width="26" height="12" rx="4" fill={hoofC} />
              {/* rear-right leg */}
              <rect x="1090" y="770" width="22" height="70" rx="8" fill={bodyM} />
              <rect x="1088" y="830" width="26" height="12" rx="4" fill={hoofC} />

              {/* ── TAIL ── */}
              <path
                d="M1128,690 Q1155,710 1148,730 Q1142,748 1155,758"
                stroke={bodyC} strokeWidth="8" fill="none" strokeLinecap="round"
              />
              {/* tail tuft */}
              <ellipse cx="1157" cy="762" rx="8" ry="10" fill={isLight ? '#3A2010' : '#1A1008'} />

              {/* ── grazing grass in mouth ── */}
              <path d="M794,782 Q788,790 784,800" stroke={isLight ? '#3A7A20' : '#1A4010'} strokeWidth="3" fill="none" strokeLinecap="round" />
              <path d="M800,784 Q795,793 792,803" stroke={isLight ? '#4A8A28' : '#204A10'} strokeWidth="2.5" fill="none" strokeLinecap="round" />
            </g>
          )
        })()}

        {/* ── 14. FOREGROUND GRASS STRIP ── */}
        <rect x="0" y="845" width="1440" height="55" fill={isLight ? '#3A8020' : '#0D2008'} style={{ transition: 'fill 0.8s' }} />
        {/* grass blade texture */}
        {Array.from({ length: 40 }, (_, i) => {
          const x = i * 36 + (i % 3 === 0 ? 10 : 0)
          const h = 12 + (i % 4) * 5
          return (
            <path
              key={`grass-${i}`}
              d={`M${x},870 Q${x - 4},${870 - h} ${x - 2},${870 - h - 6}`}
              stroke={isLight ? '#4A9A28' : '#143008'}
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
          )
        })}
        {/* second row */}
        {Array.from({ length: 36 }, (_, i) => {
          const x = i * 40 + 18
          const h = 8 + (i % 3) * 6
          return (
            <path
              key={`grass2-${i}`}
              d={`M${x},880 Q${x + 5},${880 - h} ${x + 3},${880 - h - 5}`}
              stroke={isLight ? '#5AAA30' : '#183810'}
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
          )
        })}

        {/* ── 15. DEPTH / VIGNETTE OVERLAY ── */}
        <rect x="0" y="0" width="1440" height="900" fill="url(#vignette)" pointerEvents="none" />

        {/* Atmospheric haze at horizon */}
        <rect
          x="0" y="520" width="1440" height="60"
          fill={isLight ? '#F0D8A0' : '#0A1418'}
          opacity={isLight ? 0.25 : 0.4}
          style={{ transition: 'fill 0.8s, opacity 0.8s' }}
        />

      </svg>

      {/* ── DESKTOP text content (centered glass box) ── */}
      <div className="hero-desktop-content" style={{
        position: 'relative', zIndex: 10,
        maxWidth: '700px', textAlign: 'center',
        padding: '2.5rem 2rem',
        background: mode === 'dark' ? 'rgba(5,5,20,0.55)' : 'rgba(255,255,255,0.45)',
        borderRadius: '24px',
        border: mode === 'dark' ? '1px solid rgba(232,168,48,0.2)' : '1px solid rgba(255,255,255,0.6)',
        boxShadow: mode === 'dark' ? '0 8px 48px rgba(0,0,0,0.6)' : '0 8px 48px rgba(0,0,0,0.15)',
        transition: 'background 0.8s, border-color 0.8s, box-shadow 0.8s',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
      }}>
        <div className={`hero-badge ${lang === 'ar' ? 'ar' : ''}`}>{t.badge}</div>
        <h1 className="hero-title" style={{ textShadow: mode === 'dark' ? '0 2px 12px rgba(0,0,0,0.8)' : '0 2px 8px rgba(0,0,0,0.15)' }}>
          {t.heroTitle1} <span className="accent">{t.heroAccent}</span>
          <br />{t.heroTitle2}
        </h1>
        <p className={`hero-sub ${lang === 'ar' ? 'ar' : ''}`}>{t.heroSub}</p>
        <div className="hero-btns">
          <button className="btn-primary" onClick={scrollToProducts}>{t.heroBtnPrimary}</button>
          <button className="btn-secondary" onClick={scrollToContact}>{t.heroBtnSecondary}</button>
        </div>
      </div>

      {/* ── MOBILE text content (pinned to bottom) ── */}
      <div className="hero-mobile-content" style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        zIndex: 10, textAlign: 'center',
        padding: '2rem 1.5rem 2.5rem',
        background: 'linear-gradient(0deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.4) 70%, transparent 100%)',
      }}>
        <div className={`hero-badge ${lang === 'ar' ? 'ar' : ''}`} style={{ marginBottom: '0.6rem' }}>{t.badge}</div>
        <h1 className="hero-title" style={{
          fontSize: 'clamp(1.6rem, 7vw, 2.4rem)',
          color: '#fff',
          textShadow: '0 2px 12px rgba(0,0,0,0.8)',
          marginBottom: '0.5rem',
        }}>
          {t.heroTitle1} <span className="accent">{t.heroAccent}</span>
          <br />{t.heroTitle2}
        </h1>
        <div className="hero-btns" style={{ marginTop: '1rem' }}>
          <button className="btn-primary" onClick={scrollToProducts}>{t.heroBtnPrimary}</button>
          <button className="btn-secondary" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.6)' }} onClick={scrollToContact}>{t.heroBtnSecondary}</button>
        </div>
      </div>

    </section>
  )
}
