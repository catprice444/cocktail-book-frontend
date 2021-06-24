import React from 'react' 
import {Link} from 'react-router-dom'

const Alcohols = (props) => {
    return (
        <div>
            {props.alcohols.map(alcohol => 
            <h3 key={alcohol.id}>
                <Link to={`/alcohols/${alcohol.id}`}>{alcohol.name}</Link>
                <p>{alcohol ? <a href={`${alcohol.website}`} target='_blank'>Learn more about {alcohol.name}</a> : null} </p>
                <br></br>
            </h3>
            )}
        </div>
    )
}

export default Alcohols
