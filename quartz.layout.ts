import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import NavBar from "./quartz/components/NavBar"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [NavBar()],
  afterBody: [
    Component.Comments({
    provider: 'giscus',
    options: {
      // from data-repo
      repo: 'lucianatanzarella/lucianatanzarella.github.io',
      // from data-repo-id
      repoId: 'R_kgDON4DA8A',
      // from data-category
      category: 'Announcements',
      // from data-category-id
      categoryId: 'DIC_kwDON4DA8M4CnBIu-Xg6',
    }
  }),],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/jackyzha0/quartz"
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Darkmode(),
    Component.Explorer(),
  ],
  right: [
    Component.Search(),
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Darkmode(),
    Component.Explorer(),
  ],
  right: [Component.Search(),],
}
