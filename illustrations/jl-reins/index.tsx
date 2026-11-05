import { Avatar, Badge, Bar, Row, Stage, Text, Window } from '../../kit'
import '../jl-look/look.css'
import './reins.css'

// Core Reinsurance System as a feature card (560 × 400; 358 × 300 narrow).
// Gold: static-card. The treaty list is pinned top-left and runs off the
// right and bottom; the pricing card straddles the sidebar, about half
// outside, over filler rows. Real words only on the selected treaty, its
// neighbors and the premium it prices; bars everywhere else.

// Two nav words, then bars: the pricing card covers the lower items, and a
// bar cut by its edge is filler, a word cut by it is a half-word
const NAV: (string | number)[] = ['Treaties', 'Cedants', 44, 36]
// Four named treaties (the selected one, its neighbors and one more), and no
// more bar rows than names; the list runs off the crop
const ROWS: { selected?: boolean; name?: number | string; amount?: number | string }[] = [
  { name: 'Marine Cargo XL', amount: 'Rp 3.2 bn' },
  { selected: true },
  { name: 'Engineering Surplus', amount: 'Rp 1.9 bn' },
  { name: 'Fire & Allied Perils', amount: 'Rp 2.4 bn' },
  { name: 96, amount: 38 },
  { name: 72, amount: 48 },
  { name: 84, amount: 40 },
]

export default function Reinsurance() {
  return (
    <Stage width={560} height={400} compact={{ below: 560, width: 358, height: 300 }} className="look-jl jl-reins">
      {(_s, _r, layout) => {
        const name = layout === 'wide' ? 'Property Quota Share' : 'Property QS'
        return (
        <>
          <Window url="core-re.app/treaties" className="rn-window">
            <aside className="rn-sidebar">
              <Bar w={20} h={20} r={6} tone={4} style={{ marginBottom: 10 }} />
              {NAV.map((label, i) => (
                <div key={i} className="rn-nav" data-on={i === 0 || undefined}>
                  <Bar w={10} h={10} r={3} tone={i === 0 ? 4 : 3} />
                  {typeof label === 'string' ? <Text className="rn-nav__label">{label}</Text> : <Bar w={label} h={5} tone={2} />}
                </div>
              ))}
            </aside>
            <div className="rn-main">
              <div className="rn-header">
                <Text className="rn-title">Treaties</Text>
                <Bar w={52} h={22} r={6} tone={2} />
              </div>
              <div className="rn-tools">
                <Bar w={layout === 'wide' ? 140 : 104} h={24} r={6} tone={1} shrink={false} />
                <Bar w={56} h={24} r={12} tone={2} shrink={false} />
                <Bar w={44} h={24} r={12} tone={2} shrink={false} />
              </div>
              <div className="rn-list">
                {ROWS.map((row, i) =>
                  row.selected ? (
                    <Row key={i} pad={0} selected className="rn-row" data-target="selected" lead={<Avatar name={name} tone="accent" size={18} />} title={<Text className="rn-name">{name}</Text>}>
                      <Bar w={40} tone={4} />
                    </Row>
                  ) : (
                    <Row key={i} pad={0} className="rn-row" lead={<Bar w={18} h={18} r={9} tone={2} />} title={typeof row.name === 'string' ? <Text className="rn-rowname">{row.name}</Text> : <Bar w={row.name!} tone={3} />}>
                      {typeof row.amount === 'string' ? <Text className="rn-rowamount">{row.amount}</Text> : <Bar w={row.amount!} tone={2} />}
                    </Row>
                  ),
                )}
              </div>
            </div>
          </Window>

          <div className="rn-detail">
            <div className="rn-detail-head">
              {layout === 'wide' && <Avatar name="Property Quota Share" tone="accent" size={26} />}
              <div className="rn-detail-who">
                <Text className="rn-detail-name">{name}</Text>
                <Badge tone="success" dot>Validated</Badge>
              </div>
            </div>
            {[48, 36, 42].map((w, i) => (
              <div key={i} className="rn-detail-row">
                <Bar w={w} h={5} tone={3} />
                <Bar w={w - 12} h={5} tone={2} />
              </div>
            ))}
            <div className="rn-detail-row total">
              <Text className="rn-detail-label">Premium</Text>
              <Text className="rn-detail-total">Rp 10.1 bn</Text>
            </div>
          </div>
        </>
        )
      }}
    </Stage>
  )
}
