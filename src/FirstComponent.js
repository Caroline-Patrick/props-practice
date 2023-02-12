import React from 'react';

function FirstComponent(props) {
    console.log("This is First Component Props****", props.items)
    // don't say this.props b/c this isn't a class based component. It gets props from w/e arg we passed in app.js when we called FirstComponent
    return (
       <div>
        <h1>This is our Listing Component </h1>
        <ul>{props.items.map((item, index)=> {
            return <li key={index}>{item}</li>
          })}</ul>
        </div>
    )
};

export default FirstComponent;