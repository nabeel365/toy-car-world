import React, { createContext, useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import swal from 'sweetalert';
import pageTitle from '../pageTitle/pageTitle';

const AddAToy = () => {

  pageTitle('Add A Toy')

  // const [user] = useContext(AuthContext)
  // console.log(user);

  const [toyData, setToyData] = useState({
    pictureUrl: '',
    name: '',
    sellerName: '',
    sellerEmail: '',
    subCategory: '',
    price: '',
    rating: '',
    quantity: '',
    description: '',
  });

  const handleInputChange = (e) => {
    setToyData({
      ...toyData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    const pictureUrl = form.elements.pictureUrl.value;
    const name = form.elements.name.value;
    const sellerName = form.elements.sellerName.value;
    const sellerEmail = form.elements.sellerEmail.value;
    const subCategory = form.elements.subCategory.value;
    const price = form.elements.price.value;
    const rating = form.elements.rating.value;
    const quantity = form.elements.quantity.value;
    const description = form.elements.description.value;

    const toyDetails = {
      pictureUrl,
      name,
      sellerName,
      sellerEmail,
      subCategory,
      price,
      rating,
      quantity,
      description};


    fetch('http://localhost:1000/toys', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(toyDetails)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })



    console.log(toyData);


    // form.reset();

    setToyData({
      pictureUrl: '',
      name: '',
      sellerName: '',
      sellerEmail: '',
      subCategory: '',
      price: '',
      rating: '',
      quantity: '',
      description: '',
    });
  };


  const toyAdded = () => {
    swal('Toy added Successfully !!! You can add more Toys...')
    
  }

  return (
    <div className=''> 


    <div className="max-w-md mx-auto mt-10 ">
      <h1 className="text-3xl font-bold mb-5">Add A Toy</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4 ">
          <label htmlFor="pictureUrl" className="block mb-2 font-bold">Picture URL:</label>
          <input
            type="text"
            name="pictureUrl"
            value={toyData.pictureUrl}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
          />
        </div>



        <div className="mb-4">
          <label htmlFor="name" className="block mb-2 font-bold">Toy Name:</label>
          <input
            type="text"
            name="name"
            value={toyData.name}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="sellerName" className="block mb-2 font-bold">Seller Name:</label>
          <input
            type="text"
            name="sellerName"
            value={toyData.sellerName}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="sellerEmail" className="block mb-2 font-bold">Seller Email:</label>
          <input
            type="email"
            name="sellerEmail"
            value={toyData.sellerEmail}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
            // defaultValue={}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="subCategory" className="block mb-2 font-bold">Sub-category:</label>
          <input
            type="text"
            name="subCategory"
            value={toyData.subCategory}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="price" className="block mb-2 font-bold">Price:</label>
          <input
            type="number"
            name="price"
            value={toyData.price}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="rating" className="block mb-2 font-bold">Rating:</label>
          <input
            type="number"
            name="rating"
            value={toyData.rating}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="quantity" className="block mb-2 font-bold">Available Quantity:</label>
          <input
            type="number"
            name="quantity"
            value={toyData.quantity}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block mb-2 font-bold">Description:</label>
          <textarea
            name="description"
            value={toyData.description}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
          />
        </div>

        <button
        onClick={toyAdded}
          type="submit"
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
        >
          Add Toy
        </button>
      </form>
    </div>


</div>

  );
};

export default AddAToy;



















