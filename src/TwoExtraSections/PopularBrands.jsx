import React from 'react';

const PopularBrands = () => {
  const brands = [
    { name: 'LEGO', image: 'https://upload.wikimedia.org/wikipedia/commons/2/24/LEGO_logo.svg', title: 'LEGO' },
    { name: 'Mattel', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Mattel_%282019%29.svg/1200px-Mattel_%282019%29.svg.png', title:'Mattel' },
    { name: 'Hasbro', image: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/ea/Hasbro_logo.svg/1200px-Hasbro_logo.svg.png', title: 'Hasbro' },
    { name: 'Fisher-Price', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh_BkyClkrgcbKYpuGikI256E-7xwycFDAZQKTUZdnl0XKG2StmK1xag2EfR-ijZphthc&usqp=CAU', title: 'Fisher-Price' },
  ];

  return (
    <section className="py-8">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">Popular Brands</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {brands.map((brand) => (
            <div key={brand.name} className="flex items-center justify-center">
              <strong> {brand.title} </strong> &nbsp;&nbsp;

              <img src={brand.image} alt={brand.name} className="h-16" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularBrands;
