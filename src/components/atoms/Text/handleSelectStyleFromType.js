const { styles } = require('config/styles')
const { TEXT_TYPES } = require('config/variableOfComponents')

const lowTextStyle = `
@media (min-width: ${styles.desktopQuery}) {
    padding-top: 16px;
    padding-bottom: 16px;
    margin: 0;
    max-width: 1200px;
  }
`

const normalTextStyle = `
  padding-top: 48px;
  padding-bottom: 40px;
`

const allStylesFromType = {
  [TEXT_TYPES.low]: lowTextStyle,
  [TEXT_TYPES.normal]: normalTextStyle,
  default: normalTextStyle,
}

export const handleSelectStyleFromType = (type) => {
  return allStylesFromType[type] || allStylesFromType.default
}
