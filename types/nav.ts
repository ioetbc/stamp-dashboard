export interface NavItem {
  title: string
  href?: string
  disabled?: boolean
  external?: boolean
}

export type Troutes = "settings" | "profile" | "logout"
