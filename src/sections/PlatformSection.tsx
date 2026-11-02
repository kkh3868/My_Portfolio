import { Icon } from '../components/Icon'
import { SectionHeading } from '../components/SectionHeading'
import { platformComponents } from '../data/platform'

export function PlatformSection() {
  return (
    <section className="platform-section section-shell" id="platform">
      <SectionHeading
        eyebrow="THE PLATFORM"
        title="One Platform, Three Core Components"
        description="모델링부터 시뮬레이션 실행과 제어까지, 하나의 워크플로우로 연결되는 통합 시뮬레이션 플랫폼입니다."
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
        <p>각 구성요소는 역할에 따라 분리되며, 하나의 시뮬레이션 워크플로우를 이룹니다.</p>
        <a href="#architecture">아키텍처 보기 <span aria-hidden="true">→</span></a>
      </div>
    </section>
  )
}
