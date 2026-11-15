import { ArchitectureSection } from './sections/ArchitectureSection'
import { FeaturesSection } from './sections/FeaturesSection'
import { HeroSection } from './sections/HeroSection'
import { PlatformSection } from './sections/PlatformSection'
import { VisionSection } from './sections/VisionSection'
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
        <a className="site-brand" href="#home">
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

        <a className="site-footer__top" href="#home">BACK TO TOP ↑</a>
      </div>
      <div className="site-footer__legal">
        <span>© {year} GEONHUI KIM · INDUSTRIAL SIMULATION FRAMEWORK</span>
        <span>ENGINEERED BY G. KIM</span>
      </div>
    </footer>
  )
}

function App() {
  return (
    <main>
      <SiteHeader />
      <HeroSection />
      <PlatformSection />
      <ArchitectureSection />
      <FeaturesSection />
      <VisionSection />
      <SiteFooter />
    </main>
  )
}

export default App
