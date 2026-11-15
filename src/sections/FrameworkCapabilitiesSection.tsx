import { Icon } from '../components/Icon'
import { SectionHeading } from '../components/SectionHeading'
import { platformCapabilities } from '../data/platform'

export function FrameworkCapabilitiesSection() {
  return (
    <section className="features-section section-shell" id="features">
      <SectionHeading
        eyebrow="FRAMEWORK CAPABILITIES"
        title="Designed for Industrial Simulation"
        description="저사양 환경을 위한 2D·병렬 처리부터 쉬운 프로젝트 복제와 다중 사용자 제어까지 지원합니다."
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
            {capability.note && <small className="capability-card__note">{capability.note}</small>}
            <span className="capability-arrow" aria-hidden="true">↗</span>
          </article>
        ))}
      </div>
    </section>
  )
}
