import React from 'react';
import {RatingValueType} from "../../App";

export type ControlledRatingPropsType = {
    value: RatingValueType
    setRatingValue: (ratingValue: RatingValueType) => void
}

export function ControlledRating({value, setRatingValue}: ControlledRatingPropsType) {
    return (
        <div>
            <Star selected={value > 0} setRatingValue={setRatingValue} value={1}/>
            <Star selected={value > 1} setRatingValue={setRatingValue} value={2}/>
            <Star selected={value > 2} setRatingValue={setRatingValue} value={3}/>
            <Star selected={value > 3} setRatingValue={setRatingValue} value={4}/>
            <Star selected={value > 4} setRatingValue={setRatingValue} value={5}/>
        </div>
    )
}

export type StarPropsType = {
    selected: boolean
    value: RatingValueType
    setRatingValue: (ratingValue: RatingValueType) => void
}

function Star({selected, setRatingValue, value}: StarPropsType) {
    const spanOnClickHandler = () => setRatingValue(value)
    return <span onClick={spanOnClickHandler}>{selected ? <b>star </b> : 'star '}</span>
}