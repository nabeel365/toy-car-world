import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const MyToys = () => {
    const addedToys = useLoaderData();
    const [myToys, setMyToys] = useState(addedToys);

    console.log(myToys);

    const handleUpdate = () => {
        console.log('updated');
    };

    const handleDelete = () => {
        console.log('deleted');
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
                            <th className="px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {myToys.map((toy, index) => (
                            <tr key={index}>
                                <td className="border px-4 py-2"><img src={toy.pictureUrl} alt="Toy" className="w-16 h-auto" /></td>
                                <td className="border px-4 py-2">{toy.name}</td>
                                <td className="border px-4 py-2">{toy.sellerName}</td>
                                <td className="border px-4 py-2">{toy.sellerEmail}</td>
                                <td className="border px-4 py-2">{toy.subCategory}</td>
                                <td className="border px-4 py-2">{toy.price}</td>
                                <td className="border px-4 py-2">{toy.rating}</td>
                                <td className="border px-4 py-2">{toy.quantity}</td>
                                <td className="border px-4 py-2">{toy.description}</td>
                                <td className="border px-4 py-2">
                                    <button
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                                        onClick={() => handleUpdate(index)}
                                    >
                                        Update
                                    </button>
                                    <button
                                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                        onClick={() => handleDelete(index)}
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

