import React from 'react';
import Header from '../Header/Header';
import './NoMatch.css'

const NoMatch = () => {
    return (
        <div className='NoMatch'>
            <Header></Header>
            <h1>No Match ... This is wrong URL ... Plese Enter the correct URL</h1>
        </div>
    );
};

export default NoMatch;