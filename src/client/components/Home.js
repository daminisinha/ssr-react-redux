import React from 'react';

const Home = () =>{
    return (
    <div>
        <h5>
        I'm the extremely best home component
        </h5>
        <button onClick={() => console.log('Hi there!')}>
            Click me!
        </button>
    </div>
    )
    
};

export default Home;