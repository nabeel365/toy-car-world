import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateToyDetails = () => {

    const allMyToys = useLoaderData()
    console.log(allMyToys);
    
    // const handleUpdate = (event) => {
    //     console.log('updated');
    //     event.preventDefault();
    //     const form = event.target;
    //     const price = form.price.value


    // };
    return (
        <div>
            {/* <form onSubmit={handleUpdate}>
           
            onClick={() => handleUpdate(toy_id)}

            </form> */}

            sdjcb
        </div>
    );
};

export default UpdateToyDetails;