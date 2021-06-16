import React from 'react'

const Alcohol = (props) => {
    return(
        <li>
            {props.alcohol.name} - {props.alcohol.website}
        </li>
    )
}

export default Alcohol