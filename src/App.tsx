import React from 'react';
import './App.css';
import {Accordion} from './components/Accordion/Accordion';
import {Rating} from './components/Rating/Rating';


function App() {
    console.log('App rendering')
    return (
        <div>
            <PageTitle title={'This is APP component'}/>
            <Rating value={0}/>
            <Accordion title={'Menu'}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
        </div>
    );
}

function PageTitle(props: any) {
    return <h1>{props.title}</h1>
}

export default App;
