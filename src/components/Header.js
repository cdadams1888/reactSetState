import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ message }) => {
    return (
        <h2 className="text-center">
            {message}
        </h2>
    );
};

// Prop Validation.
Header.propTypes = {
    // headerMessage: PropTypes.string.isRequired
    headerMessage: PropTypes.string
};

export default Header;


