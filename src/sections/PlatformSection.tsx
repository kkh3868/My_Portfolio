import { Icon } from '../components/Icon'
import { SectionHeading } from '../components/SectionHeading'
import { platformComponents } from '../data/platform'

export function PlatformSection() {
  return (
    <section className="platform-section section-shell" id="platform">
      <SectionHeading
        eyebrow="THE FRAMEWORK"
        title="Three Components. One Framework."
        description="모델링 서버·시뮬레이션 엔진·런타임 제어 UI와 Base Model을 제공해 모델 개발부터 실행과 검증까지 지원합니다."
      />
      <div className="component-grid">
        {platformComponents.map((component) => (
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
        <p>Base Model은 공통 이벤트와 헬퍼 함수를 제공하며, 이를 바탕으로 C# 모델을 구현할 수 있습니다.</p>
        <a href="#architecture">구성도 보기 <span aria-hidden="true">→</span></a>
      </div>
    </section>
  )
}
