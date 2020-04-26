import React from 'react';
import { Link } from 'react-router-dom';


const Test = ({match}) => {
   
    return (
          <div>
            <h1>"test" test is always mine {match.params.postId}</h1>
            <Link to='/'>Back to Main Menu</Link>
        </div>       
    );
};

export default Test;