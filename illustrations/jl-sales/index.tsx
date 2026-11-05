import { Badge, Bar, Chart, Icon, LockScreen, Notification, Phone, Stage, Text, Window, WALLPAPER } from '../../kit'
import '../jl-look/look.css'
import './sales.css'

// Sales4U as a feature card (560 × 400; 358 × 300 narrow). Gold: device-pair.
// The dashboard is pinned top-left and runs off the bottom; the phone (the
// React Native app the salespeople carry) straddles its right edge over empty
// margin and placeholder rows, so the response-time figure and its chart stay
// clear. Real words: the wordmark, the metric, its value, the change, and a
// notification about a prospect, which is what the app is for. Narrow, the
// sidebar goes, the badge sits under the figure, the chart drops earlier, and
// the phone keeps its size: a gutter from the top, off the right and bottom.

// Response time by release, in tenths of a second: the rewrite lands and the
// line settles at 0.7 s; narrow, it lands before the phone covers the chart
const LATENCY = [21, 23, 20, 24, 22, 9, 8, 7, 7, 7, 7, 7]
const LATENCY_COMPACT = [21, 23, 9, 8, 7, 7, 7, 7, 7, 7, 7, 7]

const ROWS = [
  { name: 74, amount: 40 },
  { name: 58, amount: 46 },
  { name: 82, amount: 36 },
  { name: 64, amount: 44 },
  { name: 70, amount: 38 },
]

export default function Sales4U() {
  return (
    <Stage width={560} height={400} compact={{ below: 560, width: 358, height: 350 }} className="look-jl jl-sales">
      {(_s, _r, layout) => (
        <>
          <Window url="sales4u.app/prospects" className="sl-window">
            <aside className="sl-sidebar">
              <span className="sl-logo">Sales4U</span>
              {[46, 58, 40, 52, 36].map((w, i) => (
                <div key={i} className="sl-nav" data-active={i === 0 || undefined}>
                  <Bar w={10} h={10} r={3} tone={i === 0 ? 4 : 2} />
                  <Bar w={w} h={5} tone={i === 0 ? 4 : 2} />
                </div>
              ))}
            </aside>

            <div className="sl-main">
              <section className="sl-metric">
                <div className="sl-head">
                  <Text className="sl-label">API response time</Text>
                  {layout === 'wide' && <Bar w={48} h={18} r={5} tone={1} />}
                </div>
                <div className="sl-figure">
                  <Text className="sl-total">0.7 s</Text>
                  <Badge tone="success">65% faster</Badge>
                </div>
                <Bar w={72} h={5} tone={2} />
                <Chart data={layout === 'wide' ? LATENCY : LATENCY_COMPACT} width={224} height={88} className="sl-chart" />
                <div className="sl-axis">
                  <Bar w={22} h={4} tone={1} />
                  <Bar w={22} h={4} tone={1} />
                </div>
              </section>

              <div className="sl-list">
                <Bar w={64} h={6} tone={3} style={{ marginBottom: 10 }} />
                {ROWS.map((row, i) => (
                  <div key={i} className="sl-row">
                    <Bar w={16} h={16} r={5} tone={2} />
                    <Bar w={row.name} tone={3} />
                    <Bar w={row.amount} tone={2} style={{ marginLeft: 'auto' }} />
                  </div>
                ))}
              </div>
            </div>
          </Window>

          <Phone width={220} frame="pro" dark wallpaper={WALLPAPER} className="sl-phone">
            <LockScreen size="satellite" stack="top">
              {/* The product's own app sends it, about the thing a salesperson opens it for */}
              <Notification icon={<Icon name="user" filled size={20} />} title="Sales4U" body="New prospect · Rina Wijaya, Bandung" />
            </LockScreen>
          </Phone>
        </>
      )}
    </Stage>
  )
}
