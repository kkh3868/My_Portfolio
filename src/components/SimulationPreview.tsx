import { Icon } from './Icon'

export function SimulationPreview() {
  return (
    <div className="product-window">
      <div className="window-titlebar">
        <div className="window-brand">
          <span className="brand-mark" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <span>SIMULATION WORKSPACE</span>
        </div>
        <span className="window-project">Factory Flow / Layout 01</span>
        <span className="window-status">
          <span className="status-dot" />
          MODEL READY
        </span>
      </div>
      <div className="workspace">
        <aside className="tool-rail" aria-label="레이아웃 도구 예시">
          <span className="tool-rail__active"><Icon name="layout" size={17} /></span>
          <span><Icon name="objects" size={17} /></span>
          <span><Icon name="flow" size={17} /></span>
          <span className="tool-rail__divider" />
          <span className="tool-rail__text">2D</span>
        </aside>
        <div className="layout-canvas">
          <div className="canvas-heading">
            <div>
              <span className="canvas-eyebrow">TOP VIEW · 2D LAYOUT</span>
              <strong>Material Flow Overview</strong>
            </div>
            <span className="canvas-zoom">− &nbsp; 100% &nbsp; +</span>
          </div>
          <svg
            className="factory-layout"
            viewBox="0 0 720 380"
            role="img"
            aria-labelledby="layout-title layout-description"
          >
            <title id="layout-title">2D 공정 및 물류 레이아웃 미리보기</title>
            <desc id="layout-description">
              컨베이어, 랙, 공정 포트와 이동 장치 간의 자재 이동 경로를 위에서
              내려다본 레이아웃입니다.
            </desc>
            <defs>
              <pattern id="grid" width="24" height="24" patternUnits="userSpaceOnUse">
                <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#1b2b40" strokeWidth="1" />
              </pattern>
              <marker
                id="flow-arrow"
                markerWidth="8"
                markerHeight="8"
                refX="6"
                refY="3"
                orient="auto"
              >
                <path d="M0,0 L0,6 L6,3 z" fill="#42c7e8" />
              </marker>
            </defs>
            <rect width="720" height="380" fill="#0b1524" />
            <rect width="720" height="380" fill="url(#grid)" />

            <g className="layout-zone">
              <rect x="24" y="28" width="672" height="324" rx="8" />
              <path d="M24 110h672M24 272h672M188 28v324M520 28v324" />
              <text x="40" y="50">PRODUCTION AREA</text>
              <text x="40" y="130">TRANSFER AISLE</text>
              <text x="40" y="292">INBOUND / OUTBOUND</text>
            </g>

            <g className="rack">
              <rect x="48" y="72" width="118" height="68" rx="4" />
              <path d="M48 94h118M48 117h118M87 72v68M126 72v68" />
              <text x="58" y="65">RAW MATERIAL RACK</text>
              <rect x="548" y="72" width="118" height="68" rx="4" />
              <path d="M548 94h118M548 117h118M587 72v68M626 72v68" />
              <text x="557" y="65">FINISHED GOODS</text>
            </g>

            <g className="conveyor">
              <path d="M82 220h544" />
              <path className="conveyor-center" d="M82 220h544" />
              <path d="M112 210v20m30-20v20m30-20v20m30-20v20m30-20v20m30-20v20m30-20v20m30-20v20m30-20v20m30-20v20m30-20v20m30-20v20m30-20v20m30-20v20m30-20v20m30-20v20m30-20v20" />
              <text x="300" y="247">MAIN CONVEYOR</text>
            </g>

            <g className="processing-port">
              <rect x="250" y="145" width="94" height="48" rx="6" />
              <path d="M264 159h20v20h-20zM297 169h33" />
              <text x="251" y="137">PROCESSING PORT</text>
              <circle cx="333" cy="155" r="4" />
            </g>
            <g className="processing-port processing-port--secondary">
              <rect x="402" y="145" width="94" height="48" rx="6" />
              <path d="M416 159h20v20h-20zM449 169h33" />
              <text x="407" y="137">ASSEMBLY PORT</text>
              <circle cx="485" cy="155" r="4" />
            </g>

            <g className="material-flow">
              <path d="M164 184v-22h77" markerEnd="url(#flow-arrow)" />
              <path d="M344 169h57" markerEnd="url(#flow-arrow)" />
              <path d="M496 169h70v30" markerEnd="url(#flow-arrow)" />
              <path d="M566 242v47H160v-46" markerEnd="url(#flow-arrow)" />
            </g>

            <g className="mobile-transfer">
              <rect x="365" y="286" width="54" height="36" rx="7" />
              <circle cx="377" cy="326" r="4" />
              <circle cx="407" cy="326" r="4" />
              <rect x="380" y="296" width="24" height="15" rx="3" />
              <circle cx="392" cy="303" r="3" />
              <text x="356" y="345">MOBILE TRANSFER</text>
            </g>

            <g className="material-unit">
              <rect x="155" y="209" width="22" height="22" rx="4" />
              <path d="m160 220 4 4 8-9" />
              <rect x="441" y="209" width="22" height="22" rx="4" />
              <circle cx="452" cy="220" r="4" />
            </g>

            <g className="layout-callout">
              <rect x="548" y="292" width="126" height="42" rx="6" />
              <circle cx="562" cy="307" r="4" />
              <text x="572" y="310">FLOW ACTIVE</text>
              <text x="560" y="325">Route A → Port 02</text>
            </g>
          </svg>
          <div className="canvas-legend">
            <span><i className="legend-dot legend-dot--blue" /> Material Flow</span>
            <span><i className="legend-dot legend-dot--green" /> Available</span>
            <span><i className="legend-dot legend-dot--amber" /> Processing</span>
          </div>
        </div>
        <aside className="object-panel">
          <span className="panel-eyebrow">OBJECT STATUS</span>
          <strong>Runtime Objects</strong>
          <div className="object-row">
            <span className="object-symbol object-symbol--conveyor">↔</span>
            <span><b>Conveyor-01</b><small>Conveyor</small></span>
            <i className="object-state object-state--ready" />
          </div>
          <div className="object-row">
            <span className="object-symbol object-symbol--port">P</span>
            <span><b>Port-02</b><small>Processing Port</small></span>
            <i className="object-state object-state--busy" />
          </div>
          <div className="object-row">
            <span className="object-symbol object-symbol--mobile">M</span>
            <span><b>Transfer-01</b><small>Mobile Transfer</small></span>
            <i className="object-state object-state--ready" />
          </div>
          <div className="runtime-card">
            <span>SIMULATION STATE</span>
            <strong><i /> READY TO RUN</strong>
          </div>
        </aside>
      </div>
      <div className="window-foot">
        <span><i className="status-dot" /> Conceptual interface · 2D top view</span>
        <span>MODEL / FLOW / STATUS</span>
      </div>
    </div>
  )
}
