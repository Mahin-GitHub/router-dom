import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <ul>
                <li> <Link to={'/'}>Home Default</Link> </li>
                <li> <Link to={'/Home'}>Home</Link> </li>
                <li> <Link to={'/About'}>About</Link> </li>
                <li> <Link to={'/Contact'}>Contact</Link> </li>
                <li> <Link to={'/*'}>NoMatch</Link> </li>
            </ul>
        </div>
    );
};

export default Header;