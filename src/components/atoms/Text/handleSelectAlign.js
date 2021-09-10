import { TEXT_ALIGN } from 'config/variableOfComponents'

export const handleSelectAlign = (align) => {
  switch (align) {
    case TEXT_ALIGN.left:
      return 'text-align: left;'

    case TEXT_ALIGN.center:
      return 'text-align: center;'

    case TEXT_ALIGN.rigth:
      return 'text-align: rigth;'

    default:
      return 'text-align: center;'
  }
}
