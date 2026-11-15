import { FrameworkArchitectureSection } from './sections/FrameworkArchitectureSection'
import { FrameworkCapabilitiesSection } from './sections/FrameworkCapabilitiesSection'
import { FrameworkOverviewSection } from './sections/FrameworkOverviewSection'
import { FrameworkVisionSection } from './sections/FrameworkVisionSection'
import { HomeHeroSection } from './sections/HomeHeroSection'
import './App.css'

function SiteHeader() {
  return (
    <header className="site-header">
      <a className="site-brand" href="#home" aria-label="산업 시뮬레이션 프레임워크 홈">
        <span className="brand-mark" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
        <span className="brand-copy">
          <strong>INDUSTRIAL SIMULATION FRAMEWORK</strong>
          <small>FOR LOGISTICS &amp; PROCESS</small>
        </span>
      </a>
      <nav className="main-nav" aria-label="주요 메뉴">
        <a href="#platform">Framework</a>
        <a href="#architecture">Architecture</a>
        <a href="#features">Capabilities</a>
      </nav>
      <a className="header-link" href="#vision">
        Framework vision <span aria-hidden="true">↗</span>
      </a>
    </header>
  )
}

function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="site-footer__main">
        <div className="site-footer__intro">
          <h2>Geonhui Kim</h2>
          <p>
            산업용 시뮬레이션 프레임워크를 설계하고 개발합니다.
            물류와 생산 공정의 흐름을 모델링하고 검증합니다.
          </p>
          <nav className="site-footer__contacts" aria-label="프로필 및 연락처">
            <a href="https://kkh3868.notion.site/Portfolio-59debe89a94d4552b1c5363b16657adb" target="_blank" rel="noreferrer" aria-label="Notion 포트폴리오">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M7 3.5h7l4 4v13H7a1 1 0 0 1-1-1v-15a1 1 0 0 1 1-1Z" />
                <path d="M14 3.5v4h4M9 12h6M9 15.5h6M9 19h4" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/geonhuikim1998/" target="_blank" rel="noreferrer" aria-label="LinkedIn 프로필">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5 9v10M5 5.5v.1M10 19v-6a3 3 0 0 1 6 0v6M10 10v9M4 9h2M4 19h2M10 19h2M16 19h2" />
              </svg>
            </a>
            <a href="https://github.com/kkh3868" target="_blank" rel="noreferrer" aria-label="GitHub 프로필">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="m8 9-3 3 3 3m8-6 3 3-3 3m-2-8-4 10" />
              </svg>
            </a>
            <a href="mailto:rjsgml198@naver.com" aria-label="이메일 보내기">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3.5" y="5.5" width="17" height="13" rx="1.5" />
                <path d="m4.5 7 7.5 6 7.5-6" />
              </svg>
            </a>
          </nav>
        </div>
        <figure className="site-footer__portrait">
          <img src="/geonhui-profile.jpg" alt="Geonhui Kim 프로필 일러스트" />
        </figure>
      </div>
      <div className="site-footer__legal">
        <span>© {year} GEONHUI KIM · INDUSTRIAL SIMULATION FRAMEWORK</span>
        <div className="site-footer__legal-right">
          <span>ENGINEERED BY G. KIM</span>
          <a className="site-footer__top" href="#home">BACK TO TOP ↑</a>
        </div>
      </div>
    </footer>
  )
}

function App() {
  return (
    <main>
      <SiteHeader />
      <HomeHeroSection />
      <FrameworkOverviewSection />
      <FrameworkArchitectureSection />
      <FrameworkCapabilitiesSection />
      <FrameworkVisionSection />
      <SiteFooter />
    </main>
  )
}

export default App
