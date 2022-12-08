import React from 'react';

export type RatingPropsType = {
    value: 0 | 1 | 2 | 3 | 4 | 5
}

export function ControlledRating(props: RatingPropsType) {
    return (
        <div>
            <Star selected={props.value > 0}/>
            <Star selected={props.value > 1}/>
            <Star selected={props.value > 2}/>
            <Star selected={props.value > 3}/>
            <Star selected={props.value > 4}/>
        </div>
    )
}

export type StarPropsType = {
    selected: boolean
}

function Star(props: StarPropsType) {
    return props.selected ? <span><b>star </b></span> : <span>star </span>
    // if (props.selected === true) {
    //     return <span><b>star </b></span>
    // } else {
    //     return <span>star </span>
    // }
}