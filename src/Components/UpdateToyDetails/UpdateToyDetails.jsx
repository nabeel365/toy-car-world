// import React from 'react';
// import { useLoaderData } from 'react-router-dom';

// const UpdateToyDetails = () => {

//     const allMyToys = useLoaderData()
//     console.log(allMyToys);
    
//     const handleUpdate = (event) => {
//         console.log('updated');
//         event.preventDefault();
//         const form = event.target;
//         const price = form.price.value


//     };
//     return (
//         <div>
//             <form onSubmit={handleUpdate}>
           

//             </form>

//             update
//         </div>
//     );
// };

// export default UpdateToyDetails;

//             {/* onClick={() => handleUpdate(toy_id)} */}


import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateToyDetails = () => {
  const allMyToys = useLoaderData();
  const [_id] = allMyToys;
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [description, setDescription] = useState('');

  const handleUpdate = (event) => {
    event.preventDefault();
    
    const toyId = _id; // Replace with the actual toy ID
    const updateData = {
      price,
      quantity,
      description,
    };

    fetch(`/toysUpdate/${toyId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updateData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Update successful:', data);
        // Handle successful update
      })
      .catch((error) => {
        console.error('Error updating toy:', error);
        // Handle error
      });
  };

  return (
    <div>
      <form onSubmit={handleUpdate}>
        <label>
          Price:
          <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
        </label>
        <br />
        <label>
          Quantity:
          <input type="text" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
        </label>
        <br />
        <label>
          Description:
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
        <br />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateToyDetails;
