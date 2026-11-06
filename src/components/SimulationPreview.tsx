import { Icon } from './Icon'

type LayoutDiagramProps = {
  idPrefix: 'modeling' | 'runtime'
}

function LayoutDiagram({ idPrefix }: LayoutDiagramProps) {
  const arrowId = `${idPrefix}-arrow`

  return (
    <svg
      className={`layout-diagram${idPrefix === 'modeling' ? ' layout-diagram--modeler' : ''}`}
      viewBox="0 0 720 390"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-labelledby={`${idPrefix}-title ${idPrefix}-description`}
    >
      <title id={`${idPrefix}-title`}>2D 공정 및 물류 시뮬레이션 레이아웃</title>
      <desc id={`${idPrefix}-description`}>
        위에서부터 자재 공급 Port, Mobile Transfer 로봇, 가로로 연결된 Conveyor 세 대와
        오른쪽 Rack 순서로 배치된 레이아웃입니다.
      </desc>
      <defs>
        <marker
          id={arrowId}
          markerWidth="9"
          markerHeight="9"
          refX="7"
          refY="4"
          orient="auto"
        >
          <path d="M0 0v8l7-4z" fill="#42c7e8" />
        </marker>
      </defs>
      <g className="diagram-object-label">
        <text x="54" y="40">PORT-01</text>
        <text x="70" y="143">AGV-01</text>
        <text x="77" y="332">CONVEYOR-01</text>
        <text x="217" y="332">CONVEYOR-02</text>
        <text x="357" y="332">CONVEYOR-03</text>
        <text x="542" y="197">RACK-01</text>
      </g>

      <g className="diagram-port">
        <rect x="54" y="49" width="138" height="52" rx="4" />
        <rect className="diagram-port__face" x="62" y="57" width="42" height="36" rx="3" />
        <path d="M72 84V70h8v14m6 0V64h8v20" />
        <circle cx="181" cy="61" r="3" />
        <text x="112" y="72">PORT-01</text>
        <text className="diagram-small-label" x="112" y="85">SUPPLY STATION</text>
      </g>

      <g className="diagram-robot">
        <rect className="diagram-robot__body" x="54" y="156" width="206" height="60" rx="12" />
        <rect className="diagram-robot__deck" x="96" y="165" width="87" height="40" rx="5" />
        <rect className="diagram-robot__load" x="118" y="170" width="42" height="29" rx="3" />
        <path className="diagram-robot__load-mark" d="M125 177h28m-28 7h28m-28 7h18" />
        <path className="diagram-robot__wheel" d="M65 152v7m24-7v7m124-7v7m24-7v7M65 213v7m24-7v7m124-7v7m24-7v7" />
        <circle className="diagram-robot__sensor" cx="242" cy="186" r="4" />
        <text x="68" y="192">AMR</text>
      </g>

      <g className="diagram-conveyor" aria-label="세 개의 연결된 컨베이어 유닛">
        <g transform="translate(54 260)">
          <rect className="diagram-conveyor__frame" width="140" height="48" rx="3" />
          <path className="diagram-conveyor__belt" d="M4 8h132v30H4z" />
          <path className="diagram-conveyor__rail" d="M4 7h132m-132 32h132" />
          <path className="diagram-conveyor__roller" d="M14 9v28m18-28v28m18-28v28m18-28v28m18-28v28m18-28v28m18-28v28m18-28v28" />
          <rect className="diagram-conveyor__material" x="49" y="14" width="20" height="18" rx="2" />
        </g>
        <g transform="translate(194 260)">
          <rect className="diagram-conveyor__frame diagram-conveyor__frame--selected" width="140" height="48" rx="3" />
          <path className="diagram-conveyor__belt" d="M4 8h132v30H4z" />
          <path className="diagram-conveyor__rail" d="M4 7h132m-132 32h132" />
          <path className="diagram-conveyor__roller" d="M14 9v28m18-28v28m18-28v28m18-28v28m18-28v28m18-28v28m18-28v28m18-28v28" />
          <rect className="diagram-conveyor__material" x="63" y="14" width="20" height="18" rx="2" />
        </g>
        <g transform="translate(334 260)">
          <rect className="diagram-conveyor__frame" width="140" height="48" rx="3" />
          <path className="diagram-conveyor__belt" d="M4 8h132v30H4z" />
          <path className="diagram-conveyor__rail" d="M4 7h132m-132 32h132" />
          <path className="diagram-conveyor__roller" d="M14 9v28m18-28v28m18-28v28m18-28v28m18-28v28m18-28v28m18-28v28m18-28v28" />
          <rect className="diagram-conveyor__material" x="91" y="14" width="20" height="18" rx="2" />
        </g>
      </g>

      <g className="diagram-rack">
        <rect className="diagram-rack__frame" x="546" y="210" width="122" height="148" rx="3" />
        <path className="diagram-rack__shelves" d="M546 246h122m-122 37h122m-122 37h122M554 210v148m106-148v148" />
        <rect className="diagram-rack__load" x="560" y="217" width="34" height="22" rx="2" />
        <rect className="diagram-rack__load" x="612" y="217" width="39" height="22" rx="2" />
        <rect className="diagram-rack__load" x="560" y="253" width="44" height="24" rx="2" />
        <rect className="diagram-rack__load" x="615" y="253" width="36" height="24" rx="2" />
        <rect className="diagram-rack__load" x="560" y="290" width="34" height="24" rx="2" />
        <rect className="diagram-rack__load" x="605" y="290" width="46" height="24" rx="2" />
        <rect className="diagram-rack__load" x="566" y="327" width="39" height="24" rx="2" />
        <rect className="diagram-rack__load" x="612" y="327" width="39" height="24" rx="2" />
      </g>

      {idPrefix === 'modeling' && (
        <g className="diagram-connection">
          <path d="M123 75L157 186" markerEnd={`url(#${arrowId})`} />
          <path d="M157 186L124 284" markerEnd={`url(#${arrowId})`} />
          <path d="M124 284L264 284" markerEnd={`url(#${arrowId})`} />
          <path d="M264 284L404 284" markerEnd={`url(#${arrowId})`} />
          <path d="M404 284L607 284" markerEnd={`url(#${arrowId})`} />
        </g>
      )}
    </svg>
  )
}

export function SimulationPreview() {
  return (
    <div className="simulation-preview">
      <section className="simulation-screen simulation-screen--modeling" aria-label="모델링 화면 예시">
        <div className="simulation-screen__header">
          <div className="screen-title">
            <span className="screen-title__mark"><Icon name="layout" size={15} /></span>
            <strong>MODELER</strong>
          </div>
        </div>
        <div className="modeling-workspace">
          <aside className="model-palette" aria-label="모델 오브젝트 목록">
            <span className="screen-section-label">MODELS</span>
            <span><i className="palette-symbol palette-symbol--port">P</i>Port</span>
            <span><i className="palette-symbol palette-symbol--robot">M</i>Mobile</span>
            <span><i className="palette-symbol palette-symbol--conveyor">C</i>Conveyor</span>
            <span><i className="palette-symbol palette-symbol--rack">R</i>Rack</span>
          </aside>
          <div className="screen-layout">
            <div className="screen-layout__heading">
              <span>LAYOUT EDITOR</span>
              <span>− &nbsp; 100% &nbsp; +</span>
            </div>
            <LayoutDiagram idPrefix="modeling" />
          </div>
          <aside className="simulation-properties" aria-label="선택 오브젝트 속성">
            <span className="screen-section-label">PROPERTIES</span>
            <strong>Conveyor-02</strong>
            <span className="property-tag">Model: Conveyor</span>
            <small>Position</small>
            <b>X 10 · Y 5 · Z 1</b>
            <small>Flow speed</small>
            <b>1 m/s</b>
            <small>Capacity</small>
            <b>1 Material</b>
            <small>Connection</small>
            <b>Conveyor-03</b>
            <small>Communication</small>
            <b>TCP/IP · 127.0.0.1;8080</b>
          </aside>
        </div>
      </section>

      <section className="simulation-screen simulation-screen--runtime" aria-label="시뮬레이션 제어 화면 예시">
        <div className="simulation-screen__header">
          <div className="screen-title">
            <span className="screen-title__mark screen-title__mark--runtime">▶</span>
            <strong>SIMULATION CONTROL UI</strong>
          </div>
          <span className="runtime-live"><i className="status-dot" /> RUNNING</span>
        </div>
        <div className="runtime-controlbar">
          <div className="runtime-clock">
            <small>SIMULATION CLOCK</small>
            <strong>00:12:34.520</strong>
          </div>
          <div className="runtime-speed">
            <small>PLAYBACK SPEED</small>
            <strong>2×</strong>
          </div>
          <div className="runtime-actions" aria-label="시뮬레이션 제어">
            <span>Ⅱ <b>정지</b></span>
            <span>▶ <b>재개</b></span>
            <span>＋ <b>2배 빠르게</b></span>
            <span>－ <b>2배 느리게</b></span>
          </div>
        </div>
        <div className="runtime-layout">
          <div className="screen-layout__heading">
            <span>LIVE SIMULATION</span>
          </div>
          <LayoutDiagram idPrefix="runtime" />
          <div className="runtime-action-dialog" aria-label="Conveyor-02 상태 변경 실행 예시">
            <div className="runtime-action-dialog__titlebar">
              <span>EXECUTE ACTION</span>
              <span aria-hidden="true">×</span>
            </div>
            <div className="runtime-action-dialog__body">
              <span className="runtime-action-dialog__target">OBJECT · CONVEYOR-02</span>
              <div className="runtime-action-dialog__select">
                <span>Action</span>
                <strong>Change State <i aria-hidden="true">⌄</i></strong>
              </div>
              <div className="runtime-action-dialog__parameter">
                <span className="runtime-action-dialog__state-label">Current State</span>
                <strong className="runtime-action-dialog__current-state">RUN</strong>
              </div>
              <div className="runtime-action-dialog__parameter">
                <span className="runtime-action-dialog__state-label">Change to</span>
                <strong className="runtime-action-dialog__next-state">
                  DOWN <i aria-hidden="true">⌄</i>
                </strong>
              </div>
            </div>
            <div className="runtime-action-dialog__footer">
              <span>Cancel</span>
              <strong>EXECUTE</strong>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
