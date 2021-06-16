import React from 'react' 
import Alcohol from './Alcohol'

const Alcohols = (props) => {
    return (
        <div>
            {props.alcohols.map(alcohol => 
            <div key={alcohol.id}><Alcohol alcohol={alcohol}/></div>
            )}
        </div>
    )
}

export default Alcohols
