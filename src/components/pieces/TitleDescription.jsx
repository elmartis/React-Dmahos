import React from 'react';
import '../../styles/pieces/TitleDescription.css';

function TitleDescription (props) {

    return (
        <div className='ContainerTitle'>
            <div className='DescriptionTitle'>{props.Title}</div>
        </div>
    )
}

export default TitleDescription;