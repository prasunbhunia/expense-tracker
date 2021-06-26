import React from 'react';

import './CustomButton.scss';

const CustomButton = ({children, isGoogle, ...otherprops}) => (
    <button className='custom-button' {...otherprops}>
        {children}
    </button>
)

export default CustomButton;