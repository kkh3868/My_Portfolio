import { SimulationPreview } from '../components/SimulationPreview'

export function HeroSection() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-inner">
        <div className="hero-copy">
          <h1>물류와 공정의 흐름을<br /><span>시뮬레이션</span>으로<br />모델링하고 검증하다.</h1>
          <p className="hero-description">
            제조 현장의 물류·공정을 2D 모델로 구성하고, 시뮬레이션 엔진과 런타임 제어를
            연결하는 프레임워크를 설계·개발합니다. 설비와 물류 객체를 확장하고 흐름을
            검증할 수 있는 기반을 만듭니다.
          </p>
          <div className="hero-stats" aria-label="현장 검증 실적">
            <div className="hero-stat">
              <strong>03</strong>
              <span>해외·국내 검증 사이트</span>
            </div>
            <div className="hero-stat">
              <strong>05</strong>
              <span>물류 시스템 검증</span>
            </div>
            <div className="hero-stat">
              <strong>35</strong>
              <span>생산 시스템 검증</span>
            </div>
          </div>
          <div className="hero-actions">
            <a className="button button--primary" href="#platform">
              프레임워크 살펴보기 <span aria-hidden="true">↓</span>
            </a>
            <a className="button button--text" href="#architecture">
              시스템 구성 <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="hero-hashtags" aria-label="핵심 키워드">
            <span>#LOGISTICS &amp; PROCESS</span>
            <span>#SIMULATION FRAMEWORK</span>
            <span>#DISCRETE EVENT SIMULATION</span>
          </div>
        </div>
        <div className="hero-visual">
          <div className="visual-orbit visual-orbit--one" />
          <div className="visual-orbit visual-orbit--two" />
          <SimulationPreview />
        </div>
      </div>
    </section>
  )
}
