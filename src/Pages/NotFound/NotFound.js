import React from 'react';
import sleeping from "../../images/404 .png"

const NotFound = () => {
    return (
        <div className='text-center'>
            <h2 className='text-danger'>Page Not Found</h2>
            <p className='text-primary'>Please Try Valid One</p>
            <img className='center w-50' src={sleeping} alt="" />
        </div>
    );
};
export default NotFound;