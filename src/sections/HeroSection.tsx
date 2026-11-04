import { SimulationPreview } from '../components/SimulationPreview'

export function HeroSection() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-inner">
        <div className="hero-copy">
          <div className="hero-tags">
            <span>LOGISTICS &amp; PROCESS</span>
            <span>SIMULATION FRAMEWORK</span>
            <span>DISCRETE EVENT SIMULATION</span>
          </div>
          <h1>물류와 공정의 흐름을<br /><span>하나의 프레임워크</span>로<br />모델링하고 검증하다.</h1>
          <p className="hero-description">
            제조 현장의 물류·공정을 2D 모델로 구성하고, 시뮬레이션 엔진과 런타임 제어를
            연결하는 프레임워크를 설계·개발합니다. 설비와 물류 객체를 확장하고 흐름을
            검증할 수 있는 기반을 만듭니다.
          </p>
          <div className="hero-actions">
            <a className="button button--primary" href="#platform">
              프레임워크 살펴보기 <span aria-hidden="true">↓</span>
            </a>
            <a className="button button--text" href="#architecture">
              시스템 구성 <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="hero-note">
            <span className="hero-note__line" />
            <span>MODEL THE FLOW. BUILD THE FRAMEWORK.</span>
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
        <span>LOGISTICS &amp; PROCESS SIMULATION FRAMEWORK</span>
        <span>01 — 05 <i /></span>
      </div>
    </section>
  )
}
