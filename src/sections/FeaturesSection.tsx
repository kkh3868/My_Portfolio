import { Icon } from '../components/Icon'
import { SectionHeading } from '../components/SectionHeading'
import { platformCapabilities } from '../data/platform'

export function FeaturesSection() {
  return (
    <section className="features-section section-shell" id="features">
      <SectionHeading
        eyebrow="ENGINEERING PRINCIPLES"
        title="Built for Industrial Simulation"
        description="산업 시스템의 구조와 흐름을 명확하게 표현하기 위한 핵심 설계 원칙입니다."
      />
      <div className="capability-grid">
        {platformCapabilities.map((capability) => (
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
  )
}
