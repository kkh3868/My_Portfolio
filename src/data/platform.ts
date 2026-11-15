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
    title: 'Lightweight 2D Simulation',
    description:
      '3D 렌더링 없이 2D 평면 모델을 사용해 GPU 의존도를 낮추고, 그래픽 성능이 제한된 컴퓨터에서도 운영하기 쉽습니다.',
    icon: 'layout',
    number: '01',
  },
  {
    title: 'Parallel Event Processing',
    description:
      '이벤트 처리를 병렬 스레드로 분산해 멀티코어 CPU를 활용하도록 설계했습니다.',
    icon: 'engine',
    number: '02',
  },
  {
    title: 'Portable Project Data',
    description:
      'SQLite 기반으로 프로젝트 데이터를 관리해 별도 DB 서버 설치 없이 프로젝트를 복제하고 옮기기 쉽습니다.',
    icon: 'objects',
    number: '03',
  },
  {
    title: 'Cross-platform Server Runtime',
    description:
      '.NET Core 기반 모델링 서버와 시뮬레이션 엔진은 Linux 등 다양한 OS에서 실행할 수 있습니다.',
    note: '제어 UI는 WPF 기반으로 크로스플랫폼을 지원하지 않습니다.',
    icon: 'framework',
    number: '04',
  },
  {
    title: 'Multi-user Runtime Control',
    description:
      'Kafka 기반 스트리밍·제어 구조로 여러 사용자가 시뮬레이션을 함께 모니터링하고 제어할 수 있습니다.',
    icon: 'monitor',
    number: '05',
  },
  {
    title: 'C# Model Development',
    description:
      'Base Model의 공통 이벤트와 공통 로직을 활용해 현장별 물류·공정 모델을 C#으로 개발할 수 있습니다.',
    icon: 'document',
    number: '06',
  },
]
