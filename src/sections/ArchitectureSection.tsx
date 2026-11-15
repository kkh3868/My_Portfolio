import { Icon } from '../components/Icon'
import { SectionHeading } from '../components/SectionHeading'

export function ArchitectureSection() {
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
              <span className="connector-line" />
              <span className="connector-label">MODEL DATA / CONFIGURATION</span>
              <span className="connector-arrow" aria-hidden="true">→</span>
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
                <span>Runtime monitoring &amp; control</span>
              </span>
            </article>
          </div>
          <div className="architecture-panel__footer">
            <span><i className="server-key" /> 서버 구성요소</span>
            <span><i className="ui-key" /> 사용자 인터페이스</span>
            <span className="architecture-disclaimer">개념도 · 통신 방식 미표현</span>
          </div>
        </div>
      </div>
    </section>
  )
}
