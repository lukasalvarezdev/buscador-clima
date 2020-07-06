import React from 'react';
import PropTypes from 'prop-types';

const Header = ({titulo}) => ( 
    <header>
        <nav>
            <div className="nav-wrapper light-blue darken-2">
                <a 
                    href="#!" 
                    className="brand-logo"
                    onClick={ e => e.preventDefault() }
                >{titulo}</a>
            </div>
        </nav>
    </header>
);

Header.propTypes = {
    titulo: PropTypes.string.isRequired
}
 
export default Header;