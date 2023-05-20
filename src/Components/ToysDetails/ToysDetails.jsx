import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ToysDetails = () => {
  const toysInfo = useLoaderData();

  return (
    <div className="sm:flex justify-center">
      <div className="sm:grid ">
        {toysInfo.map((toy) => (
          <div key={toy.id} className="p-6 bg-white rounded-lg shadow-lg">
            <img src={toy.pictureUrl} alt="Toy" className="mb-4" />
            <h2 className="text-xl font-semibold">{toy.name}</h2>
            <p className="text-gray-600 mb-2">Seller: {toy.sellerName}</p>
            <p className="text-gray-600 mb-2">Seller Email: {toy.sellerEmail}</p>
            <table className="w-full mb-4">
              <tbody>
                <tr>
                  <td className="font-semibold">Price:</td>
                  <td>${toy.price}</td>
                </tr>
                <tr>
                  <td className="font-semibold">Rating:</td>
                  <td>{toy.rating}</td>
                </tr>
                <tr>
                  <td className="font-semibold">Available Quantity:</td>
                  <td>{toy.quantity}</td>
                </tr>
              </tbody>
            </table>
            <p>
              <strong>Description:</strong> {toy.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToysDetails;
