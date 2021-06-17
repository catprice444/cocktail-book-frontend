import React from 'react' 
import {Link} from 'react-router-dom'

const Alcohols = (props) => {
    return (
        <div>
            {props.alcohols.map(alcohol => 
            <li key={alcohol.id}>
                <Link to={`/alcohols/${alcohol.id}`}>{alcohol.name}</Link>
            </li>
            )}
        </div>
    )
}

export default Alcohols
