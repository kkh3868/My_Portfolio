import { Icon } from '../components/Icon'
import { SectionHeading } from '../components/SectionHeading'

export function FrameworkArchitectureSection() {
  return (
    <section className="architecture-section" id="architecture">
      <div className="section-shell architecture-shell">
        <SectionHeading
          eyebrow="FRAMEWORK ARCHITECTURE"
          title="Three Components, One Workflow"
          description="모델링 서버, 시뮬레이션 엔진, 런타임 제어 UI의 역할과 모델 데이터·실행 상태의 흐름을 개념적으로 보여줍니다."
        />
        <div className="architecture-panel">
          <div className="architecture-panel__header">
            <span>FRAMEWORK WORKFLOW</span>
            <span><i /> COMPONENT RESPONSIBILITIES</span>
          </div>
          <div className="architecture-flow">
            <article className="architecture-node architecture-node--server">
              <span className="node-index">01</span>
              <span className="node-icon"><Icon name="layout" size={21} /></span>
              <span className="node-content">
                <small>MODELING SERVER</small>
                <strong>Modeler Server</strong>
                <span>2D model design</span>
              </span>
            </article>
            <div className="flow-connector">
              <span className="connector-label">MODEL DATA / CONFIGURATION</span>
              <span className="connector-track" aria-hidden="true">
                <span className="connector-line" />
                <span className="connector-arrow">→</span>
              </span>
            </div>
            <article className="architecture-node architecture-node--server architecture-node--engine">
              <span className="node-index">02</span>
              <span className="node-icon"><Icon name="engine" size={21} /></span>
              <span className="node-content">
                <small>ENGINE SERVER</small>
                <strong>Simulation Engine</strong>
                <span>Discrete-event simulation</span>
              </span>
            </article>
            <div className="flow-connector">
              <span className="connector-label">RUNTIME STATE</span>
              <span className="connector-track" aria-hidden="true">
                <span className="connector-line" />
                <span className="connector-arrow">→</span>
              </span>
            </div>
            <article className="architecture-node architecture-node--ui">
              <span className="node-index">03</span>
              <span className="node-icon"><Icon name="monitor" size={21} /></span>
              <span className="node-content">
                <small>USER INTERFACE</small>
                <strong>Runtime Monitoring &amp; Control UI</strong>
                <span>Runtime monitoring &amp; control</span>
              </span>
            </article>
          </div>
          <aside className="base-model-overview" aria-labelledby="base-model-title">
            <div className="base-model-overview__content">
              <span className="base-model-overview__eyebrow">BASE MODEL / C# EXTENSION FOUNDATION</span>
              <h3 id="base-model-title">현장별 C# 모델 개발</h3>
              <p>
                Base Model의 공통 이벤트와 공통 로직으로 현장별 물류·공정 로직을 구현하고,
                시뮬레이션 엔진에서 실행·검증합니다.
              </p>
            </div>
            <div className="base-model-overview__diagram" aria-label="Base Model 기반 C# 모델 구성 예시">
              <div className="base-model-stage">
                <small>SHARED FOUNDATION</small>
                <strong>Base Model</strong>
                <span>Events · Common Logic</span>
              </div>
              <span className="base-model-overview__arrow" aria-hidden="true" />
              <div className="base-model-stage base-model-stage--objects">
                <small>ILLUSTRATIVE C# OBJECTS</small>
                <ul className="base-model-object-list">
                  <li>Port</li>
                  <li>Conveyor</li>
                  <li>Rack</li>
                  <li>AGV</li>
                </ul>
              </div>
              <span className="base-model-overview__arrow" aria-hidden="true" />
              <div className="base-model-stage">
                <small>EXECUTION</small>
                <strong>Simulation Engine</strong>
              </div>
            </div>
          </aside>
        </div>
        <p className="architecture-panel-note">
          이 구성은 프레임워크의 전체 흐름과 역할을 개략적으로 소개하며, 상세 아키텍처와 설계 내용은 공개하지 않습니다.
        </p>
      </div>
    </section>
  )
}
