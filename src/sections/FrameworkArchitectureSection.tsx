import { Icon } from '../components/Icon'
import { SectionHeading } from '../components/SectionHeading'

export function FrameworkArchitectureSection() {
  return (
    <section className="architecture-section" id="architecture">
      <div className="section-shell architecture-shell">
        <SectionHeading
          eyebrow="SYSTEM ARCHITECTURE"
          title="How the Simulation System Connects"
          description={'Base Model 기반 Custom Model을 Modeler에 등록해 레이아웃에 배치합니다.\n모델링 정보는 SQLite를 통해 Simulation Engine으로 전달되어 실행되며, 제어 UI와 Kafka로 상태와 명령을 주고받습니다.\nMES 등 외부 시스템은 Socket으로 연결해 정보를 교환합니다.'}
        />
        <div className="architecture-panel">
          <div className="architecture-panel__header">
            <span>SYSTEM ARCHITECTURE MAP</span>
          </div>
          <div className="architecture-map-frame">
            <div
              className="architecture-map"
              role="group"
              aria-label="Base Model 기반 Custom Model을 Modeler Server에 등록하고 SQLite로 Simulation Engine에 전달합니다. 엔진은 Kafka로 제어 UI와 상태·명령을 주고받으며 Socket으로 외부 시스템과 통신합니다."
            >
              <article className="architecture-map__node architecture-map__node--modeler">
                <span className="architecture-map__index">01 / MODELING</span>
                <span className="architecture-map__icon"><Icon name="layout" size={21} /></span>
                <span className="architecture-map__content">
                  <strong>Modeler Server</strong>
                  <span>2D model &amp; layout configuration</span>
                </span>
              </article>

              <div
                className="architecture-map__connector architecture-map__connector--sqlite"
                role="img"
                aria-label="SQLite를 통해 Modeler Server의 모델 데이터가 Simulation Engine으로 전달됩니다."
              >
                <span className="architecture-map__protocol">SQLite</span>
                <span className="architecture-map__connector-flow architecture-map__connector-flow--forward" aria-hidden="true">
                  <span className="architecture-map__connector-line" />
                </span>
              </div>

              <article className="architecture-map__node architecture-map__node--engine">
                <span className="architecture-map__index">02 / EXECUTION</span>
                <span className="architecture-map__icon"><Icon name="engine" size={21} /></span>
                <span className="architecture-map__content">
                  <strong>Simulation Engine</strong>
                  <span>Discrete-event simulation runtime</span>
                </span>
              </article>

              <div
                className="architecture-map__connector architecture-map__connector--socket"
                role="img"
                aria-label="Simulation Engine과 외부 시스템이 Socket으로 양방향 통신합니다."
              >
                <span className="architecture-map__protocol">Socket</span>
                <span className="architecture-map__connector-flow architecture-map__connector-flow--bidirectional" aria-hidden="true">
                  <span className="architecture-map__connector-line" />
                </span>
              </div>

              <article className="architecture-map__node architecture-map__node--external">
                <span className="architecture-map__index">04 / INTEGRATION</span>
                <span className="architecture-map__icon"><Icon name="flow" size={21} /></span>
                <span className="architecture-map__content">
                  <strong>External Systems</strong>
                  <span>MES / Other systems</span>
                </span>
              </article>

              <div className="architecture-map__control-stack">
                <article className="architecture-map__node architecture-map__node--control">
                  <span className="architecture-map__index">03 / CONTROL</span>
                  <span className="architecture-map__icon"><Icon name="monitor" size={21} /></span>
                  <span className="architecture-map__content">
                    <strong>Simulation Control UI</strong>
                    <span>Runtime monitoring &amp; control</span>
                  </span>
                </article>
                <div
                  className="architecture-map__vertical-connector architecture-map__vertical-connector--kafka"
                  role="img"
                  aria-label="Kafka를 통해 Simulation Control UI와 Simulation Engine 사이에 제어 및 상태 정보가 오갑니다."
                >
                  <span className="architecture-map__vertical-arrow architecture-map__vertical-arrow--up" aria-hidden="true">↑</span>
                  <span className="architecture-map__protocol">Kafka</span>
                  <span className="architecture-map__vertical-arrow architecture-map__vertical-arrow--down" aria-hidden="true">↓</span>
                </div>
              </div>

              <div className="architecture-map__developer-stack">
                <div
                  className="architecture-map__developer-connector"
                  role="img"
                  aria-label="Base Model에서 파생한 C# Custom Model을 Modeler Server에서 사용합니다."
                >
                  <span className="architecture-map__developer-arrow" aria-hidden="true">↑</span>
                  <span className="architecture-map__protocol">Model Registration</span>
                </div>
                <article className="architecture-map__node architecture-map__node--developer">
                  <span className="architecture-map__index">MODEL EXTENSION</span>
                  <span className="architecture-map__icon"><Icon name="document" size={21} /></span>
                  <span className="architecture-map__content">
                    <strong>Custom Model Developer</strong>
                    <span>Base Model-derived · C#</span>
                  </span>
                </article>
              </div>
            </div>
          </div>
        </div>
        <p className="architecture-panel-note">
          주요 컴포넌트와 통신 경로를 개략화한 구조도이며, 세부 구현과 내부 설계는 제외했습니다.
        </p>
      </div>
    </section>
  )
}
