import React from 'react' 
import {Link} from 'react-router-dom'

const Alcohols = (props) => {
    return (
        <div>
            {props.alcohols.map(alcohol => 
            <h3 key={alcohol.id}>
                <Link to={`/alcohols/${alcohol.id}`}>{alcohol.name}</Link>--
                {alcohol ? <a href={`${alcohol.website}`} target='_blank'>Website about {alcohol.name}</a> : null}
                <br></br>
            </h3>
            )}
        </div>
    )
}

export default Alcohols
