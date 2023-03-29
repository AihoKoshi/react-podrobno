import React, {useState} from 'react';

export type UnControlledAccordionPropsType = {
    title: string
}

export const UnControlledAccordion = ({title}: UnControlledAccordionPropsType) => {

    let [collapsed, setCollapsed] = useState<boolean>(false);
    const toggleOnclickHandler = () => setCollapsed(!collapsed)

    return (
        <div>
            <AccordionTitle title={title} toggleOnclickHandler={toggleOnclickHandler}/>
            {!collapsed && <AccordionBody/>}
        </div>
    )
};

export type AccordionTitlePropsType = {
    title: string
    toggleOnclickHandler: () => void
}

function AccordionTitle({title, toggleOnclickHandler}: AccordionTitlePropsType) {

    return <h3 onClick={toggleOnclickHandler}>{title}</h3>
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