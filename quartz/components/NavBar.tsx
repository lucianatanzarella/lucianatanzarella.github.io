import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

const links = [
  { name: "Home", href: "/", icon: "🏠" },
  { name: "About Me", href: "/About-me", icon: "🌸" },
  { name: "Tags", href: "/tags", icon: "🏷️"  },
]

const NavBar: QuartzComponentConstructor = () => {
    return (
      <nav class="navbar">
        <ul>
          {links.map((link) => (
            <li key={link.href} class="group">
              <a href={link.href} class="nav-link">
                <span class="icon">{link.icon}</span>
              </a>
              <span class="nav-tooltip">{link.name}</span>
            </li>
          ))}
        </ul>
      </nav>
    )
  }

export default (() => NavBar) satisfies QuartzComponentConstructor
