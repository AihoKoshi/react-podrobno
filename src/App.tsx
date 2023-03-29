import React, {useState} from 'react';
import './App.css';
import {ControlledAccordion} from './components/Accordion/ControlledAccordion';
import {ControlledRating} from './components/Rating/ControlledRating';
import {UnControlledOnOff} from './components/OnOff/UnControlledOnOff';
import {UnControlledAccordion} from './components/Accordion/UnControlledAccordion';
import {UnControlledRating} from './components/Rating/UncontrolledRating';
import {ControlledOnOff} from "./components/OnOff/ControlledOnOff";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [collapsed, setCollapsed] = useState<boolean>(false)
    let [on, setOn] = useState<boolean>(false);

    return (
        <div className={'App'}>
            <PageTitle
                title={'Button ON|OFF uncontrolled'}
            />
            <UnControlledOnOff/>
            <PageTitle
                title={'Uncontrolled components'}
            />
            <UnControlledAccordion
                title={'Menu'}
            />
            <UnControlledAccordion
                title={'Users'}
            />
            <UnControlledRating/>
            <PageTitle
                title={'Button ON|OFF controlled'}
            />
            <ControlledOnOff
                on={on}
                setOn={setOn}
            />
            <PageTitle
                title={'Controlled components'}
            />
            <ControlledAccordion
                title={'Menu'}
                collapsed={collapsed}
                setCollapsed={setCollapsed}
            />
            <ControlledAccordion
                title={'Users'}
                collapsed={collapsed}
                setCollapsed={setCollapsed}/>
            <ControlledRating
                value={ratingValue}
                setRatingValue={setRatingValue}
            />
            {/*<ControlledRating value={1}/>*/}
            {/*<ControlledRating value={2}/>*/}
            {/*<ControlledRating value={3}/>*/}
            {/*<ControlledRating value={4}/>*/}
            {/*<ControlledRating value={5}/>*/}
        </div>
    );
}

export type PageTitleType = {
    title: string
}

function PageTitle({title}: PageTitleType) {
    return <h3 className={'partition'}>{title}</h3>
}

export default App;
