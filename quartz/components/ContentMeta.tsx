import { Date, getDate } from "./Date"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import readingTime from "reading-time"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"
import { JSX } from "preact"
import style from "./styles/contentMeta.scss"

interface ContentMetaOptions {
  /**
   * Whether to display reading time
   */
  showReadingTime: boolean
  showComma: boolean
  }

const defaultOptions: ContentMetaOptions = {
  showReadingTime: true,
  showComma: true,
}

export default ((opts?: Partial<ContentMetaOptions>) => {
  // Merge options with defaults
  const options: ContentMetaOptions = { ...defaultOptions, ...opts }

  function ContentMetadata({ cfg, fileData, displayClass }: QuartzComponentProps) {
    const text = fileData.text
    const showReadingTime = fileData.frontmatter?.showReadingTime ?? true  // Read from frontmatter

    // Reading showDate from note: if showDate in frontmatter is false, it stays false, otherwise it defaults to true
    const showDate: boolean = fileData.frontmatter?.showDate === false ? false : true

    if (text) {
      const segments: (string | JSX.Element)[] = []
      
      if (fileData.dates && showDate) {
        segments.push(
          <Date date={getDate(cfg, fileData)!} locale={cfg.locale} showDate={!!showDate} /> // to ensure that showDate is always a boolean
        )
      }

      // Display reading time if enabled
      if (showReadingTime) {
        const { minutes, words: _words } = readingTime(text)
        const displayedTime = i18n(cfg.locale).components.contentMeta.readingTime({
          minutes: Math.ceil(minutes),
        })
        segments.push(<span>{displayedTime}</span>)
      }

      return (
        <p show-comma={options.showComma} class={classNames(displayClass, "content-meta")}>
          {segments}
        </p>
      )
    } else {
      return null
    }
  }

  ContentMetadata.css = style

  return ContentMetadata
}) satisfies QuartzComponentConstructor
