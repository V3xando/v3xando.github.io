import { Bar, Chart, Stage, Text, Window } from '../../kit'
import '../jl-look/hamora.css'
import './hamora.css'

// hamora-on (PortfolioOS) as a feature card (560 × 400; 358 × 280 narrow).
// Gold: corner-chip. The dashboard is pinned top-left and runs off the
// bottom; a market-status chip hangs off its top-right corner, half outside,
// one live fact about the whole product. The look is the product's own
// (pwmora.com): cream, ink borders, a hard blue offset shadow, the total in
// hot pink. Real words: the wordmark, the total's label and value, today's
// change, the chip. Holdings and the other two stats are bars.

// Portfolio value by week
const VALUE = [62, 64, 63, 67, 70, 69, 74, 76, 75, 80, 84, 88]

const HOLDINGS = [
  { tick: 'BBCA', name: 70, qty: 36 },
  { tick: 'VOO', name: 54, qty: 40 },
  { tick: 'TLKM', name: 62, qty: 32 },
  { tick: 'AAPL', name: 48, qty: 38 },
]

export default function Hamora() {
  return (
    <Stage width={560} height={400} compact={{ below: 560, width: 358, height: 280 }} className="look-hamora jl-hamora">
      {(_s, _r, layout) => {
        const wide = layout === 'wide'
        return (
          <>
            <Window url="pwmora.com" urlShape="pill" className="hm-win">
              <div className="hm-body">
                <div className="hm-top">
                  <span className="hm-logo">hamora-on</span>
                  <Bar w={28} h={28} r={14} tone={2} />
                </div>

                <div className="hm-total">
                  <Text className="hm-label">Total nilai</Text>
                  <Text className="hm-value">Rp487.250.000</Text>
                  <Text className="hm-sub" filler>Saham IDR + US, dalam Rupiah</Text>
                </div>

                <div className="hm-stats">
                  <div className="hm-stat">
                    <Text className="hm-label">Hari ini</Text>
                    <Text className="hm-stat__value hm-up">+0,66%</Text>
                  </div>
                  <div className="hm-stat hm-stat--bars">
                    <Bar w={38} h={6} tone={3} />
                    <Bar w={56} h={10} r={3} tone={4} />
                  </div>
                  {wide && (
                    <div className="hm-stat hm-stat--bars">
                      <Bar w={46} h={6} tone={3} />
                      <Bar w={40} h={10} r={3} tone={4} />
                    </div>
                  )}
                </div>

                {wide && <Chart data={VALUE} width={360} height={64} className="hm-chart" />}

                <div className="hm-list">
                  {HOLDINGS.map((h) => (
                    <div key={h.tick} className="hm-row">
                      <span className="hm-tick">{h.tick}</span>
                      <Bar w={h.name} h={6} tone={3} />
                      <Bar w={h.qty} h={6} tone={2} style={{ marginLeft: 'auto' }} />
                    </div>
                  ))}
                </div>
              </div>
            </Window>

            {/* The chip: centered on the window's corner, a level above */}
            <div className="hm-chip">
              <span className="hm-dot hm-dot--open" />
              <Text className="hm-chip__text">{wide ? 'IDX buka · NYSE tutup' : 'IDX buka'}</Text>
            </div>
          </>
        )
      }}
    </Stage>
  )
}
