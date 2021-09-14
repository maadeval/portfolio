import PropTypes from 'prop-types'

import { TITLE_TYPES } from 'config/variableOfComponents'

import Title from 'components/atoms/Title'
import TecnologyBox from 'components/atoms/TecnologyBox'

import { ListOfTecnologies, TecnologiesAndSubDescriptionBox } from './styles'

const ListOfTecnologiesAndTitle = ({ tecnologies = [], title }) => {
  return (
    <TecnologiesAndSubDescriptionBox>
      <Title type={TITLE_TYPES.secondary}>{title}</Title>
      <ListOfTecnologies>
        {tecnologies &&
          tecnologies.map(({ name, icon }) => (
            <TecnologyBox key={name} name={name} icon={icon} />
          ))}
      </ListOfTecnologies>
    </TecnologiesAndSubDescriptionBox>
  )
}

ListOfTecnologiesAndTitle.propTypes = {
  title: PropTypes.string,
  tecnologies: PropTypes.arrayOf(PropTypes.object),
}

export default ListOfTecnologiesAndTitle
