import React from 'react';
import ReactDOM from 'react-dom';
import 'sldsCss';

const App = () => {
    return (
        <div style={{ width: '960px', margin: '50px auto'}}>
            <h1 className="slds-text-heading_large">Hello React</h1>
        </div>
    );
};

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
