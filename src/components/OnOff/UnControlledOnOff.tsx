import React, {useState} from 'react';

export const UnControlledOnOff = () => {

    let [on, setOn] = useState<boolean>(false);

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        padding: '2px',
        backgroundColor: on ? 'green' : 'white',
    };
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        padding: '2px',
        backgroundColor: on ? 'white' : 'red',
    };
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: on ? 'green' : 'red'
    };

    const btnOnClickHandler = () => setOn(!on)

    return (
        <div>
            <div style={onStyle} onClick={btnOnClickHandler}>ON</div>
            <div style={offStyle} onClick={btnOnClickHandler}>OFF</div>
            <div style={indicatorStyle}></div>
            <div style={{color: 'red'}}><b>{on.toString()}</b></div>
        </div>
    );
};