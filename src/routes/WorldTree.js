import { useEffect, useRef } from 'react'

const branches = [
  { id: 'T-37A', angle:   0,   length: 150, nexus: false, label: 'T-37A', year: '1204' },
  { id: 'T-12C', angle:  11,   length: 140, nexus: false, label: 'T-12C', year: '1241' },
  { id: 'T-09B', angle:  23,   length: 155, nexus: true,  label: 'T-09B', year: '1265' },
  { id: 'T-88X', angle:  34,   length: 145, nexus: false, label: 'T-88X', year: '1286' },
  { id: 'T-44F', angle:  45,   length: 150, nexus: false, label: 'T-44F', year: '1300' },
  { id: 'T-21K', angle:  56,   length: 140, nexus: true,  label: 'T-21K', year: '1333' },
  { id: 'T-66D', angle:  68,   length: 155, nexus: false, label: 'T-66D', year: '1348' },
  { id: 'T-53R', angle:  79,   length: 145, nexus: false, label: 'T-53R', year: '1351' },
  { id: 'T-02V', angle:  90,   length: 150, nexus: true,  label: 'T-02V', year: '1372' },
  { id: 'T-17M', angle: 101,   length: 140, nexus: false, label: 'T-17M', year: '1400' },
  { id: 'T-29Z', angle: 113,   length: 155, nexus: false, label: 'T-29Z', year: '1407' },
  { id: 'T-41P', angle: 124,   length: 145, nexus: true,  label: 'T-41P', year: '1433' },
  { id: 'T-55Q', angle: 135,   length: 150, nexus: false, label: 'T-55Q', year: '1450' },
  { id: 'T-63W', angle: 146,   length: 140, nexus: false, label: 'T-63W', year: '1491' },
  { id: 'T-71H', angle: 158,   length: 155, nexus: true,  label: 'T-71H', year: '1503' },
  { id: 'T-84N', angle: 169,   length: 145, nexus: false, label: 'T-84N', year: '1523' },
  { id: 'T-91S', angle: 180,   length: 150, nexus: false, label: 'T-91S', year: '1547' },
  { id: 'T-06E', angle: 191,   length: 140, nexus: true,  label: 'T-06E', year: '1564' },
  { id: 'T-13J', angle: 203,   length: 155, nexus: false, label: 'T-13J', year: '1570' },
  { id: 'T-28L', angle: 214,   length: 145, nexus: false, label: 'T-28L', year: '1586' },
  { id: 'T-35U', angle: 225,   length: 150, nexus: true,  label: 'T-35U', year: '1600' },
  { id: 'T-49G', angle: 236,   length: 140, nexus: false, label: 'T-49G', year: '1642' },
  { id: 'T-57T', angle: 248,   length: 155, nexus: false, label: 'T-57T', year: '1677' },
  { id: 'T-62Y', angle: 259,   length: 145, nexus: true,  label: 'T-62Y', year: '1700' },
  { id: 'T-78B', angle: 270,   length: 150, nexus: false, label: 'T-78B', year: '1777' },
  { id: 'T-83I', angle: 281,   length: 140, nexus: false, label: 'T-83I', year: '1815' },
  { id: 'T-95O', angle: 293,   length: 155, nexus: true,  label: 'T-95O', year: '1907' },
  { id: 'T-14A', angle: 304,   length: 145, nexus: false, label: 'T-14A', year: '1938' },
  { id: 'T-22X', angle: 315,   length: 150, nexus: false, label: 'T-22X', year: '1939' },
  { id: 'T-31F', angle: 326,   length: 140, nexus: true,  label: 'T-31F', year: '2054' },
  { id: 'T-46C', angle: 338,   length: 155, nexus: false, label: 'T-46C', year: '2157' },
  { id: 'T-59Q', angle: 349,   length: 145, nexus: true,  label: 'T-59Q', year: '2397' },
]

const toRad = (deg) => (deg * Math.PI) / 180

const getBranchPath = (cx, cy, angle, length) => {
  const rad = toRad(angle)
  const midLen = length * 0.55
  const mx = cx + Math.cos(rad) * midLen
  const my = cy + Math.sin(rad) * midLen
  const ex = cx + Math.cos(rad) * length
  const ey = cy + Math.sin(rad) * length
  const spread = 22
  const spreadRad1 = toRad(angle - spread)
  const spreadRad2 = toRad(angle + spread)
  const sub1x = ex + Math.cos(spreadRad1) * 44
  const sub1y = ey + Math.sin(spreadRad1) * 44
  const sub2x = ex + Math.cos(spreadRad2) * 44
  const sub2y = ey + Math.sin(spreadRad2) * 44
  const tinyRad1 = toRad(angle - spread * 0.5)
  const tinyRad2 = toRad(angle + spread * 0.5)
  const tiny1x = sub1x + Math.cos(tinyRad1) * 24
  const tiny1y = sub1y + Math.sin(tinyRad1) * 24
  const tiny2x = sub2x + Math.cos(tinyRad2) * 24
  const tiny2y = sub2y + Math.sin(tinyRad2) * 24
  return { mx, my, ex, ey, sub1x, sub1y, sub2x, sub2y, tiny1x, tiny1y, tiny2x, tiny2y }
}

const getLabelPos = (cx, cy, angle, length) => {
  const rad = toRad(angle)
  const dist = length + 30
  return {
    x: cx + Math.cos(rad) * dist,
    y: cy + Math.sin(rad) * dist,
  }
}

const WorldTree = () => {
  const svgRef = useRef(null)
  const cx = 340
  const cy = 340
  const size = 680

  useEffect(() => {
    const paths = svgRef.current?.querySelectorAll('.branch-line')
    paths?.forEach((p, i) => {
      const len = p.getTotalLength?.() || 200
      p.style.strokeDasharray = len
      p.style.strokeDashoffset = len
      p.style.transition = `stroke-dashoffset ${0.6 + i * 0.06}s ease ${i * 0.05}s`
      requestAnimationFrame(() => { p.style.strokeDashoffset = 0 })
    })
  }, [])

  return (
    <div style={{ width: '100%', background: 'transparent' }}>
      <svg
        ref={svgRef}
        viewBox={`0 0 ${size} ${size}`}
        width="100%"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: 'block' }}
      >
        <defs>
          <radialGradient id="st-core" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#A8FF78" stopOpacity="1"/>
            <stop offset="40%"  stopColor="#4CAF50" stopOpacity="0.7"/>
            <stop offset="100%" stopColor="#1B5E20" stopOpacity="0"/>
          </radialGradient>
          <radialGradient id="st-bg" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#020A02"/>
            <stop offset="100%" stopColor="#000000"/>
          </radialGradient>
          <style>{`
            @keyframes st-pulse {
              0%,100% { r: 20; opacity: 0.9; }
              50%      { r: 26; opacity: 0.5; }
            }
            @keyframes st-tip-pulse {
              0%,100% { opacity: 1; }
              50%      { opacity: 0.3; }
            }
            @keyframes st-orbit {
              from { stroke-dashoffset: 0; }
              to   { stroke-dashoffset: -400; }
            }
            @keyframes st-twinkle {
              0%,100% { opacity: 0.7; }
              50%      { opacity: 0.1; }
            }
            .st-core-pulse { animation: st-pulse 2.5s ease-in-out infinite; }
            .st-tip        { animation: st-tip-pulse 2s ease-in-out infinite; }
            .st-orbit-ring { animation: st-orbit 8s linear infinite; }
            .st-star       { animation: st-twinkle 3s ease-in-out infinite; }
          `}</style>
        </defs>

        <rect x="0" y="0" width={size} height={size} fill="url(#st-bg)" rx="8"/>

        {[
          [60,45],[150,90],[580,60],[620,160],[30,210],
          [640,310],[100,560],[560,610],[340,35],[450,645],
          [200,630],[90,350],[650,490],[420,100],[130,480],
          [500,200],[70,420],[600,400],[280,50],[380,630],
          [520,520],[170,160],[600,550],[240,600],[480,30],
        ].map(([x, y], i) => (
          <circle key={i} className="st-star" cx={x} cy={y}
            r={0.5 + (i % 3) * 0.3} fill="#fff" opacity="0.5"
            style={{ animationDelay: `${(i * 0.3) % 3}s` }}
          />
        ))}

        <circle cx={cx} cy={cy} r="60"  fill="none" stroke="#2E7D32" strokeWidth="0.5" strokeDasharray="3 8"  opacity="0.4" className="st-orbit-ring"/>
        <circle cx={cx} cy={cy} r="110" fill="none" stroke="#1B5E20" strokeWidth="0.4" strokeDasharray="2 10" opacity="0.25" className="st-orbit-ring" style={{ animationDirection: 'reverse' }}/>
        <circle cx={cx} cy={cy} r="165" fill="none" stroke="#1B5E20" strokeWidth="0.3" strokeDasharray="1 12" opacity="0.15" className="st-orbit-ring"/>

        {branches.map((b) => {
          const { mx, my, ex, ey, sub1x, sub1y, sub2x, sub2y, tiny1x, tiny1y, tiny2x, tiny2y } = getBranchPath(cx, cy, b.angle, b.length)
          const labelPos = getLabelPos(cx, cy, b.angle, b.length)
          const color     = b.nexus ? '#E53935' : '#4CAF50'
          const subColor  = b.nexus ? '#FF4D6D' : '#2E7D32'
          const leafColor = b.nexus ? '#FF8A80' : '#81C784'
          const anchor =
            labelPos.x > cx + 20 ? 'start' :
            labelPos.x < cx - 20 ? 'end' : 'middle'

          return (
            <g key={b.id}>
              <path
                className="branch-line"
                d={`M${cx} ${cy} Q${mx} ${my} ${ex} ${ey}`}
                fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round"
              />
              <path d={`M${ex} ${ey} L${sub1x} ${sub1y}`} fill="none" stroke={subColor} strokeWidth="1" strokeDasharray="4 4" opacity="0.75"/>
              <path d={`M${ex} ${ey} L${sub2x} ${sub2y}`} fill="none" stroke={subColor} strokeWidth="1" strokeDasharray="4 4" opacity="0.75"/>
              <path d={`M${sub1x} ${sub1y} L${tiny1x} ${tiny1y}`} fill="none" stroke={leafColor} strokeWidth="0.7" strokeDasharray="3 5" opacity="0.5"/>
              <path d={`M${sub2x} ${sub2y} L${tiny2x} ${tiny2y}`} fill="none" stroke={leafColor} strokeWidth="0.7" strokeDasharray="3 5" opacity="0.5"/>
              <circle cx={tiny1x} cy={tiny1y} r="1.8" fill={leafColor} opacity="0.6" className="st-tip" style={{ animationDelay: `${b.angle * 0.012}s` }}/>
              <circle cx={tiny2x} cy={tiny2y} r="1.8" fill={leafColor} opacity="0.6" className="st-tip" style={{ animationDelay: `${b.angle * 0.016}s` }}/>
              <circle cx={sub1x} cy={sub1y} r="2.5" fill={subColor} opacity="0.75" className="st-tip" style={{ animationDelay: `${b.angle * 0.01}s` }}/>
              <circle cx={sub2x} cy={sub2y} r="2.5" fill={subColor} opacity="0.75" className="st-tip" style={{ animationDelay: `${b.angle * 0.015}s` }}/>
              <circle cx={ex} cy={ey} r="4" fill={color} opacity="0.9" className="st-tip" style={{ animationDelay: `${b.angle * 0.008}s` }}/>
              <text x={labelPos.x} y={labelPos.y - 5} textAnchor={anchor} fill={color} fontSize="8" fontFamily="'Share Tech Mono', monospace" fontWeight="600" opacity="0.85">{b.label}</text>
              <text x={labelPos.x} y={labelPos.y + 6} textAnchor={anchor} fill="#4A7A4A" fontSize="7" fontFamily="'Share Tech Mono', monospace" opacity="0.65">{b.year}</text>
            </g>
          )
        })}

        <circle cx={cx} cy={cy} r="42" fill="url(#st-core)" opacity="0.5"/>

        <rect x="320" y="358" width="40" height="5" rx="2" fill="#1B5E20" opacity="0.8"/>
        <rect x="318" y="344" width="4" height="18" rx="2" fill="#145214" opacity="0.6"/>
        <rect x="358" y="344" width="4" height="18" rx="2" fill="#145214" opacity="0.6"/>
        <ellipse cx={cx} cy="348" rx="10" ry="13" fill="#2E5F3A" opacity="0.95"/>
        <circle cx={cx} cy="328" r="9" fill="#C8A882" opacity="0.95"/>
        <path d="M332 323 C330 315, 327 308, 325 300" fill="none" stroke="#4CAF50" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M348 323 C350 315, 353 308, 355 300" fill="none" stroke="#4CAF50" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="325" cy="299" r="2.5" fill="#4CAF50"/>
        <circle cx="355" cy="299" r="2.5" fill="#4CAF50"/>
        <path d="M330 343 C310 335, 288 328, 265 322" fill="none" stroke="#2E5F3A" strokeWidth="4" strokeLinecap="round" opacity="0.9"/>
        <path d="M350 343 C370 335, 392 328, 415 322" fill="none" stroke="#2E5F3A" strokeWidth="4" strokeLinecap="round" opacity="0.9"/>
        <circle cx="263" cy="322" r="5" fill="#C8A882" opacity="0.9"/>
        <circle cx="417" cy="322" r="5" fill="#C8A882" opacity="0.9"/>
        <circle cx={cx} cy={cy} r="20" fill="#A8FF78" opacity="0.1" className="st-core-pulse"/>

        <text x={cx} y="622" textAnchor="middle" fill="#4CAF50" fontSize="10" fontFamily="'Share Tech Mono', monospace" letterSpacing="3" opacity="0.7">THE SACRED TIMELINE</text>
        <text x={cx} y="637" textAnchor="middle" fill="#2E5A2E" fontSize="9"  fontFamily="'Share Tech Mono', monospace" letterSpacing="2" opacity="0.6">CITADEL AT THE END OF TIME</text>
        <text x={cx} y="656" textAnchor="middle" fill="#1A3A1A" fontSize="9"  fontFamily="'Rajdhani', sans-serif" fontWeight="500" letterSpacing="4" opacity="0.7">FOR ALL TIME. ALWAYS.</text>

        <circle cx="48" cy="642" r="4" fill="#4CAF50"/>
        <text x="58" y="646" fill="#4A7A4A" fontSize="9" fontFamily="'Share Tech Mono', monospace">BRANCH</text>
        <circle cx="48" cy="658" r="4" fill="#E53935"/>
        <text x="58" y="662" fill="#4A7A4A" fontSize="9" fontFamily="'Share Tech Mono', monospace">NEXUS EVENT</text>
      </svg>
    </div>
  )
}

export default WorldTree