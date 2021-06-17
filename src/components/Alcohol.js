import React from 'react';
import {Link} from 'react-router-dom';

const Alcohol = (props) => {
    let alcohol = props.alcohols.filter(alcohol => alcohol.id == props.match.params.id)[0]
    return(
        <li>
            {alcohol ? alcohol.name : null} - 
            {alcohol ? <a href='${alcohol.website}'/> : null}
            {/* Fix the link */}
        </li>
    )
}

export default Alcohol