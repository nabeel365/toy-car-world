import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ToysDetails = () => {


    const toysInfo = useLoaderData()
    console.log(toysInfo);

    return (
        <div>
            details
        </div>
    );
};

export default ToysDetails;