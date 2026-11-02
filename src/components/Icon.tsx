import type { ReactNode } from 'react'
import type { IconName } from '../types'

const icons: Record<IconName, ReactNode> = {
  layout: (
    <>
      <rect x="3.5" y="4" width="17" height="16" rx="2" />
      <path d="M8 4v16M8 9h12M12 13h2M16 13h2M12 17h2M16 17h2" />
    </>
  ),
  engine: (
    <>
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.64 5.64l2.12 2.12m8.48 8.48 2.12 2.12m0-12.72-2.12 2.12m-8.48 8.48-2.12 2.12" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1" />
    </>
  ),
  monitor: (
    <>
      <rect x="3" y="4" width="18" height="13" rx="2" />
      <path d="M8 21h8m-4-4v4M7 13l3-3 2 2 4-5" />
    </>
  ),
  objects: (
    <>
      <rect x="4" y="4" width="7" height="7" rx="1.5" />
      <rect x="14" y="4" width="6" height="7" rx="1.5" />
      <rect x="4" y="14" width="7" height="6" rx="1.5" />
      <path d="M14 17h6m-3-3v6" />
    </>
  ),
  framework: (
    <>
      <path d="M12 3 4 7.5v9L12 21l8-4.5v-9L12 3Z" />
      <path d="m4.5 7.8 7.5 4.4 7.5-4.4M12 12.2V21" />
    </>
  ),
  flow: (
    <>
      <circle cx="5" cy="6" r="2" />
      <circle cx="19" cy="18" r="2" />
      <path d="M7 6h4a4 4 0 0 1 4 4v4a4 4 0 0 0 4 4M5 8v8a2 2 0 0 0 2 2h10" />
      <path d="m15 17 2 2-2 2" />
    </>
  ),
}

interface IconProps {
  name: IconName
  size?: number
}

export function Icon({ name, size = 24 }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {icons[name]}
    </svg>
  )
}
