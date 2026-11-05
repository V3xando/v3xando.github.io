import { Caret, Chart, Prompt, Stage, Text, Window } from '../../kit'
import '../jl-look/look.css'
import './mig.css'

// Database Migration as a feature card (560 × 400; 358 × 280 narrow). Layout:
// static-card's recipe mirrored: the terminal is the hero, pinned top-left and
// running off the bottom, its output running to the crop; the result card
// straddles its right edge, half outside, over its quiet margin, and carries
// the payoff: the nightly batch's runtime before and after, with the nights
// as bars. Real words: the title, the command, two procedure lines, the
// summary, and the card's three lines.

// Nightly batch runtime over seven nights, relative: the migration lands on
// the sixth
const NIGHTS = [96, 100, 94, 98, 97, 2, 2]

const FILLER = ['sp_close_period', 'sp_aging_report', 'sp_reconcile_ledger', 'sp_customer_balance', 'sp_write_off_batch', 'sp_interest_accrual', 'sp_branch_summary', 'sp_collateral_value', 'sp_limit_review', 'sp_fx_revaluation']

export default function Migration() {
  return (
    <Stage width={560} height={400} compact={{ below: 560, width: 358, height: 280 }} className="look-jl jl-mig">
      {(_s, _r, layout) => {
        const wide = layout === 'wide'
        return (
          <>
            <Window chrome="terminal" title={wide ? 'prod-pg — psql' : undefined} className="mg-term" body={{ 'data-crop': '' }}>
              <Prompt path="~/migration">./migrate.sh --procedures</Prompt>
              <div>
                <span className="dim">→</span> sp_post_daily_batch <span className="dim">rewritten with CTEs</span>
              </div>
              {wide && (
                <div>
                  <span className="dim">→</span> sp_calc_interest <span className="dim">temporary index</span>
                </div>
              )}
              {wide && FILLER.map((name) => <div key={name} className="dim">→ {name}</div>)}
              <div>
                <span className="ok">✓</span> 120 procedures <span className="dim">on PostgreSQL</span>
              </div>
              <Prompt path="~/migration">
                <Caret still />
              </Prompt>
            </Window>

            <div className="mg-card">
              <Text className="mg-card-label">Nightly batch</Text>
              {wide && <Chart kind="bars" data={NIGHTS} width={158} height={52} className="mg-chart" />}
              <div className="mg-row">
                <Text className="mg-k">Before</Text>
                <Text className="mg-old">10 h 12 min</Text>
              </div>
              <div className="mg-row mg-row--after">
                <Text className="mg-k">After</Text>
                <Text className="mg-new">1.8 s</Text>
              </div>
            </div>
          </>
        )
      }}
    </Stage>
  )
}
