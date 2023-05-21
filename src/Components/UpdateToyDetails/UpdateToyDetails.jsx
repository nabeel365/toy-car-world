import React from 'react';
import { useLoaderData } from 'react-router-dom';
import swal from 'sweetalert';

const UpdateToyDetails = () => {

    const allMyToys = useLoaderData()
    console.log(allMyToys);
    
    const handleUpdate = (event) => {
        console.log('updated');
        event.preventDefault();
        const form = event.target;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        

        const updatedToy = {price, quantity, description};

        
        fetch(`https://cars-server-pi.vercel.app/update/${allMyToys._id}`, {
  method: 'PUT',
  headers: {
    'content-type': 'application/json'
  },
  body: JSON.stringify(updatedToy)
})
  .then(res => res.json())
  .then(data => {
    console.log(data);
    if (data.modifiedCount > 0) {
      swal('Updated successfully');
    }
  });





    };
    return (
        <div>
            

<form onSubmit={handleUpdate} className="max-w-sm mx-auto">
  <div className="mb-4">
    <label htmlFor="price" className="block text-gray-700">Price:</label>
    <input
      type="text"
      name="price"
      id="price"
      defaultValue={allMyToys.price}
      className="border border-gray-400 rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
    />
  </div>
  <div className="mb-4">
    <label htmlFor="quantity" className="block text-gray-700">Quantity:</label>
    <input
      type="text"
      name="quantity"
      id="quantity"
      defaultValue={allMyToys.quantity}
      className="border border-gray-400 rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
    />
  </div>
  <div className="mb-4">
    <label htmlFor="description" className="block text-gray-700">Description:</label>
    <input
      type="text"
      name="description"
      id="description"
      defaultValue={allMyToys.description}
      className="border border-gray-400 rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
    />
  </div>
  <div className="text-center">
    <input
      type="submit"
      value="Update"
      className="bg-red-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300"
    />
  </div>
</form>


        </div>
    );
};

export default UpdateToyDetails;



