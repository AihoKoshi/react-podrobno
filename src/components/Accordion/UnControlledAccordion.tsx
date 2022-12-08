import React, {useState} from 'react';

export type UnAccordionPropsType = {
    title: string
}

export const UnControlledAccordion = (props: UnAccordionPropsType) => {

    let [collapsed, setCollapsed] = useState<boolean>(false);

    const toggleOnclickHandler = () => {
        setCollapsed(!collapsed)
    }

    return (
        <div>
            <AccordionTitle title={props.title} toggleOnclickHandler={toggleOnclickHandler}/>
            {!collapsed && <AccordionBody/>}
        </div>
    )
};

export type AccordionTitlePropsType = {
    title: string
    toggleOnclickHandler: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {

    return <h3 onClick={props.toggleOnclickHandler}>{props.title}</h3>
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