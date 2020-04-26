import React from 'react';
import { Link } from 'react-router-dom';

const Home = (props) => {
    return(
        <div>
            <h1>"Home" i am in home</h1>
            <Link to='/post/link-1'> Link1 </Link>
            <Link to='/post/link-2'> Link2 </Link>
            <Link to='/post/link-3'> Link3 </Link>
       </div>
    )
}
export default Home
