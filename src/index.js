import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';


const API_KEY = 'AIzaSyAwq27anlQ57tgPhFvu0mSEkosJPoM3Xl0';
// create new component that produces some html
// some html

const App = () => {
    return (
    <div>
        <SearchBar/>
    </div>
    );
}


// take this components generated html and put it on the page(dom)
ReactDOM.render(<App/>, document.querySelector('.container'));