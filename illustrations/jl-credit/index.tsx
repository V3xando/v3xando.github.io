import { Avatar, Badge, Bar, Row, Stage, Text, Window } from '../../kit'
import '../jl-look/look.css'
import './credit.css'

// Credit Policy System as a feature card (560 × 400; 358 × 300 narrow). Gold:
// close-up. The whole window at 1.4x, chrome and all, inset top and sides and
// off the bottom; the subject row (one application, its 1–5 score and the
// decision) whole across, with filler rows above and below for context.
// Real words: the window title, the applicant, the loan line, the decision.

const SCORE = 4

export default function CreditPolicy() {
  return (
    <Stage width={560} height={400} compact={{ below: 560, width: 358, height: 300 }} className="look-jl jl-credit">
      {(_s, _r, layout) => {
        const wide = layout === 'wide'
        return (
          <div className="cr-zoom">
            <Window title="Credit decision" className="cr-win">
              <div className="cr-list">
                <Row pad={0} className="cr-row" lead={<Avatar plain size={24} />} title={<Bar w={96} h={8} r={4} tone={3} />} subtitle={<Bar w={132} h={7} r={3.5} tone={2} />}>
                  <Bar w={64} h={18} r={9} tone={2} />
                </Row>
                <Row pad={0} className="cr-row" data-target="subject" lead={<Avatar name="Dewi Anggraini" size={24} />} title={<Text className="cr-title">Dewi Anggraini</Text>} subtitle={<Text className="cr-sub">{wide ? 'Rp 250 m · 36 months' : 'Score 4/5 · Rp 250 m'}</Text>}>
                  {wide && (
                    <span className="cr-score" role="img" aria-label={`Score ${SCORE} of 5`}>
                      {[1, 2, 3, 4, 5].map((i) => (
                        <span key={i} className="cr-dot" data-on={i <= SCORE || undefined} />
                      ))}
                    </span>
                  )}
                  <Badge tone="success" dot>Approved</Badge>
                </Row>
                <Row pad={0} className="cr-row" lead={<Avatar plain size={24} />} title={<Bar w={120} h={8} r={4} tone={3} />} subtitle={<Bar w={104} h={7} r={3.5} tone={2} />}>
                  <Bar w={64} h={18} r={9} tone={2} />
                </Row>
                <Row pad={0} className="cr-row" lead={<Avatar plain size={24} />} title={<Bar w={88} h={8} r={4} tone={3} />} subtitle={<Bar w={140} h={7} r={3.5} tone={2} />}>
                  <Bar w={64} h={18} r={9} tone={2} />
                </Row>
              </div>
            </Window>
          </div>
        )
      }}
    </Stage>
  )
}
