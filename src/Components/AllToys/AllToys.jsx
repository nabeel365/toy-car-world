import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const AllToys = () => {
  const allToys = useLoaderData();
  const [id] = allToys;
  
  console.log(allToys);
  const [searchTerm, setSearchTerm] = useState('');
  const [visibleToys, setVisibleToys] = useState(20);
  const [matchedToys, setMatchedToys] = useState([]);

  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);

    const filteredToys = allToys.filter((toy) => {
      const toyName = toy.name || '';
      return toyName.toLowerCase().includes(searchTerm.toLowerCase());
    });

    setMatchedToys(filteredToys);
  };

  const handleLoadMore = () => {
    setVisibleToys((prevVisibleToys) => prevVisibleToys + 20);
  };

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Search Toy Name"
        value={searchTerm}
        onChange={handleSearch}
        className="p-2 rounded border"
      />
      <table className="mt-4 w-full">
        <thead>
          <tr>
            <th className="py-2">Seller</th>
            <th className="py-2">Toy Name</th>
            <th className="py-2">Sub-category</th>
            <th className="py-2">Price</th>
            <th className="py-2">Available Quantity</th>
            <th className="py-2">View Details</th>
          </tr>
        </thead>
        <tbody>
          {(searchTerm ? matchedToys : allToys)
            .slice(0, visibleToys)
            .map((toy) => (
              <tr key={toy.id}>
                <td className="py-2">{toy.sellerName || 'N/A'}</td>
                <td className="py-2">{toy.name}</td>
                <td className="py-2">{toy.subCategory}</td>
                <td className="py-2">{toy.price}</td>
                <td className="py-2">{toy.quantity}</td>
                <td className="py-2">
                  <Link
                  to={`/toyDetail/${toy._id}`}
                  
                    className="px-4 py-2 rounded bg-black text-white"
                  >
                    View Details
                  </Link>
                </td> 
              </tr>
            ))}
        </tbody>
      </table>
      {visibleToys < (searchTerm ? matchedToys.length : allToys.length) && (
        <button
          onClick={handleLoadMore}
          className="mt-4 px-4 py-2 rounded bg-red-500 text-white"
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default AllToys;

