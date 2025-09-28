import React from 'react'
import * as ReactstrapModule from 'reactstrap/dist/reactstrap.module.js'

const {
  Navbar: BaseNavbar,
  NavItem: BaseNavItem,
  Row: BaseRow,
  Col: BaseCol,
  CardTitle: BaseCardTitle,
  CardText: BaseCardText,
  Label: BaseLabel,
  InputGroup: BaseInputGroup,
  InputGroupText: BaseInputGroupText,
  ...restExports
} = ReactstrapModule

const createComponentWithPatchedDefaults = Component => {
  if (!Component) {
    return Component
  }

  const defaults = Component.defaultProps ? { ...Component.defaultProps } : {}

  if (Object.prototype.hasOwnProperty.call(Component, 'defaultProps')) {
    delete Component.defaultProps
  }

  const PatchedComponent = props => {
    return <Component {...{ ...defaults, ...props }} />
  }

  PatchedComponent.displayName = Component.displayName || Component.name

  if (Component.propTypes) {
    PatchedComponent.propTypes = Component.propTypes
  }

  return PatchedComponent
}

const Navbar = createComponentWithPatchedDefaults(BaseNavbar)
const NavItem = createComponentWithPatchedDefaults(BaseNavItem)
const Row = createComponentWithPatchedDefaults(BaseRow)
const Col = createComponentWithPatchedDefaults(BaseCol)
const CardTitle = createComponentWithPatchedDefaults(BaseCardTitle)
const CardText = createComponentWithPatchedDefaults(BaseCardText)
const Label = createComponentWithPatchedDefaults(BaseLabel)
const InputGroup = createComponentWithPatchedDefaults(BaseInputGroup)
const InputGroupText = createComponentWithPatchedDefaults(BaseInputGroupText)

export * from 'reactstrap/dist/reactstrap.module.js'

export {
  Navbar,
  NavItem,
  Row,
  Col,
  CardTitle,
  CardText,
  Label,
  InputGroup,
  InputGroupText
}

export default {
  ...restExports,
  Navbar,
  NavItem,
  Row,
  Col,
  CardTitle,
  CardText,
  Label,
  InputGroup,
  InputGroupText
}
