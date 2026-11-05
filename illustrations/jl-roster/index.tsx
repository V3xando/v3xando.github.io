import { Avatar, Badge, Bar, Phone, Row, Stage, Text } from '../../kit'
import '../jl-look/look.css'
import './roster.css'

// Security Roster System as a feature card (560 × 400; 358 × 300 narrow).
// A phone hero (the field app the guards carry, React Native), pinned a
// gutter from the top and left and running off the bottom, screen at 0.9 of
// true size; the shift card straddles its right edge over filler rows and the
// bezel. The story: checkpoint reports queued offline at a low-signal site,
// synced when the signal came back, on the site's own clock. Real words: the
// screen's title and site, the sync line, one checkpoint and its time, the
// shift card's two lines. Narrow, the phone stands alone and the shift moves
// into the header.

const ROWS: { real?: boolean; title?: number; sub?: number; meta?: number }[] = [
  { real: true },
  { title: 92, sub: 60, meta: 30 },
  { title: 76, sub: 52, meta: 30 },
  { title: 104, sub: 64, meta: 30 },
  { title: 84, sub: 48, meta: 30 },
]

export default function Roster() {
  return (
    <Stage width={560} height={400} compact={{ below: 560, width: 358, height: 300 }} className="look-jl jl-roster">
      {(_s, _r, layout) => {
        const wide = layout === 'wide'
        return (
          <>
            <Phone width={wide ? 400 : 326} frame="pro" className="rs-phone">
              <div className="rs-app">
                <div className="rs-head">
                  <Text className="rs-title">Checkpoint</Text>
                  <Text className="rs-site">{wide ? 'Area tambang · WITA' : 'Shift malam · 22:00 – 06:00 WITA'}</Text>
                </div>
                <div className="rs-sync">
                  <span className="rs-sync__dot" />
                  <Text className="rs-sync__text">12 laporan offline tersinkron</Text>
                </div>
                <div className="rs-list">
                  {ROWS.map((row, i) =>
                    row.real ? (
                      <Row key={i} className="rs-row" lead={<Avatar name="Pos 3" tone="accent" size={32} />} title={<Text className="rs-row__title">Pos 3 · Gate utara</Text>} subtitle={<Text className="rs-row__sub">Budi Santoso · 2 foto</Text>} meta={<Text className="rs-row__time">06:12</Text>}>
                        {wide && <Badge tone="success" dot>Terkirim</Badge>}
                      </Row>
                    ) : (
                      <Row key={i} className="rs-row" lead={<Avatar plain size={32} />} title={<Bar w={row.title!} h={7} r={3.5} tone={3} />} subtitle={<Bar w={row.sub!} h={6} tone={2} />} meta={<Bar w={row.meta!} h={6} tone={2} />} />
                    ),
                  )}
                </div>
              </div>
            </Phone>

            {wide && (
              <div className="rs-card">
                <Text className="rs-card__label">Shift malam</Text>
                <Text className="rs-card__value">22:00 – 06:00</Text>
                <div className="rs-week" role="img" aria-label="Shift this week: night, night, day, day, morning, off, off">
                  {['M', 'M', 'S', 'S', 'P', '–', '–'].map((d, i) => (
                    <span key={i} className="rs-day" data-on={d === 'M' || undefined}>{d}</span>
                  ))}
                </div>
              </div>
            )}
          </>
        )
      }}
    </Stage>
  )
}
