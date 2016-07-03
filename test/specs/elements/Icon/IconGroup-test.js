import IconGroup from 'src/elements/Icon/IconGroup'
import * as common from 'test/specs/commonTests'

describe.only('IconGroup', () => {
  common.isConformant(IconGroup)
  common.rendersChildren(IconGroup)
  common.propValueOnlyToClassName(IconGroup, 'size')
})
