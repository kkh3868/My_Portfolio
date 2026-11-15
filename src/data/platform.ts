import type { PlatformCapability, PlatformComponent } from '../types'

export const platformComponents: PlatformComponent[] = [
  {
    number: '01',
    name: 'Modeler Server',
    title: '2D 레이아웃에서 모델을 설계하다',
    description:
      '설비와 물류 객체를 2D 레이아웃에 배치하고 속성을 설정해 현장 모델을 구성합니다.',
    features: ['2D Layout Modeling', 'Object Placement', 'Property Configuration'],
    icon: 'layout',
  },
  {
    number: '02',
    name: 'Simulation Engine',
    title: '이산 사건 시뮬레이션을 실행하다',
    description:
      '모델과 설정 정보를 바탕으로 이벤트를 처리하고 공정·물류 흐름을 시뮬레이션합니다.',
    features: [
      'Discrete Event Simulation',
      'Material Flow Processing',
      'Model Execution',
    ],
    icon: 'engine',
  },
  {
    number: '03',
    name: 'Runtime Control UI',
    title: '실행 상태를 확인하고 제어하다',
    description:
      '시뮬레이션 진행 상황과 객체별 상태를 확인하고 실행을 제어하는 사용자 인터페이스입니다.',
    features: [
      'Runtime Monitoring',
      'Simulation Control',
      'Object Status Monitoring',
    ],
    icon: 'monitor',
  },
]

export const platformCapabilities: PlatformCapability[] = [
  {
    title: 'Object-Oriented Modeling',
    description:
      'Conveyor, Rack, MobileTransfer, ProcessingPort, Material 등의 기본 객체 모델을 기반으로 공정 및 물류 시스템을 구성하고 확장할 수 있습니다.',
    icon: 'objects',
    number: '01',
  },
  {
    title: 'Base Model Development',
    description:
      'Base Model이 제공하는 공통 이벤트와 헬퍼 함수를 활용해 C# 기반의 현장별 모델 로직을 개발할 수 있습니다.',
    icon: 'framework',
    number: '02',
  },
  {
    title: '2D Material Flow Visualization',
    description:
      'Top-view 2D 레이아웃에서 설비 배치와 객체 상태, 자재 이동 흐름을 확인합니다.',
    icon: 'flow',
    number: '03',
  },
]
