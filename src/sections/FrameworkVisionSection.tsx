import { useEffect, useRef, useState } from 'react'
import factoryIllustration from '../assets/factory.svg'

const visionSteps = ['MODEL.', 'SIMULATE.', 'VALIDATE.'] as const
const flowCycleDurationMs = 12_000
const stepDurationMs = flowCycleDurationMs / visionSteps.length

export function FrameworkVisionSection() {
  const [activeStep, setActiveStep] = useState(0)
  const flowProgressRef = useRef<SVGPathElement>(null)

  useEffect(() => {
    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)')
    let timerId: number | undefined

    const clearTimer = () => {
      if (timerId !== undefined) window.clearTimeout(timerId)
    }

    const updateActiveStep = () => {
      const animation = flowProgressRef.current?.getAnimations()[0]
      if (!animation) {
        timerId = window.setTimeout(updateActiveStep, 50)
        return
      }

      const cyclePosition = Number(animation.currentTime ?? 0) % flowCycleDurationMs
      const nextStep = Math.floor(cyclePosition / stepDurationMs)
      setActiveStep((current) => current === nextStep ? current : nextStep)
      timerId = window.setTimeout(
        updateActiveStep,
        Math.max(50, stepDurationMs - (cyclePosition % stepDurationMs)),
      )
    }

    const handleMotionPreferenceChange = () => {
      clearTimer()
      setActiveStep(0)
      if (!motionPreference.matches) updateActiveStep()
    }

    if (!motionPreference.matches) updateActiveStep()
    motionPreference.addEventListener('change', handleMotionPreferenceChange)

    return () => {
      clearTimer()
      motionPreference.removeEventListener('change', handleMotionPreferenceChange)
    }
  }, [])

  return (
    <section className="vision-section" id="vision" data-active-step={activeStep}>
      <div className="vision-section__atmosphere" aria-hidden="true">
        <span className="vision-section__glow vision-section__glow--model" />
        <span className="vision-section__glow vision-section__glow--simulate" />
        <span className="vision-section__glow vision-section__glow--validate" />
      </div>
      <div className="vision-content">
        <div className="vision-copy">
          <span className="eyebrow">FRAMEWORK VISION</span>
          <h2>운영의 흐름을 모델로 만들고, 실행으로 검증합니다.</h2>
          <p>
            공정·물류의 구성과 운영 규칙을 모델로 구체화하고,
            시뮬레이션 결과를 바탕으로 다양한 운영 시나리오를 검토합니다.
          </p>
        </div>
        <div
          className="vision-diagram"
          role="img"
          aria-label="공장을 형상화한 도식 위에서 MODEL, SIMULATE, VALIDATE 단계가 왼쪽에서 오른쪽으로 이어지는 프레임워크 흐름"
        >
          <img
            className="vision-diagram__factory"
            src={factoryIllustration}
            alt=""
            aria-hidden="true"
          />
          <svg className="vision-diagram__drawing" viewBox="0 0 620 52" aria-hidden="true">
            <path className="vision-flow__rail" d="M100 26h420" />
            <path
              className="vision-flow__progress"
              d="M100 26h420"
              pathLength="1000"
              ref={flowProgressRef}
            />
          </svg>
          <div className="vision-diagram__stages" aria-hidden="true">
            {visionSteps.map((step, index) => (
              <span
                className={`vision-diagram__stage vision-diagram__stage--${index + 1}${activeStep === index ? ' is-active' : ''}`}
                key={step}
              >
                <span className="vision-diagram__index">0{index + 1}</span>
                <strong>{step}</strong>
              </span>
            ))}
            <span className="vision-diagram__arrow vision-diagram__arrow--first">→</span>
            <span className="vision-diagram__arrow vision-diagram__arrow--second">→</span>
          </div>
        </div>
      </div>
    </section>
  )
}
