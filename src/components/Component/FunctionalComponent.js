import React from 'react';

function FunComp({ locale }) {
    return (
        <div>
            <h2>Hello Bangladesh</h2>
            <p>It is {new Date().toLocaleTimeString(locale)}</p>
        </div>
    );
}

export default FunComp;
