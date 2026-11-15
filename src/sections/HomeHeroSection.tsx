import { SimulationPreview } from '../components/SimulationPreview'

export function HomeHeroSection() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-inner">
        <div className="hero-copy">
          <h1>물류와 공정의 흐름을<br /><span>시뮬레이션</span>으로<br />모델링하고 검증하다.</h1>
          <p className="hero-description">
            모델링 서버와 시뮬레이션 엔진, 런타임 제어 UI를 제공하며 Base Model을 기반으로
            C# 모델의 개발과 실행을 지원합니다.
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
