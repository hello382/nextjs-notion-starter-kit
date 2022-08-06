import * as types from './types'

export interface SiteConfig {
  rootNotionPageId: 4efa5622aac84cfe895cab8ee2b51456
  rootNotionSpaceId?: string

  name: 荣的博客
  domain: https://www.notion.so/123-4efa5622aac84cfe895cab8ee2b51456
  author: string
  description?: string
  language?: string

  twitter?: string
  github?: string
  linkedin?: string
  newsletter?: string
  youtube?: string
  zhihu?: string

  defaultPageIcon?: string | null
  defaultPageCover?: string | null
  defaultPageCoverPosition?: number | null

  isPreviewImageSupportEnabled?: boolean
  isTweetEmbedSupportEnabled?: boolean
  isRedisEnabled?: boolean
  isSearchEnabled?: boolean

  includeNotionIdInUrls?: boolean
  pageUrlOverrides?: types.PageUrlOverridesMap
  pageUrlAdditions?: types.PageUrlOverridesMap

  navigationStyle?: types.NavigationStyle
  navigationLinks?: Array<NavigationLink>
}

export interface NavigationLink {
  title: string
  pageId?: string
  url?: string
}

export const siteConfig = (config: SiteConfig): SiteConfig => {
  return config
}
