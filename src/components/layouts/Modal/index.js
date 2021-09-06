import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'

import { ModalContainer, BlockOfDescription } from './styles'

const Modal = ({ children }) => {
  return (
    <ModalContainer>
      <BlockOfDescription>{children}</BlockOfDescription>
    </ModalContainer>
  )
}

const ModalPortal = ({ children }) => {
  return createPortal(
    <Modal>{children}</Modal>,
    document.getElementById('modal')
  )
}

ModalPortal.propTypes = {
  children: PropTypes.node.isRequired,
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ModalPortal
