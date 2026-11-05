import { Caret, Prompt, Stage, Text, Window } from '../../kit'
import '../jl-look/look.css'
import './mig.css'

// Database Migration as a feature card (560 × 400; 358 × 300 narrow). Layout:
// pinned bottom bleed with a terminal as the hero and a result card as the
// satellite (static-card's recipe, the satellite on the right). The terminal
// shows the procedures going across; the card holds the payoff, the nightly
// batch's runtime before and after. Real words: the title, the command, two
// procedure lines, the summary, and the card's three lines.

export default function Migration() {
  return (
    <Stage width={560} height={400} compact={{ below: 560, width: 358, height: 300 }} className="look-jl jl-mig">
      {(_s, _r, layout) => (
        <>
          <Window chrome="terminal" title={layout === 'wide' ? 'prod-pg — psql' : undefined} className="mg-term" body={{ 'data-crop': '' }}>
            <Prompt path="~/migration">./migrate.sh --procedures</Prompt>
            <div>
              <span className="dim">→</span> sp_post_daily_batch <span className="dim">rewritten with CTEs</span>
            </div>
            <div>
              <span className="dim">→</span> sp_calc_interest <span className="dim">temporary index</span>
            </div>
            {layout === 'wide' && (
              <>
                <div className="dim">→ sp_close_period</div>
                <div className="dim">→ sp_aging_report</div>
                <div className="dim">→ sp_reconcile_ledger</div>
                <div className="dim">→ sp_customer_balance</div>
                <div className="dim">→ sp_write_off_batch</div>
                <div className="dim">→ sp_interest_accrual</div>
              </>
            )}
            <div>
              <span className="ok">✓</span> 120 procedures <span className="dim">on PostgreSQL</span>
            </div>
            <Prompt path="~/migration">
              <Caret still />
            </Prompt>
          </Window>

          <div className="mg-card">
            <Text className="mg-card-label">Nightly batch</Text>
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
      )}
    </Stage>
  )
}
