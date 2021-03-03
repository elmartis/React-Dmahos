import React from 'react'
import '../../styles/pieces/InitButton.css';

 function InitButton (props) {
    return (
        <div className='ComebackContainer' onClick={props.Order}>
            <div className='RegresarText'>{props.Text}</div>
            <div className='TriangleContainer'>
                <div className='Triangle'></div>
            </div>
        </div>
    )
}

export default InitButton;