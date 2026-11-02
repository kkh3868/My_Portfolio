export type IconName =
  | 'layout'
  | 'engine'
  | 'monitor'
  | 'objects'
  | 'framework'
  | 'flow'

export interface PlatformComponent {
  number: string
  name: string
  title: string
  description: string
  features: string[]
  icon: IconName
}

export interface PlatformCapability {
  title: string
  description: string
  icon: IconName
  number: string
}
