import React from 'react';

export type ControlledAccordionPropsType = {
    title: string
    collapsed: boolean
    setCollapsed: (collapsed: boolean) => void
}

export function ControlledAccordion({title, collapsed, setCollapsed}: ControlledAccordionPropsType) {
    const accordCollapseOnClickHandler = () => setCollapsed(!collapsed)
    return <div>
        <AccordionTitle
            title={title}
            accordCollapseOnClickHandler={accordCollapseOnClickHandler}
        />
        {!collapsed && <AccordionBody/>}
    </div>
}

export type AccordionTitlePropsType = {
    title: string
    accordCollapseOnClickHandler: () => void
}

function AccordionTitle({title, accordCollapseOnClickHandler}: AccordionTitlePropsType) {

    return <h3
        onClick={accordCollapseOnClickHandler}>
        {title}
    </h3>
}

function AccordionBody() {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}