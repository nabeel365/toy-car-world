import React from 'react';
import { useLoaderData } from 'react-router-dom';
import pageTitle from '../pageTitle/pageTitle';

const ToysDetails = () => {
  pageTitle('Toy Details')
  const toysInfo = useLoaderData();
  console.log(toysInfo);
 

  return (
    <div className="sm:flex justify-center">
      {toysInfo.name}
      <div className="sm:grid ">
          <div key={toysInfo._id} className="p-6 bg-white rounded-lg shadow-lg">
            <img src={toysInfo.pictureUrl} alt={toysInfo.name} className="mb-4" />
            <h2 className="text-xl font-semibold">{toysInfo.name}</h2>
            <p className="text-gray-600 mb-2">Seller: {toysInfo.sellerName}</p>
            <p className="text-gray-600 mb-2">Seller Email: {toysInfo.sellerEmail}</p>
            <table className="w-full mb-4">
              <tbody>
                <tr>
                  <td className="font-semibold">Price:</td>
                  <td>${toysInfo.price}</td>
                </tr>
                <tr>
                  <td className="font-semibold">Rating:</td>
                  <td>{toysInfo.rating}</td>
                </tr>
                <tr>
                  <td className="font-semibold">Available Quantity:</td>
                  <td>{toysInfo.quantity}</td>
                </tr>
              </tbody>
            </table>
            <p>
              <strong>Description:</strong> {toysInfo.description}
            </p>
          </div>
      </div>
    </div>
  );
};

export default ToysDetails;
