import { useEffect, useRef, useState } from 'react'
import agvModel from '../assets/models/agv.png'
import conveyorLoadedModel from '../assets/models/conveyor-loaded.png'
import conveyorModel from '../assets/models/conveyor.png'
import portModel from '../assets/models/port.png'
import rackModel from '../assets/models/rack.png'
import { Icon } from './Icon'

type LayoutDiagramProps = {
  idPrefix: 'modeling' | 'runtime'
}

function LayoutDiagram({ idPrefix }: LayoutDiagramProps) {
  const arrowId = `${idPrefix}-arrow`
  const diagramRef = useRef<SVGSVGElement>(null)
  const [diagramMetrics, setDiagramMetrics] = useState({ width: 920, gridSize: 24 })
  const unitSize = (diagramMetrics.gridSize * 920) / diagramMetrics.width
  const originX = 20
  const portY = 20
  const objectSize = unitSize * 2
  const agvY = portY + objectSize + unitSize * 0.75
  const conveyorY = agvY + unitSize + unitSize * 0.75
  const conveyorPositions = [originX, originX + objectSize, originX + objectSize * 2]
  const rackX = originX + objectSize * 3 + unitSize * 0.5
  const rackY = conveyorY - unitSize / 2
  const objectCenterX = originX + unitSize
  const portCenterY = portY + unitSize
  const agvCenterY = agvY + unitSize / 2
  const conveyorCenterY = conveyorY + unitSize
  const rackCenterX = rackX + unitSize * 1.5
  const rackCenterY = rackY + unitSize * 1.5
  const conveyorLabelY = conveyorY + objectSize + unitSize * 0.34
  const conveyorLabelLineHeight = unitSize * 0.45

  useEffect(() => {
    const diagram = diagramRef.current
    if (!diagram) return

    const observer = new ResizeObserver(([entry]) => {
      if (entry) {
        const gridSize = Number.parseFloat(
          getComputedStyle(diagram).getPropertyValue('--layout-grid-size'),
        )
        setDiagramMetrics({
          width: entry.contentRect.width,
          gridSize: Number.isFinite(gridSize) ? gridSize : 24,
        })
      }
    })
    observer.observe(diagram)

    return () => observer.disconnect()
  }, [])

  return (
    <svg
      ref={diagramRef}
      className={`layout-diagram${idPrefix === 'modeling' ? ' layout-diagram--modeler' : ''}`}
      viewBox="0 0 920 560"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-labelledby={`${idPrefix}-title ${idPrefix}-description`}
    >
      <title id={`${idPrefix}-title`}>2D 공정 및 물류 시뮬레이션 레이아웃</title>
      <desc id={`${idPrefix}-description`}>
        위에서부터 자재 공급 Port, AGV, 가로로 연결된 Conveyor 세 대와
        오른쪽 Rack 순서로 배치된 레이아웃입니다.
      </desc>
      <defs>
        <marker
          id={arrowId}
          markerWidth="9"
          markerHeight="9"
          refX="7"
          refY="4"
          orient="auto"
        >
          <path d="M0 0v8l7-4z" fill="#42c7e8" />
        </marker>
      </defs>
      <image href={portModel} x={originX} y={portY} width={objectSize} height={objectSize} preserveAspectRatio="none" />
      <image href={agvModel} x={objectCenterX - unitSize / 2} y={agvY} width={unitSize} height={unitSize} preserveAspectRatio="xMidYMid meet" />
      <g className="diagram-conveyor" aria-label="세 개의 연결된 컨베이어 유닛">
        <image href={conveyorModel} x={conveyorPositions[0]} y={conveyorY} width={objectSize} height={objectSize} preserveAspectRatio="none" />
        <image href={conveyorLoadedModel} x={conveyorPositions[1]} y={conveyorY} width={objectSize} height={objectSize} preserveAspectRatio="none" />
        <image href={conveyorModel} x={conveyorPositions[2]} y={conveyorY} width={objectSize} height={objectSize} preserveAspectRatio="none" />
        <rect className="diagram-conveyor__selection" x={conveyorPositions[1]} y={conveyorY} width={objectSize} height={objectSize} rx="3" />
      </g>
      <image href={rackModel} x={rackX} y={rackY} width={unitSize * 3} height={unitSize * 3} preserveAspectRatio="none" />
      {idPrefix === 'modeling' && (
        <g className="diagram-connection">
          <path d={`M${objectCenterX} ${portCenterY}L${objectCenterX} ${agvCenterY}`} markerEnd={`url(#${arrowId})`} />
          <path d={`M${objectCenterX} ${agvCenterY}L${objectCenterX} ${conveyorCenterY}`} markerEnd={`url(#${arrowId})`} />
          <path d={`M${objectCenterX} ${conveyorCenterY}L${objectCenterX + objectSize} ${conveyorCenterY}`} markerEnd={`url(#${arrowId})`} />
          <path d={`M${objectCenterX + objectSize} ${conveyorCenterY}L${objectCenterX + objectSize * 2} ${conveyorCenterY}`} markerEnd={`url(#${arrowId})`} />
          <path d={`M${objectCenterX + objectSize * 2} ${conveyorCenterY}L${rackCenterX} ${rackCenterY}`} markerEnd={`url(#${arrowId})`} />
        </g>
      )}
      <g className="diagram-object-label">
        <text x={objectCenterX} y={portY - 7} textAnchor="middle">PORT-01</text>
        <text x={objectCenterX} y={agvY + unitSize + unitSize * 0.42} textAnchor="middle">AGV-01</text>
        <text x={conveyorPositions[0] + unitSize} y={conveyorLabelY} textAnchor="middle" style={{ fontSize: unitSize * 0.32 }}>
          <tspan x={conveyorPositions[0] + unitSize}>CONVEYOR-</tspan>
          <tspan x={conveyorPositions[0] + unitSize} dy={conveyorLabelLineHeight}>01</tspan>
        </text>
        <text x={conveyorPositions[1] + unitSize} y={conveyorLabelY} textAnchor="middle" style={{ fontSize: unitSize * 0.32 }}>
          <tspan x={conveyorPositions[1] + unitSize}>CONVEYOR-</tspan>
          <tspan x={conveyorPositions[1] + unitSize} dy={conveyorLabelLineHeight}>02</tspan>
        </text>
        <text x={conveyorPositions[2] + unitSize} y={conveyorLabelY} textAnchor="middle" style={{ fontSize: unitSize * 0.32 }}>
          <tspan x={conveyorPositions[2] + unitSize}>CONVEYOR-</tspan>
          <tspan x={conveyorPositions[2] + unitSize} dy={conveyorLabelLineHeight}>03</tspan>
        </text>
        <text x={rackX} y={rackY - 7}>RACK-01</text>
      </g>
    </svg>
  )
}

export function SimulationPreview() {
  return (
    <div className="simulation-preview">
      <section className="simulation-screen simulation-screen--modeling" aria-label="모델링 화면 예시">
        <div className="simulation-screen__header">
          <div className="screen-title">
            <span className="screen-title__mark"><Icon name="layout" size={15} /></span>
            <strong>MODELER</strong>
          </div>
        </div>
        <div className="modeling-workspace">
          <aside className="model-palette" aria-label="모델 오브젝트 목록">
            <span className="screen-section-label">MODELS</span>
            <span><i className="palette-symbol palette-symbol--port">P</i>Port</span>
            <span><i className="palette-symbol palette-symbol--robot">A</i>AGV</span>
            <span><i className="palette-symbol palette-symbol--conveyor">C</i>Conveyor</span>
            <span><i className="palette-symbol palette-symbol--rack">R</i>Rack</span>
          </aside>
          <div className="screen-layout">
            <div className="screen-layout__heading">
              <span>LAYOUT EDITOR</span>
              <span>− &nbsp; 100% &nbsp; +</span>
            </div>
            <LayoutDiagram idPrefix="modeling" />
          </div>
          <aside className="simulation-properties" aria-label="선택 오브젝트 속성">
            <span className="screen-section-label">PROPERTIES</span>
            <strong>Conveyor-02</strong>
            <span className="property-tag">Model: Conveyor</span>
            <small>Position</small>
            <b>X 10 · Y 5 · Z 1</b>
            <small>Flow speed</small>
            <b>1 m/s</b>
            <small>Capacity</small>
            <b>1 Material</b>
            <small>Connection</small>
            <b>Conveyor-03</b>
            <small>Communication</small>
            <b>TCP/IP · 127.0.0.1;8080</b>
          </aside>
        </div>
      </section>

      <section className="simulation-screen simulation-screen--runtime" aria-label="시뮬레이션 제어 화면 예시">
        <div className="simulation-screen__header">
          <div className="screen-title">
            <span className="screen-title__mark screen-title__mark--runtime">▶</span>
            <strong>SIMULATION CONTROL UI</strong>
          </div>
          <span className="runtime-live"><i className="status-dot" /> RUNNING</span>
        </div>
        <div className="runtime-controlbar">
          <div className="runtime-clock">
            <small>SIMULATION CLOCK</small>
            <strong>00:12:34.520</strong>
          </div>
          <div className="runtime-speed">
            <small>PLAYBACK SPEED</small>
            <strong>2×</strong>
          </div>
          <div className="runtime-actions" aria-label="시뮬레이션 제어">
            <span>Ⅱ <b>정지</b></span>
            <span>▶ <b>재개</b></span>
            <span>＋ <b>2배 빠르게</b></span>
            <span>－ <b>2배 느리게</b></span>
          </div>
        </div>
        <div className="runtime-layout">
          <div className="screen-layout__heading">
            <span>LIVE SIMULATION</span>
          </div>
          <LayoutDiagram idPrefix="runtime" />
          <div className="runtime-action-dialog" aria-label="Conveyor-02 상태 변경 실행 예시">
            <div className="runtime-action-dialog__titlebar">
              <span>EXECUTE ACTION</span>
              <span aria-hidden="true">×</span>
            </div>
            <div className="runtime-action-dialog__body">
              <span className="runtime-action-dialog__target">OBJECT · CONVEYOR-02</span>
              <div className="runtime-action-dialog__select">
                <span>Action</span>
                <strong>Change State <i aria-hidden="true">⌄</i></strong>
              </div>
              <div className="runtime-action-dialog__parameter">
                <span className="runtime-action-dialog__state-label">Current State</span>
                <strong className="runtime-action-dialog__current-state">RUN</strong>
              </div>
              <div className="runtime-action-dialog__parameter">
                <span className="runtime-action-dialog__state-label">Change to</span>
                <strong className="runtime-action-dialog__next-state">
                  DOWN <i aria-hidden="true">⌄</i>
                </strong>
              </div>
            </div>
            <div className="runtime-action-dialog__footer">
              <span>Cancel</span>
              <strong>EXECUTE</strong>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
