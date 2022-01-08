import React from 'react';

const Footer = ({tasks}) => {

    if (tasks.length) {
        return (
            <h3>
                Total tasks: {tasks.length}
            </h3>
        )
    }
    else {
    return (
        ''
    )
    }
};

export default Footer;
