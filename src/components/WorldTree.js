import { useEffect, useRef } from 'react'

const branches = [
  { id: 'T-37A', angle:   0, length: 150, nexus: false, label: 'T-37A', year: '1204' },
  { id: 'T-12C', angle:  11, length: 140, nexus: false, label: 'T-12C', year: '1241' },
  { id: 'T-09B', angle:  23, length: 155, nexus: true,  label: 'T-09B', year: '1265' },
  { id: 'T-88X', angle:  34, length: 145, nexus: false, label: 'T-88X', year: '1286' },
  { id: 'T-44F', angle:  45, length: 150, nexus: false, label: 'T-44F', year: '1300' },
  { id: 'T-21K', angle:  56, length: 140, nexus: true,  label: 'T-21K', year: '1333' },
  { id: 'T-66D', angle:  68, length: 155, nexus: false, label: 'T-66D', year: '1348' },
  { id: 'T-53R', angle:  79, length: 145, nexus: false, label: 'T-53R', year: '1351' },
  { id: 'T-02V', angle:  90, length: 150, nexus: true,  label: 'T-02V', year: '1372' },
  { id: 'T-17M', angle: 101, length: 140, nexus: false, label: 'T-17M', year: '1400' },
  { id: 'T-29Z', angle: 113, length: 155, nexus: false, label: 'T-29Z', year: '1407' },
  { id: 'T-41P', angle: 124, length: 145, nexus: true,  label: 'T-41P', year: '1433' },
  { id: 'T-55Q', angle: 135, length: 150, nexus: false, label: 'T-55Q', year: '1450' },
  { id: 'T-63W', angle: 146, length: 140, nexus: false, label: 'T-63W', year: '1491' },
  { id: 'T-71H', angle: 158, length: 155, nexus: true,  label: 'T-71H', year: '1503' },
  { id: 'T-84N', angle: 169, length: 145, nexus: false, label: 'T-84N', year: '1523' },
  { id: 'T-91S', angle: 180, length: 150, nexus: false, label: 'T-91S', year: '1547' },
  { id: 'T-06E', angle: 191, length: 140, nexus: true,  label: 'T-06E', year: '1564' },
  { id: 'T-13J', angle: 203, length: 155, nexus: false, label: 'T-13J', year: '1570' },
  { id: 'T-28L', angle: 214, length: 145, nexus: false, label: 'T-28L', year: '1586' },
  { id: 'T-35U', angle: 225, length: 150, nexus: true,  label: 'T-35U', year: '1600' },
  { id: 'T-49G', angle: 236, length: 140, nexus: false, label: 'T-49G', year: '1642' },
  { id: 'T-57T', angle: 248, length: 155, nexus: false, label: 'T-57T', year: '1677' },
  { id: 'T-62Y', angle: 259, length: 145, nexus: true,  label: 'T-62Y', year: '1700' },
  { id: 'T-78B', angle: 270, length: 150, nexus: false, label: 'T-78B', year: '1777' },
  { id: 'T-83I', angle: 281, length: 140, nexus: false, label: 'T-83I', year: '1815' },
  { id: 'T-95O', angle: 293, length: 155, nexus: true,  label: 'T-95O', year: '1907' },
  { id: 'T-14A', angle: 304, length: 145, nexus: false, label: 'T-14A', year: '1938' },
  { id: 'T-22X', angle: 315, length: 150, nexus: false, label: 'T-22X', year: '1939' },
  { id: 'T-31F', angle: 326, length: 140, nexus: true,  label: 'T-31F', year: '2054' },
  { id: 'T-46C', angle: 338, length: 155, nexus: false, label: 'T-46C', year: '2157' },
  { id: 'T-59Q', angle: 349, length: 145, nexus: true,  label: 'T-59Q', year: '2397' },
]

const toRad = (deg) => (deg * Math.PI) / 180

const getBranchPath = (cx, cy, angle, length, scale) => {
  const l = length * scale
  const rad = toRad(angle)
  const midLen = l * 0.55
  const mx = cx + Math.cos(rad) * midLen
  const my = cy + Math.sin(rad) * midLen
  const ex = cx + Math.cos(rad) * l
  const ey = cy + Math.sin(rad) * l
  const spread = 22
  const sub1x = ex + Math.cos(toRad(angle - spread)) * 44 * scale
  const sub1y = ey + Math.sin(toRad(angle - spread)) * 44 * scale
  const sub2x = ex + Math.cos(toRad(angle + spread)) * 44 * scale
  const sub2y = ey + Math.sin(toRad(angle + spread)) * 44 * scale
  const tiny1x = sub1x + Math.cos(toRad(angle - spread * 0.5)) * 24 * scale
  const tiny1y = sub1y + Math.sin(toRad(angle - spread * 0.5)) * 24 * scale
  const tiny2x = sub2x + Math.cos(toRad(angle + spread * 0.5)) * 24 * scale
  const tiny2y = sub2y + Math.sin(toRad(angle + spread * 0.5)) * 24 * scale
  return { mx, my, ex, ey, sub1x, sub1y, sub2x, sub2y, tiny1x, tiny1y, tiny2x, tiny2y }
}

const getLabelPos = (cx, cy, angle, length, scale) => {
  const rad = toRad(angle)
  const dist = length * scale + 28 * scale
  return {
    x: cx + Math.cos(rad) * dist,
    y: cy + Math.sin(rad) * dist,
  }
}

const WorldTree = () => {
  const svgRef = useRef(null)
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 500
  const scale  = isMobile ? 0.52 : 1
  const size   = isMobile ? 380 : 680
  const cx     = size / 2
  const cy     = size / 2

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

  const lokiOffset = isMobile ? -50 : 0

  return (
    <div style={{ width: '100%', background: 'transparent', overflowX: 'hidden', height: 'auto' }}>
      <svg
        ref={svgRef}
        viewBox={`0 0 ${size} ${size}`}
        width="100%"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: 'block', maxWidth: '100vw' }}
      >
        <defs>
          <radialGradient id="st-core" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#A8FF78" stopOpacity="1"/>
            <stop offset="40%"  stopColor="#4CAF50" stopOpacity="0.7"/>
            <stop offset="100%" stopColor="#1B5E20" stopOpacity="0"/>
          </radialGradient>
          <radialGradient id="st-bg" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#020A02"/>
            <stop offset="100%" stopColor="#000000"/>
          </radialGradient>
          <style>{`
            @keyframes st-pulse {
              0%,100% { r: ${isMobile ? 12 : 20}; opacity: 0.9; }
              50%      { r: ${isMobile ? 16 : 26}; opacity: 0.5; }
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
          [30,22],[75,45],[290,30],[310,80],[15,105],
          [320,155],[50,280],[280,305],[170,17],[225,322],
          [100,315],[45,175],[325,245],[210,50],[65,240],
          [250,100],[35,210],[300,200],[140,25],[190,315],
        ].map(([x, y], i) => (
          <circle
            key={i} className="st-star"
            cx={x * (size / 380)} cy={y * (size / 380)}
            r={0.4 + (i % 3) * 0.25} fill="#fff" opacity="0.5"
            style={{ animationDelay: `${(i * 0.3) % 3}s` }}
          />
        ))}

        <circle cx={cx} cy={cy} r={60  * scale} fill="none" stroke="#2E7D32" strokeWidth="0.5" strokeDasharray="3 8"  opacity="0.4" className="st-orbit-ring"/>
        <circle cx={cx} cy={cy} r={110 * scale} fill="none" stroke="#1B5E20" strokeWidth="0.4" strokeDasharray="2 10" opacity="0.25" className="st-orbit-ring" style={{ animationDirection: 'reverse' }}/>
        <circle cx={cx} cy={cy} r={165 * scale} fill="none" stroke="#1B5E20" strokeWidth="0.3" strokeDasharray="1 12" opacity="0.15" className="st-orbit-ring"/>

        {branches.map((b) => {
          const { mx, my, ex, ey, sub1x, sub1y, sub2x, sub2y, tiny1x, tiny1y, tiny2x, tiny2y } = getBranchPath(cx, cy, b.angle, b.length, scale)
          const labelPos  = getLabelPos(cx, cy, b.angle, b.length, scale)
          const color     = b.nexus ? '#E53935' : '#4CAF50'
          const subColor  = b.nexus ? '#FF4D6D' : '#2E7D32'
          const leafColor = b.nexus ? '#FF8A80' : '#81C784'
          const anchor    = labelPos.x > cx + 10 ? 'start' : labelPos.x < cx - 10 ? 'end' : 'middle'
          const fs1       = isMobile ? 6 : 8
          const fs2       = isMobile ? 5 : 7

          return (
            <g key={b.id}>
              <path className="branch-line" d={`M${cx} ${cy} Q${mx} ${my} ${ex} ${ey}`} fill="none" stroke={color} strokeWidth={isMobile ? 1 : 1.5} strokeLinecap="round"/>
              <path d={`M${ex} ${ey} L${sub1x} ${sub1y}`} fill="none" stroke={subColor} strokeWidth={isMobile ? 0.7 : 1} strokeDasharray="4 4" opacity="0.75"/>
              <path d={`M${ex} ${ey} L${sub2x} ${sub2y}`} fill="none" stroke={subColor} strokeWidth={isMobile ? 0.7 : 1} strokeDasharray="4 4" opacity="0.75"/>
              {!isMobile && <>
                <path d={`M${sub1x} ${sub1y} L${tiny1x} ${tiny1y}`} fill="none" stroke={leafColor} strokeWidth="0.7" strokeDasharray="3 5" opacity="0.5"/>
                <path d={`M${sub2x} ${sub2y} L${tiny2x} ${tiny2y}`} fill="none" stroke={leafColor} strokeWidth="0.7" strokeDasharray="3 5" opacity="0.5"/>
                <circle cx={tiny1x} cy={tiny1y} r="1.8" fill={leafColor} opacity="0.6" className="st-tip" style={{ animationDelay: `${b.angle * 0.012}s` }}/>
                <circle cx={tiny2x} cy={tiny2y} r="1.8" fill={leafColor} opacity="0.6" className="st-tip" style={{ animationDelay: `${b.angle * 0.016}s` }}/>
              </>}
              <circle cx={sub1x} cy={sub1y} r={isMobile ? 1.5 : 2.5} fill={subColor} opacity="0.75" className="st-tip" style={{ animationDelay: `${b.angle * 0.01}s` }}/>
              <circle cx={sub2x} cy={sub2y} r={isMobile ? 1.5 : 2.5} fill={subColor} opacity="0.75" className="st-tip" style={{ animationDelay: `${b.angle * 0.015}s` }}/>
              <circle cx={ex}    cy={ey}    r={isMobile ? 2.5 : 4}   fill={color}    opacity="0.9"  className="st-tip" style={{ animationDelay: `${b.angle * 0.008}s` }}/>
              <text x={labelPos.x} y={labelPos.y - 4} textAnchor={anchor} fill={color}    fontSize={fs1} fontFamily="'Share Tech Mono', monospace" fontWeight="600" opacity="0.85">{b.label}</text>
              <text x={labelPos.x} y={labelPos.y + 5} textAnchor={anchor} fill="#4A7A4A" fontSize={fs2} fontFamily="'Share Tech Mono', monospace" opacity="0.65">{b.year}</text>
            </g>
          )
        })}

        <circle cx={cx} cy={cy} r={42 * scale} fill="url(#st-core)" opacity="0.5"/>

        {/* Loki */}
        <g transform={`translate(${cx - 340 + lokiOffset} ${cy - 340})`}>
          <rect x="320" y="358" width="40" height="5"  rx="2" fill="#1B5E20" opacity="0.8" transform={`scale(${scale})`}/>
          <rect x="318" y="344" width="4"  height="18" rx="2" fill="#145214" opacity="0.6" transform={`scale(${scale})`}/>
          <rect x="358" y="344" width="4"  height="18" rx="2" fill="#145214" opacity="0.6" transform={`scale(${scale})`}/>
        </g>
        <ellipse cx={cx} cy={cy + 8  * scale} rx={10 * scale} ry={13 * scale} fill="#2E5F3A" opacity="0.95"/>
        <circle  cx={cx} cy={cy - 12 * scale} r={9 * scale}  fill="#C8A882" opacity="0.95"/>
        <path d={`M${cx - 8 * scale} ${cy - 17 * scale} C${cx - 10 * scale} ${cy - 25 * scale}, ${cx - 13 * scale} ${cy - 32 * scale}, ${cx - 15 * scale} ${cy - 40 * scale}`} fill="none" stroke="#4CAF50" strokeWidth="1.5" strokeLinecap="round"/>
        <path d={`M${cx + 8 * scale} ${cy - 17 * scale} C${cx + 10 * scale} ${cy - 25 * scale}, ${cx + 13 * scale} ${cy - 32 * scale}, ${cx + 15 * scale} ${cy - 40 * scale}`} fill="none" stroke="#4CAF50" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx={cx - 15 * scale} cy={cy - 41 * scale} r={2.5 * scale} fill="#4CAF50"/>
        <circle cx={cx + 15 * scale} cy={cy - 41 * scale} r={2.5 * scale} fill="#4CAF50"/>
        <path d={`M${cx - 10 * scale} ${cy + 3 * scale} C${cx - 30 * scale} ${cy - 5 * scale}, ${cx - 52 * scale} ${cy - 12 * scale}, ${cx - 75 * scale} ${cy - 18 * scale}`} fill="none" stroke="#2E5F3A" strokeWidth={4 * scale} strokeLinecap="round" opacity="0.9"/>
        <path d={`M${cx + 10 * scale} ${cy + 3 * scale} C${cx + 30 * scale} ${cy - 5 * scale}, ${cx + 52 * scale} ${cy - 12 * scale}, ${cx + 75 * scale} ${cy - 18 * scale}`} fill="none" stroke="#2E5F3A" strokeWidth={4 * scale} strokeLinecap="round" opacity="0.9"/>
        <circle cx={cx - 77 * scale} cy={cy - 18 * scale} r={5 * scale} fill="#C8A882" opacity="0.9"/>
        <circle cx={cx + 77 * scale} cy={cy - 18 * scale} r={5 * scale} fill="#C8A882" opacity="0.9"/>
        <circle cx={cx} cy={cy} r={20 * scale} fill="#A8FF78" opacity="0.1" className="st-core-pulse"/>

        {/* Footer */}
        <text x={cx} y={size - 58} textAnchor="middle" fill="#4CAF50" fontSize={isMobile ? 7  : 10} fontFamily="'Share Tech Mono', monospace" letterSpacing="3" opacity="0.7">THE SACRED TIMELINE</text>
        <text x={cx} y={size - 44} textAnchor="middle" fill="#2E5A2E" fontSize={isMobile ? 6  : 9}  fontFamily="'Share Tech Mono', monospace" letterSpacing="2" opacity="0.6">CITADEL AT THE END OF TIME</text>
        <text x={cx} y={size - 26} textAnchor="middle" fill="#1A3A1A" fontSize={isMobile ? 6  : 9}  fontFamily="'Rajdhani', sans-serif" fontWeight="500" letterSpacing="4" opacity="0.7">FOR ALL TIME. ALWAYS.</text>

        {/* Legend */}
        <circle cx={isMobile ? 14 : 48} cy={size - 38} r={isMobile ? 3 : 4} fill="#4CAF50"/>
        <text x={isMobile ? 20 : 58} y={size - 34} fill="#4A7A4A" fontSize={isMobile ? 6 : 9} fontFamily="'Share Tech Mono', monospace">BRANCH</text>
        <circle cx={isMobile ? 14 : 48} cy={size - 24} r={isMobile ? 3 : 4} fill="#E53935"/>
        <text x={isMobile ? 20 : 58} y={size - 20} fill="#4A7A4A" fontSize={isMobile ? 6 : 9} fontFamily="'Share Tech Mono', monospace">NEXUS EVENT</text>
      </svg>
    </div>
  )
}

export default WorldTree