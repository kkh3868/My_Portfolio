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

type SpriteBorder = {
  left: number
  top: number
  right: number
  bottom: number
}

type ModelSprite = {
  href: string
  sourceWidth: number
  sourceHeight: number
  border: SpriteBorder
}

const portSprite: ModelSprite = {
  href: portModel,
  sourceWidth: 714,
  sourceHeight: 638,
  border: { left: 0, top: 0, right: 714, bottom: 638 },
}

const agvSprite: ModelSprite = {
  href: agvModel,
  sourceWidth: 1254,
  sourceHeight: 1254,
  border: { left: 272, top: 438, right: 978, bottom: 1036 },
}

const conveyorSprite: ModelSprite = {
  href: conveyorModel,
  sourceWidth: 624,
  sourceHeight: 610,
  border: { left: 9, top: 24, right: 613, bottom: 600 },
}

const conveyorLoadedSprite: ModelSprite = {
  href: conveyorLoadedModel,
  sourceWidth: 622,
  sourceHeight: 610,
  border: { left: 8, top: 24, right: 612, bottom: 600 },
}

const rackSprite: ModelSprite = {
  href: rackModel,
  sourceWidth: 926,
  sourceHeight: 882,
  border: { left: 13, top: 12, right: 913, bottom: 867 },
}

function getBorderCenter(
  sprite: ModelSprite,
  imageX: number,
  imageY: number,
  imageWidth: number,
  imageHeight: number,
) {
  const { left, right, top, bottom } = sprite.border
  return {
    x: imageX + (((left + right) / 2) / sprite.sourceWidth) * imageWidth,
    y: imageY + (((top + bottom) / 2) / sprite.sourceHeight) * imageHeight,
  }
}

function fitSpriteToBorder(
  sprite: ModelSprite,
  center: { x: number; y: number },
  borderWidth: number,
  borderHeight: number,
) {
  const { left, right, top, bottom } = sprite.border
  const imageWidth = (borderWidth * sprite.sourceWidth) / (right - left)
  const imageHeight = (borderHeight * sprite.sourceHeight) / (bottom - top)

  return {
    href: sprite.href,
    x: center.x - (((left + right) / 2) / sprite.sourceWidth) * imageWidth,
    y: center.y - (((top + bottom) / 2) / sprite.sourceHeight) * imageHeight,
    width: imageWidth,
    height: imageHeight,
    border: {
      x: center.x - borderWidth / 2,
      y: center.y - borderHeight / 2,
      width: borderWidth,
      height: borderHeight,
    },
  }
}

function snapToGrid(value: number, unitSize: number, gridOffset: number) {
  return Math.round((value + gridOffset) / unitSize) * unitSize - gridOffset
}

function fitSpriteToGrid(
  sprite: ModelSprite,
  center: { x: number; y: number },
  borderWidth: number,
  borderHeight: number,
  unitSize: number,
  gridOffsetX: number,
  gridOffsetY: number,
) {
  const left = snapToGrid(center.x - borderWidth / 2, unitSize, gridOffsetX)
  const top = snapToGrid(center.y - borderHeight / 2, unitSize, gridOffsetY)
  return fitSpriteToBorder(
    sprite,
    { x: left + borderWidth / 2, y: top + borderHeight / 2 },
    borderWidth,
    borderHeight,
  )
}

function LayoutDiagram({ idPrefix }: LayoutDiagramProps) {
  const arrowId = `${idPrefix}-arrow`
  const diagramRef = useRef<SVGSVGElement>(null)
  const [diagramMetrics, setDiagramMetrics] = useState({
    width: 920,
    gridSize: 24,
    offsetX: 9,
    offsetY: 31,
  })
  const { offsetX: gridOffsetX, offsetY: gridOffsetY } = diagramMetrics
  const unitSize = (diagramMetrics.gridSize * 920) / diagramMetrics.width
  const originX = unitSize
  const portY = unitSize
  const objectSize = unitSize * 2
  const agvY = portY + objectSize + unitSize * 0.75
  const conveyorY = agvY + unitSize + unitSize * 0.75
  const conveyorPositions = [originX, originX + objectSize, originX + objectSize * 2]
  const rackX = originX + objectSize * 3 + unitSize * 0.5
  const rackY = conveyorY - unitSize / 2
  const objectCenterX = originX + unitSize
  const agvX = objectCenterX - unitSize / 2

  const rawPortCenter = getBorderCenter(portSprite, originX, portY, objectSize, objectSize)
  const port = fitSpriteToGrid(
    portSprite,
    rawPortCenter,
    objectSize,
    objectSize,
    unitSize,
    gridOffsetX,
    gridOffsetY,
  )
  const portCenter = {
    x: port.border.x + port.border.width / 2,
    y: port.border.y + port.border.height / 2,
  }

  const rawAgvCenter = getBorderCenter(agvSprite, agvX, agvY, unitSize, unitSize)
  const agv = fitSpriteToGrid(
    agvSprite,
    rawAgvCenter,
    unitSize,
    unitSize,
    unitSize,
    gridOffsetX,
    gridOffsetY,
  )
  const agvCenter = {
    x: agv.border.x + agv.border.width / 2,
    y: agv.border.y + agv.border.height / 2,
  }

  const rawConveyorCenter = getBorderCenter(
    conveyorSprite,
    conveyorPositions[0],
    conveyorY,
    objectSize,
    objectSize,
  )
  const conveyorLeft = snapToGrid(
    rawConveyorCenter.x - objectSize / 2,
    unitSize,
    gridOffsetX,
  )
  const conveyorTop = snapToGrid(
    rawConveyorCenter.y - objectSize / 2,
    unitSize,
    gridOffsetY,
  )
  const conveyors = conveyorPositions.map((_, index) => {
    const sprite = index === 1 ? conveyorLoadedSprite : conveyorSprite
    return fitSpriteToBorder(
      sprite,
      {
        x: conveyorLeft + objectSize / 2 + index * objectSize,
        y: conveyorTop + objectSize / 2,
      },
      objectSize,
      objectSize,
    )
  })
  const conveyorCenters = conveyors.map((conveyor) => ({
    x: conveyor.border.x + conveyor.border.width / 2,
    y: conveyor.border.y + conveyor.border.height / 2,
  }))

  const rawRackCenter = getBorderCenter(rackSprite, rackX, rackY, unitSize * 3, unitSize * 3)
  const rack = fitSpriteToGrid(
    rackSprite,
    rawRackCenter,
    unitSize * 3,
    unitSize * 3,
    unitSize,
    gridOffsetX,
    gridOffsetY,
  )
  const rackCenter = {
    x: rack.border.x + rack.border.width / 2,
    y: rack.border.y + rack.border.height / 2,
  }

  const labelOffsetY = unitSize * 0.36
  const portLabelY = port.border.y + port.border.height + labelOffsetY
  const agvLabelY = agv.border.y + agv.border.height + labelOffsetY
  const conveyorLabelY = conveyors[0].border.y + conveyors[0].border.height + labelOffsetY
  const rackLabelY = rack.border.y + rack.border.height + labelOffsetY

  useEffect(() => {
    const diagram = diagramRef.current
    if (!diagram) return

    const observer = new ResizeObserver(([entry]) => {
      if (entry) {
        const gridSize = Number.parseFloat(
          getComputedStyle(diagram).getPropertyValue('--layout-grid-size'),
        )
        const diagramRect = diagram.getBoundingClientRect()
        const parent = diagram.parentElement
        const parentRect = parent?.getBoundingClientRect()
        const parentStyle = parent ? getComputedStyle(parent) : null
        const borderLeft = parentStyle
          ? Number.parseFloat(parentStyle.borderLeftWidth) || 0
          : 0
        const borderTop = parentStyle
          ? Number.parseFloat(parentStyle.borderTopWidth) || 0
          : 0
        const scale = diagramRect.width > 0 ? diagramRect.width / 920 : 1
        setDiagramMetrics({
          width: entry.contentRect.width,
          gridSize: Number.isFinite(gridSize) ? gridSize : 24,
          offsetX: parentRect
            ? (diagramRect.left - parentRect.left - borderLeft) / scale
            : 9,
          offsetY: parentRect
            ? (diagramRect.top - parentRect.top - borderTop) / scale
            : 31,
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
      viewBox={idPrefix === 'runtime' ? '0 0 920 380' : '0 0 920 560'}
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
      <image href={port.href} x={port.x} y={port.y} width={port.width} height={port.height} preserveAspectRatio="none" />
      <image href={agv.href} x={agv.x} y={agv.y} width={agv.width} height={agv.height} preserveAspectRatio="none" />
      <g className="diagram-conveyor" aria-label="세 개의 연결된 컨베이어 유닛">
        <image href={conveyors[0].href} x={conveyors[0].x} y={conveyors[0].y} width={conveyors[0].width} height={conveyors[0].height} preserveAspectRatio="none" />
        <image href={conveyors[1].href} x={conveyors[1].x} y={conveyors[1].y} width={conveyors[1].width} height={conveyors[1].height} preserveAspectRatio="none" />
        <image href={conveyors[2].href} x={conveyors[2].x} y={conveyors[2].y} width={conveyors[2].width} height={conveyors[2].height} preserveAspectRatio="none" />
        <rect className="diagram-conveyor__selection" x={conveyors[1].border.x} y={conveyors[1].border.y} width={conveyors[1].border.width} height={conveyors[1].border.height} rx="3" />
      </g>
      <image href={rack.href} x={rack.x} y={rack.y} width={rack.width} height={rack.height} preserveAspectRatio="none" />
      <g className="diagram-object-label" style={{ fontSize: unitSize * 0.34 }}>
        <text x={portCenter.x} y={portLabelY} textAnchor="middle">PORT-01</text>
        <text x={agvCenter.x} y={agvLabelY} textAnchor="middle">AGV-01</text>
        {conveyorCenters.map((center, index) => (
          <text
            key={`conveyor-label-${index}`}
            x={center.x}
            y={conveyorLabelY}
            textAnchor="middle"
          >
            <tspan x={center.x}>CONVEYOR-</tspan>
            <tspan x={center.x} dy="1.15em">{`0${index + 1}`}</tspan>
          </text>
        ))}
        <text x={rackCenter.x} y={rackLabelY} textAnchor="middle">RACK-01</text>
      </g>
      {idPrefix === 'modeling' && (
        <g className="diagram-connection">
          <path d={`M${portCenter.x} ${portCenter.y}L${agvCenter.x} ${agvCenter.y}`} markerEnd={`url(#${arrowId})`} />
          <path d={`M${agvCenter.x} ${agvCenter.y}L${conveyorCenters[0].x} ${conveyorCenters[0].y}`} markerEnd={`url(#${arrowId})`} />
          <path d={`M${conveyorCenters[0].x} ${conveyorCenters[0].y}L${conveyorCenters[1].x} ${conveyorCenters[1].y}`} markerEnd={`url(#${arrowId})`} />
          <path d={`M${conveyorCenters[1].x} ${conveyorCenters[1].y}L${conveyorCenters[2].x} ${conveyorCenters[2].y}`} markerEnd={`url(#${arrowId})`} />
          <path d={`M${conveyorCenters[2].x} ${conveyorCenters[2].y}L${rackCenter.x} ${rackCenter.y}`} markerEnd={`url(#${arrowId})`} />
        </g>
      )}
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
            <b>X : 3.5 / Y : 7.5 / Z : 1</b>
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

      <section className="simulation-screen simulation-screen--runtime" aria-label="런타임 제어 화면 예시">
        <div className="simulation-screen__header">
          <div className="screen-title">
            <span className="screen-title__mark screen-title__mark--runtime">▶</span>
            <strong>RUNTIME CONTROL UI</strong>
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
