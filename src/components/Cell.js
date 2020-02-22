import React from 'react'
import {StyledCell} from './styles/StyledCell'
import {TETROMINOS} from '../tetrominos'

const Cell = ({ type }) => (

<StyledCell type={type} color={TETROMINOS[type].color} />

)

//react.memo only reenders the cells that change
export default React.memo(Cell);