import { ArchitectureSection } from './sections/ArchitectureSection'
import { FeaturesSection } from './sections/FeaturesSection'
import { HeroSection } from './sections/HeroSection'
import { PlatformSection } from './sections/PlatformSection'
import { VisionSection } from './sections/VisionSection'
import './App.css'

function SiteHeader() {
  return (
    <header className="site-header">
      <a className="site-brand" href="#home" aria-label="FlowSim 홈">
        <span className="brand-mark" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
        <span>FLOWSIM<span className="brand-period">.</span></span>
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
        <span>FLOWSIM<span className="brand-period">.</span></span>
      </a>
      <span>2D INDUSTRIAL SIMULATION PLATFORM</span>
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
