import React from 'react' 

const Alcohols = (props) => {
    return (
        <div>
            {props.alcohols.map(alcohol => <li key={alcohol.id}> {alcohol.name} - {alcohol.website} </li>)}
        </div>
    )
}

export default Alcohols