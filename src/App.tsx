import { ArchitectureSection } from './sections/ArchitectureSection'
import { FeaturesSection } from './sections/FeaturesSection'
import { HeroSection } from './sections/HeroSection'
import { PlatformSection } from './sections/PlatformSection'
import { VisionSection } from './sections/VisionSection'
import './App.css'

function SiteHeader() {
  return (
    <header className="site-header">
      <a className="site-brand" href="#home" aria-label="물류 및 공정 시뮬레이션 프레임워크 홈">
        <span className="brand-mark" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
        <span className="brand-copy">
          <strong>INDUSTRIAL SIMULATION</strong>
          <small>LOGISTICS &amp; PROCESS FRAMEWORK</small>
        </span>
      </a>
      <nav className="main-nav" aria-label="주요 메뉴">
        <a href="#platform">Platform</a>
        <a href="#architecture">Architecture</a>
        <a href="#features">Capabilities</a>
      </nav>
      <a className="header-link" href="#vision">
        Engineering vision <span aria-hidden="true">↗</span>
      </a>
    </header>
  )
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <a className="site-brand" href="#home">
        <span className="brand-mark" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
        <span className="brand-copy">
          <strong>INDUSTRIAL SIMULATION</strong>
          <small>LOGISTICS &amp; PROCESS FRAMEWORK</small>
        </span>
      </a>
      <span>LOGISTICS &amp; PROCESS SIMULATION FRAMEWORK</span>
      <a href="#home">BACK TO TOP ↑</a>
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
