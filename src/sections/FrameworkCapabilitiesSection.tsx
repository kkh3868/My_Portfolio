import { Icon } from '../components/Icon'
import { SectionHeading } from '../components/SectionHeading'
import { platformCapabilities } from '../data/platform'

export function FrameworkCapabilitiesSection() {
  return (
    <section className="features-section section-shell" id="features">
      <SectionHeading
        eyebrow="FRAMEWORK CAPABILITIES"
        title="Designed for Industrial Simulation"
        description="객체 기반 모델링, Base Model 기반 개발, 2D 흐름 시각화를 통해 현장별 시뮬레이션 모델을 구성합니다."
      />
      <div className="capability-grid">
        {platformCapabilities.map((capability) => (
          <article className="capability-card" key={capability.number}>
            <div className="capability-card__top">
              <span className="icon-tile icon-tile--subtle"><Icon name={capability.icon} /></span>
              <span>{capability.number} / CAPABILITY</span>
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
