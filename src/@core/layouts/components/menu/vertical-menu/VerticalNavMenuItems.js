// ** Vertical Menu Components
import VerticalNavMenuLink from './VerticalNavMenuLink'
import VerticalNavMenuGroup from './VerticalNavMenuGroup'
import VerticalNavMenuSectionHeader from './VerticalNavMenuSectionHeader'

// ** Utils
import {
  canViewMenuItem,
  canViewMenuGroup,
  resolveVerticalNavMenuItemComponent as resolveNavItemComponent
} from '@layouts/utils'

const VerticalMenuNavItems = props => {
  // ** Components Object
  const Components = {
    VerticalNavMenuLink,
    VerticalNavMenuGroup,
    VerticalNavMenuSectionHeader
  }

  const resolveItemKey = (item, index) => {
    if (item.id) {
      return item.id
    }

    if (item.navLink) {
      return item.navLink
    }

    if (Object.prototype.hasOwnProperty.call(item, 'header')) {
      if (typeof item.header === 'string') {
        const normalizedHeader = item.header.trim()
        if (normalizedHeader.length) {
          return `header-${normalizedHeader}-${index}`
        }
      }

      return `header-${index}`
    }

    if (item.title) {
      return `${item.title}-${index}`
    }

    return `nav-item-${index}`
  }

  // ** Render Nav Menu Items
  const RenderNavItems = props.items.map((item, index) => {
    const TagName = Components[resolveNavItemComponent(item)]
    const itemKey = resolveItemKey(item, index)

    if (item.children) {
      return (
        canViewMenuGroup(item) && (
          <TagName item={item} index={index} key={itemKey} {...props} />
        )
      )
    }
    return canViewMenuItem(item) && <TagName key={itemKey} item={item} {...props} />
  })

  return RenderNavItems
}

export default VerticalMenuNavItems
