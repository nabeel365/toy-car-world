
import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const MyToys = () => {
  const addedToys = useLoaderData();
  console.log(addedToys);

  const [myToys, setMyToys] = useState([]);

  const { user } = useContext(AuthContext);
  const url = `http://localhost:1000/toys?email=${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const userToys = data.filter((toy) => toy.sellerEmail === user?.email);
        setMyToys(userToys);
      });
  }, [url, user?.email]);

  const handleDelete = (_id) => {
    console.log('deleted', _id);
    fetch(`http://localhost:1000/toys/${_id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          alert('Deleted successfully');
          const remaining = myToys.filter((toy) => toy._id !== _id);
          setMyToys(remaining);
        }
      });
  };

  return (
    <div className="container mx-auto p-4">
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Picture</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Seller Name</th>
              <th className="px-4 py-2">Seller Email</th>
              <th className="px-4 py-2">Sub-category</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">Rating</th>
              <th className="px-4 py-2">Available Quantity</th>
              <th className="px-4 py-2">Detail Description</th>
            </tr>
          </thead>
          <tbody>
            {myToys.map((toy) => (
              <tr key={toy._id}>
                <td className="border px-4 py-2">
                  <img src={toy.pictureUrl} alt="Toy" className="w-16 h-auto" />
                </td>
                <td className="border px-4 py-2">{toy.name}</td>
                <td className="border px-4 py-2">{toy.sellerName}</td>
                <td className="border px-4 py-2">{toy.sellerEmail}</td>
                <td className="border px-4 py-2">{toy.subCategory}</td>
                <td className="border px-4 py-2">{toy.price}</td>
                <td className="border px-4 py-2">{toy.rating}</td>
                <td className="border px-4 py-2">{toy.quantity}</td>
                <td className="border px-4 py-2">{toy.description}</td>
                <td className="border px-4 py-2">
                  <div>
                    <Link to={`/update/${toy._id}`}>
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                        Update
                      </button>
                    </Link>
                  </div>
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => handleDelete(toy._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;

