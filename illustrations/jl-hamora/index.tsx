import { Bar, Chart, Stage, Text, Window } from '../../kit'
import '../jl-look/hamora.css'
import './hamora.css'

// hamora-on (PortfolioOS) as a feature card (560 × 400; 358 × 300 narrow).
// Gold: corner-chip. The dashboard is pinned top-left and runs off the
// bottom; a market-status chip hangs off its top-right corner, half outside,
// one live fact about the whole product. The look is the product's own
// (pwmora.com): cream, ink borders, a hard blue offset shadow, the total in
// hot pink. A named real product gets realistic fidelity: its own stats and
// words from its landing page; the holdings list is where the bars live, and
// the crop falls on it.

// Portfolio value by week
const VALUE = [62, 64, 63, 67, 70, 69, 74, 76, 75, 80, 84, 88]

const STATS = [
  { label: 'Hari ini', value: '+0,66%', up: true },
  { label: 'Utang', value: 'Rp42,6 jt' },
  { label: 'Sisa napas', value: '14 bln' },
]

export default function Hamora() {
  return (
    <Stage width={560} height={400} compact={{ below: 560, width: 358, height: 300 }} fidelity="realistic" className="look-hamora jl-hamora">
      {(_s, _r, layout) => {
        const wide = layout === 'wide'
        return (
          <>
            <Window url="pwmora.com" urlShape="pill" className="hm-win">
              <div className="hm-body">
                <div className="hm-top">
                  <span className="hm-logo">hamora-on</span>
                  <Bar w={24} h={24} r={12} tone={2} />
                </div>

                <div className="hm-total">
                  <Text className="hm-label">Total nilai</Text>
                  <Text className="hm-value">Rp487.250.000</Text>
                  <Text className="hm-sub">Saham IDR + US, dalam Rupiah</Text>
                </div>

                <div className="hm-stats">
                  {(wide ? STATS : STATS.slice(0, 2)).map((s) => (
                    <div key={s.label} className="hm-stat">
                      <Text className="hm-label">{s.label}</Text>
                      <Text className={`hm-stat__value${s.up ? ' hm-up' : ''}`}>{s.value}</Text>
                    </div>
                  ))}
                </div>

                {wide && <Chart data={VALUE} width={360} height={48} className="hm-chart" />}

                <div className="hm-list">
                  {[70, 54, 62].map((w, i) => (
                    <div key={i} className="hm-row">
                      {wide && i === 0 ? <span className="hm-tick">BBCA</span> : <Bar w={30} h={8} r={3} tone={3} shrink={false} />}
                      <Bar w={w} h={6} tone={2} />
                      <Bar w={36} h={6} tone={2} style={{ marginLeft: 'auto' }} />
                    </div>
                  ))}
                </div>
              </div>
            </Window>

            {/* The chip: centered on the window's corner, a level above; a dot per market */}
            <div className="hm-chip">
              <span className="hm-dot hm-dot--open" />
              <Text className="hm-chip__text">IDX buka</Text>
              {wide && (
                <>
                  <span className="hm-dot" />
                  <Text className="hm-chip__text">NYSE tutup</Text>
                </>
              )}
            </div>
          </>
        )
      }}
    </Stage>
  )
}
