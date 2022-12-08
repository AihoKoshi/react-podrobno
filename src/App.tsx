import React from 'react';
import './App.css';
import {ControlledAccordion} from './components/Accordion/ControlledAccordion';
import {ControlledRating} from './components/Rating/ControlledRating';
import {OnOff} from './components/OnOff/OnOff';
import {UnControlledAccordion} from './components/Accordion/UnControlledAccordion';
import {UnControlledRating} from './components/Rating/UncontrolledRating';


function App() {
    return (
        <div className={'App'}>
            <PageTitle title={'This is APP component'}/>
            <ControlledRating value={4}/>
            <UnControlledRating/>
            <ControlledAccordion title={'Menu'} collapsed={false}/>
            <ControlledAccordion title={'Users'} collapsed={false}/>
            <UnControlledAccordion title={'Menu'}/>
            <UnControlledAccordion title={'Users'}/>
            <ControlledRating value={1}/>
            <ControlledRating value={2}/>
            <ControlledRating value={3}/>
            <ControlledRating value={4}/>
            <ControlledRating value={5}/>
            <OnOff/>
        </div>
    );
}

export type PageTitleType = {
    title: string
}

function PageTitle(props: PageTitleType) {
    return <h1>{props.title}</h1>
}

export default App;
