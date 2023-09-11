import React from 'react';
import dynamic from 'next/dynamic';

function Click() {
    const handleClick = () => {
        console.log("clicked")
    }
    return (
        <div onClick={handleClick}>
            -click-
        </div>
    )
}
export default Click