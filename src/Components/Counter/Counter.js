import React, { useReducer } from 'react'
import { CounterButtonContainerStyled, CounterButtonStyled, CounterContainerStyled, CounterSpanStyled } from './CounterStyles'

import { AiOutlinePlusCircle, AiOutlineMinusCircle} from "react-icons/ai"
import { FiDivideCircle } from "react-icons/fi"
import { FaRegTimesCircle } from "react-icons/fa"
import { RiNumber5 } from "react-icons/ri"
import { BiReset } from "react-icons/bi"
import { TYPES } from '../../actionTypes/countActions'
import { counterInitialstate, counterReducer } from '../../reducers/countReducer'


export const Counter = () => {

    const [state,dispatch] = useReducer(counterReducer, counterInitialstate)

    const handleIncrement = () => {
        dispatch({type: TYPES.INCREMENT})
    }

    const handleDecrement = () => {
        dispatch({type: TYPES.DECREMENT})
    }

    const handleIncrement_5 = () => {
        dispatch({type: TYPES.INCREMENT_5})
    }

    const handleDecrement_5 = () => {
        dispatch({type: TYPES.DECREMENT_5})
    }
    
    const handleDivide = () => {
        dispatch({type: TYPES.DIVIDE})
    }

    const handleMultiplicate = () => {
        dispatch({type: TYPES.MULTIPLICATE})
    }

    const handleReset = () => {
        dispatch({type: TYPES.RESET})
    }

  return <CounterContainerStyled>
    <CounterButtonContainerStyled>
        <CounterButtonStyled onClick={handleDivide}> 
            <FiDivideCircle
                size="32px"
                color="white"
            /> 
        </CounterButtonStyled>

        <CounterButtonStyled onClick={handleDecrement_5}>
            <p>
                -<RiNumber5 size="32px"
                color="white"/>
            </p> 
        </CounterButtonStyled>
        <CounterButtonStyled onClick={handleDecrement}>
            <AiOutlineMinusCircle size="32px"
                color="white"/>
        </CounterButtonStyled>
        <CounterSpanStyled>
            {state.count}
        </CounterSpanStyled>
        <CounterButtonStyled onClick={handleIncrement}>
            <AiOutlinePlusCircle size="32px"
                color="white"/>
        </CounterButtonStyled>
        <CounterButtonStyled onClick={handleIncrement_5}>
            <p>
                +<RiNumber5 size="32px"
                color="white"/>
            </p>
        </CounterButtonStyled>
        <CounterButtonStyled onClick={handleMultiplicate}>
            <FaRegTimesCircle size="32px"
                color="white"/>
        </CounterButtonStyled>
    </CounterButtonContainerStyled>
    <BiReset 
        onClick={handleReset}
        cursor="pointer"
        size="38px"
        color="#F24c4c"
    />
  </CounterContainerStyled>
}
