import type { ReactNode } from 'react'
import './App.css'

type IconName =
  | 'layout'
  | 'engine'
  | 'monitor'
  | 'objects'
  | 'framework'
  | 'flow'

const icons: Record<IconName, ReactNode> = {
  layout: (
    <>
      <rect x="3.5" y="4" width="17" height="16" rx="2" />
      <path d="M8 4v16M8 9h12M12 13h2M16 13h2M12 17h2M16 17h2" />
    </>
  ),
  engine: (
    <>
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.64 5.64l2.12 2.12m8.48 8.48 2.12 2.12m0-12.72-2.12 2.12m-8.48 8.48-2.12 2.12" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1" />
    </>
  ),
  monitor: (
    <>
      <rect x="3" y="4" width="18" height="13" rx="2" />
      <path d="M8 21h8m-4-4v4M7 13l3-3 2 2 4-5" />
    </>
  ),
  objects: (
    <>
      <rect x="4" y="4" width="7" height="7" rx="1.5" />
      <rect x="14" y="4" width="6" height="7" rx="1.5" />
      <rect x="4" y="14" width="7" height="6" rx="1.5" />
      <path d="M14 17h6m-3-3v6" />
    </>
  ),
  framework: (
    <>
      <path d="M12 3 4 7.5v9L12 21l8-4.5v-9L12 3Z" />
      <path d="m4.5 7.8 7.5 4.4 7.5-4.4M12 12.2V21" />
    </>
  ),
  flow: (
    <>
      <circle cx="5" cy="6" r="2" />
      <circle cx="19" cy="18" r="2" />
      <path d="M7 6h4a4 4 0 0 1 4 4v4a4 4 0 0 0 4 4M5 8v8a2 2 0 0 0 2 2h10" />
      <path d="m15 17 2 2-2 2" />
    </>
  ),
}

function Icon({ name, size = 24 }: { name: IconName; size?: number }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {icons[name]}
    </svg>
  )
}

const components: {
  number: string
  name: string
  title: string
  description: string
  features: string[]
  icon: IconName
}[] = [
  {
    number: '01',
    name: 'Modeler Server',
    title: '공정과 물류를 설계하다',
    description:
      '공정 설비와 물류 유닛을 2D 레이아웃에 배치하고 각 객체의 속성을 설정하여 시뮬레이션 모델을 구성하는 모델링 도구입니다.',
    features: ['2D Layout Modeling', 'Object Placement', 'Property Configuration'],
    icon: 'layout',
  },
  {
    number: '02',
    name: 'Simulation Engine',
    title: '가상 환경에서 시뮬레이션을 수행하다',
    description:
      '모델링된 객체와 설정 정보를 기반으로 공정 및 물류 흐름을 연산하고 시뮬레이션을 실행하는 엔진 서버입니다.',
    features: [
      'Discrete Event Simulation',
      'Material Flow Processing',
      'Simulation Execution',
    ],
    icon: 'engine',
  },
  {
    number: '03',
    name: 'Runtime Control UI',
    title: '시뮬레이션을 모니터링하고 제어하다',
    description:
      '시뮬레이션 진행 상황과 객체별 상태를 확인하고 실행을 모니터링 및 제어하는 사용자 인터페이스입니다.',
    features: [
      'Runtime Monitoring',
      'Simulation Control',
      'Object Status Visualization',
    ],
    icon: 'monitor',
  },
]

const capabilities: {
  title: string
  description: string
  icon: IconName
  number: string
}[] = [
  {
    title: 'Object-Oriented Modeling',
    description:
      'Conveyor, Rack, MobileTransfer, ProcessingPort, Material 등의 기본 객체 모델을 기반으로 공정 및 물류 시스템을 구성하고 확장할 수 있습니다.',
    icon: 'objects',
    number: '01',
  },
  {
    title: 'Extensible Simulation Framework',
    description:
      '공통 시뮬레이션 프레임워크를 기반으로 다양한 공정 및 물류 객체를 확장하고 실행할 수 있도록 설계합니다.',
    icon: 'framework',
    number: '02',
  },
  {
    title: '2D Material Flow Visualization',
    description:
      'Top-view 2D 레이아웃에서 설비와 물류 유닛의 배치, 상태 및 자재 이동 흐름을 직관적으로 확인합니다.',
    icon: 'flow',
    number: '03',
  },
]

function SimulationPreview() {
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

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description: string
}) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}

function App() {
  return (
    <main>
      <header className="site-header">
        <a className="site-brand" href="#home" aria-label="FlowSim 홈">
          <span className="brand-mark" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <span>FLOWSIM<span className="brand-period">.</span></span>
        </a>
        <nav className="main-nav" aria-label="주요 메뉴">
          <a href="#platform">Platform</a>
          <a href="#architecture">Architecture</a>
          <a href="#features">Capabilities</a>
        </nav>
        <a className="header-link" href="#vision">
          Engineering vision <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero-section" id="home">
        <div className="hero-inner">
          <div className="hero-copy">
            <div className="hero-tags">
              <span>INDUSTRIAL SIMULATION</span>
              <span>2D MODELING</span>
              <span>DISCRETE EVENT SIMULATION</span>
            </div>
            <h1>공정과 물류의 흐름을<br /><span>2D 가상 환경</span>에서<br />구현하고 검증하다.</h1>
            <p className="hero-description">
              제조 공정과 물류 시스템을 2D 레이아웃으로 모델링하고, 시뮬레이션 엔진을
              통해 가상 환경에서 실행하며, 전체 운영 흐름을 모니터링하고 제어하는
              산업용 시뮬레이션 솔루션입니다.
            </p>
            <div className="hero-actions">
              <a className="button button--primary" href="#platform">
                솔루션 살펴보기 <span aria-hidden="true">↓</span>
              </a>
              <a className="button button--text" href="#architecture">
                시스템 구성 <span aria-hidden="true">↗</span>
              </a>
            </div>
            <div className="hero-note">
              <span className="hero-note__line" />
              <span>MODEL THE FLOW. UNDERSTAND THE SYSTEM.</span>
            </div>
          </div>
          <div className="hero-visual">
            <div className="visual-orbit visual-orbit--one" />
            <div className="visual-orbit visual-orbit--two" />
            <SimulationPreview />
            <div className="floating-label floating-label--top">
              <span className="label-icon">02</span>
              <span><b>2D LAYOUT</b><small>Top-view modeling</small></span>
            </div>
            <div className="floating-label floating-label--bottom">
              <span className="floating-live" />
              <span><b>FLOW MONITORING</b><small>Object-level visibility</small></span>
            </div>
          </div>
        </div>
        <div className="hero-bottom">
          <span>AN INTEGRATED SIMULATION WORKFLOW</span>
          <span>01 — 05 <i /></span>
        </div>
      </section>

      <section className="platform-section section-shell" id="platform">
        <SectionHeading
          eyebrow="THE PLATFORM"
          title="One Platform, Three Core Components"
          description="모델링부터 시뮬레이션 실행과 제어까지, 하나의 워크플로우로 연결되는 통합 시뮬레이션 플랫폼입니다."
        />
        <div className="component-grid">
          {components.map((component) => (
            <article className="component-card" key={component.number}>
              <div className="component-card__top">
                <span className="card-number">COMPONENT / {component.number}</span>
                <span className="icon-tile"><Icon name={component.icon} /></span>
              </div>
              <span className="component-name">{component.name}</span>
              <h3>{component.title}</h3>
              <p>{component.description}</p>
              <div className="card-rule" />
              <span className="feature-label">CORE FUNCTIONS</span>
              <ul>
                {component.features.map((feature) => (
                  <li key={feature}><span />{feature}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="platform-footnote">
          <span className="footnote-mark">i</span>
          <p>각 구성요소는 역할에 따라 분리되며, 하나의 시뮬레이션 워크플로우를 이룹니다.</p>
          <a href="#architecture">아키텍처 보기 <span aria-hidden="true">→</span></a>
        </div>
      </section>

      <section className="architecture-section" id="architecture">
        <div className="section-shell architecture-shell">
          <SectionHeading
            eyebrow="SYSTEM ARCHITECTURE"
            title="A Clear, Modular Architecture"
            description="각 구성요소의 역할을 분리하고 유기적으로 연결하여 확장 가능한 시뮬레이션 환경을 구성합니다."
          />
          <div className="architecture-panel">
            <div className="architecture-panel__header">
              <span>WORKFLOW OVERVIEW</span>
              <span><i /> COMPONENT RESPONSIBILITIES</span>
            </div>
            <div className="architecture-flow">
              <article className="architecture-node architecture-node--server">
                <span className="node-index">01</span>
                <span className="node-icon"><Icon name="layout" size={21} /></span>
                <span className="node-content">
                  <small>INDEPENDENT SERVER</small>
                  <strong>Modeler Server</strong>
                  <span>2D model authoring</span>
                </span>
              </article>
              <div className="flow-connector">
                <span className="connector-line" />
                <span className="connector-label">MODEL DATA / CONFIGURATION</span>
                <span className="connector-arrow" aria-hidden="true">→</span>
              </div>
              <article className="architecture-node architecture-node--server architecture-node--engine">
                <span className="node-index">02</span>
                <span className="node-icon"><Icon name="engine" size={21} /></span>
                <span className="node-content">
                  <small>INDEPENDENT SERVER</small>
                  <strong>Simulation Engine</strong>
                  <span>Discrete event execution</span>
                </span>
              </article>
              <div className="flow-connector">
                <span className="connector-line" />
                <span className="connector-label">RUNTIME STATE</span>
                <span className="connector-arrow" aria-hidden="true">→</span>
              </div>
              <article className="architecture-node architecture-node--ui">
                <span className="node-index">03</span>
                <span className="node-icon"><Icon name="monitor" size={21} /></span>
                <span className="node-content">
                  <small>USER INTERFACE</small>
                  <strong>Runtime Monitoring &amp; Control UI</strong>
                  <span>Monitor and control simulation</span>
                </span>
              </article>
            </div>
            <div className="architecture-panel__footer">
              <span><i className="server-key" /> 서버 구성요소</span>
              <span><i className="ui-key" /> 사용자 인터페이스</span>
              <span className="architecture-disclaimer">개념적 구성도 · 통신 방식 미표현</span>
            </div>
          </div>
        </div>
      </section>

      <section className="features-section section-shell" id="features">
        <SectionHeading
          eyebrow="ENGINEERING PRINCIPLES"
          title="Built for Industrial Simulation"
          description="산업 시스템의 구조와 흐름을 명확하게 표현하기 위한 핵심 설계 원칙입니다."
        />
        <div className="capability-grid">
          {capabilities.map((capability) => (
            <article className="capability-card" key={capability.number}>
              <div className="capability-card__top">
                <span className="icon-tile icon-tile--subtle"><Icon name={capability.icon} /></span>
                <span>{capability.number} / PRINCIPLE</span>
              </div>
              <h3>{capability.title}</h3>
              <p>{capability.description}</p>
              <span className="capability-arrow" aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className="vision-section" id="vision">
        <div className="vision-grid" aria-hidden="true">
          <span /><span /><span /><span /><span /><span /><span /><span /><span />
        </div>
        <div className="vision-content">
          <span className="eyebrow">ENGINEERING VISION</span>
          <h2>From Model to Reality</h2>
          <p>
            현실의 제조 및 물류 환경을 가상 공간에서 구현하고, 시스템 도입 전 운영
            흐름을 검증할 수 있는 시뮬레이션 기술을 지향합니다.
          </p>
          <div className="vision-statement">
            <span>MODEL.</span><span>SIMULATE.</span><span>VALIDATE.</span>
          </div>
          <div className="vision-caption">
            <span className="vision-caption__line" />
            <span>INDUSTRIAL SYSTEMS, UNDERSTOOD THROUGH SIMULATION</span>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <a className="site-brand" href="#home">
          <span className="brand-mark" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <span>FLOWSIM<span className="brand-period">.</span></span>
        </a>
        <span>2D INDUSTRIAL SIMULATION PLATFORM</span>
        <a href="#home">BACK TO TOP ↑</a>
      </footer>
    </main>
  )
}

export default App
