import React from 'react';

const CustomerReviews = () => {
  const reviews = [
    {
      id: 1,
      name: 'John Doe',
      review: 'Great selection of toys! My kids love everything we bought from here.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Jane Smith',
      review: 'Fantastic service! The staff was helpful and friendly.',
      rating: 4,
    },
    {
        id: 3,
        name: 'Sarah Johnson',
        review: 'Amazing quality toys at affordable prices. Highly recommended!',
        rating: 5,
      },
      {
        id: 4,
        name: 'Michael Brown',
        review: 'The toy shop has a wide variety of toys for different age groups. My nephew was thrilled with his birthday gift!',
        rating: 4.5,
      },
      {
        id: 5,
        name: 'Emily Davis',
        review: 'Quick and efficient delivery. The toys arrived in perfect condition.',
        rating: 4,
      },
      {
        id: 6,
        name: 'Micheal Janson',
        review: 'Awsome products, my children like these a lot.',
        rating: 5,
      },
      
  ];

  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto">
        <h2 data-aos="flip-left" className="text-3xl font-semibold mb-8">Customer Reviews</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white p-6 shadow-md rounded-md">
              <div className="flex items-center mb-4">
                <div className="rounded-full bg-blue-500 w-10 h-10 flex items-center justify-center text-white font-semibold text-xl">
                  {review.name.charAt(0)}
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-semibold">{review.name}</h3>
                  <div className="flex items-center mt-1">
                    {Array.from({ length: review.rating }, (_, index) => (
                      <svg
                        key={index}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-yellow-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 0a1.59 1.59 0 0 1 1.237.587l3.014 3.89 5.486.8a1.58 1.58 0 0 1 .877 2.703l-3.98 3.876.94 5.47a1.59 1.59 0 0 1-2.312 1.678L10 15.475l-4.877 2.632A1.59 1.59 0 0 1 2.81 17.53l.94-5.47-3.98-3.876a1.58 1.58 0 0 1 .877-2.703l5.486-.8L8.763.587A1.59 1.59 0 0 1 10 0z"
                        />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700">{review.review}</p>
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
};

export default CustomerReviews;
