import type { PlatformCapability, PlatformComponent } from '../types'

export const platformComponents: PlatformComponent[] = [
  {
    number: '01',
    name: 'Modeler Server',
    title: '공정과 물류를 설계하다',
    description:
      '공정 설비와 물류 유닛을 2D 레이아웃에 배치하고 각 객체의 속성을 설정하여 시뮬레이션 모델을 구성하는 모델링 도구입니다.',
    features: ['2D Layout Modeling', 'Object Placement', 'Property Configuration'],
    icon: 'layout',
  },
  {
    number: '02',
    name: 'Simulation Engine',
    title: '가상 환경에서 시뮬레이션을 수행하다',
    description:
      '모델링된 객체와 설정 정보를 기반으로 공정 및 물류 흐름을 연산하고 시뮬레이션을 실행하는 엔진 서버입니다.',
    features: [
      'Discrete Event Simulation',
      'Material Flow Processing',
      'Simulation Execution',
    ],
    icon: 'engine',
  },
  {
    number: '03',
    name: 'Runtime Control UI',
    title: '시뮬레이션을 모니터링하고 제어하다',
    description:
      '시뮬레이션 진행 상황과 객체별 상태를 확인하고 실행을 모니터링 및 제어하는 사용자 인터페이스입니다.',
    features: [
      'Runtime Monitoring',
      'Simulation Control',
      'Object Status Visualization',
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
    title: 'Extensible Simulation Framework',
    description:
      '공통 시뮬레이션 프레임워크를 기반으로 다양한 공정 및 물류 객체를 확장하고 실행할 수 있도록 설계합니다.',
    icon: 'framework',
    number: '02',
  },
  {
    title: '2D Material Flow Visualization',
    description:
      'Top-view 2D 레이아웃에서 설비와 물류 유닛의 배치, 상태 및 자재 이동 흐름을 직관적으로 확인합니다.',
    icon: 'flow',
    number: '03',
  },
]
