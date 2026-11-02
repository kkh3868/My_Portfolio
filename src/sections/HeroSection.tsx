import { SimulationPreview } from '../components/SimulationPreview'

export function HeroSection() {
  return (
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
  )
}
