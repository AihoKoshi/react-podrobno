import React from 'react';

export type AccordionPropsType = {
    title: string
    collapsed: boolean
}

export function Accordion(props: AccordionPropsType) {
    if (props.collapsed) {
        return <AccordionTitle title={props.title}/>
    } else {
        return (
            <div>
            <AccordionTitle title={props.title}/>
        <AccordionBody/>
            </div>
        )
    }
}

export type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3>{props.title}</h3>
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}