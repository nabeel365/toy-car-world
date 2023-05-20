import React, { useEffect } from 'react';
import { Link, Outlet, useLoaderData } from 'react-router-dom';
import CustomerReviews from '../../TwoExtraSections/CustomerReviews';
import PopularBrands from '../../TwoExtraSections/PopularBrands';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import ShopByCategory from '../ShopByCategory/ShopByCategory';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import swal from 'sweetalert';
import AOS from 'aos';
import 'aos/dist/aos.css';


const MainContent = () => {
  const allTheToys = useLoaderData();
  // console.log(allTheToys);

  // Filter toys by category
  const sportsCars = allTheToys.filter(toy => toy.subCategory === 'SportsCars');
  const trucks = allTheToys.filter(toy => toy.subCategory === 'Trucks');
  const policeCars = allTheToys.filter(toy => toy.subCategory === 'PoliceCars');


  const alertSweet = () => {
    swal("Hmmm!!! You need to login first");
    return
  }


  // aos 

  useEffect(() => {
    AOS.init({});
  }, []);


  
  return (
    <div>
      {/* <Outlet></Outlet> */}

      <div data-aos="fade-up">
        <Banner></Banner>

      </div>

      <div data-aos="zoom-in">
        <Gallery></Gallery>

      </div>



      {/* shop by category */}

      <div className="p-8">
        <h1 className="text-2xl mb-4 font-semibold">Shop by Category</h1>
        <div className="border border-red-300 rounded-lg">
          <Tabs className="">
            <TabList className="bg-red-300 flex justify-center">
              <Tab className="py-2 px-4 hover:bg-slate-100 focus:bg-red-500">Sports Cars</Tab>
              <Tab className="py-2 px-4 hover:bg-slate-100 focus:bg-red-500">Trucks</Tab>
              <Tab className="py-2 px-4 hover:bg-slate-100 focus:bg-red-500">Police Cars</Tab>
            </TabList>

            <TabPanel>
              <div className="p-4 sm:flex gap-5 flex-wrap">
                {sportsCars.map(toy => (
                  <div key={toy.id} className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                    <div data-aos="slide-up" className="card bg-base-100 shadow-xl mb-4">
                      <figure>
                        <img src={toy.pictureUrl} alt={toy.name} className="w-full h-auto" />
                      </figure>
                      <div className="card-body p-4">
                        <h2 className="card-title">Name: {toy.name}</h2>
                        <h2 className="card-title">Category: {toy.subCategory}</h2>
                        <h2 className="card-title">Price: ${toy.price}</h2>
                        <h2 className="card-title">Ratings: {toy.rating}</h2>

                        <div className="card-actions justify-end">
                          <Link
                            to={`/toyDetail/${toy._id}`}

                          >
                            <button className="btn btn-primary" onClick={alertSweet}>View Details</button>

                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabPanel>

            <TabPanel>
              <div className="p-4 sm:flex gap-5 flex-wrap">
                {trucks.map(toy => (
                  <div key={toy.id} className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                    <div data-aos="slide-up" className="card bg-base-100 shadow-xl mb-4">
                      <figure>
                        <img src={toy.pictureUrl} alt={toy.name} className="w-full h-auto" />
                      </figure>
                      <div className="card-body p-4">
                        <h2 className="card-title">Name: {toy.name}</h2>
                        <h2 className="card-title">Category: {toy.subCategory}</h2>
                        <h2 className="card-title">Price: ${toy.price}</h2>
                        <h2 className="card-title">Ratings: {toy.rating}</h2>

                        <div className="card-actions justify-end">

                          <Link
                            to={`/toyDetail/${toy._id}`}

                          >
                            <button className="btn btn-primary" onClick={alertSweet}>View Details</button>

                          </Link>

                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabPanel>

            <TabPanel>
              <div className="p-4 sm:flex gap-5 flex-wrap">
                {policeCars.map(toy => (
                  <div key={toy.id} className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                    <div data-aos="slide-up" className="card bg-base-100 shadow-xl mb-4">
                      <figure>
                        <img src={toy.pictureUrl} alt={toy.name} className="w-full h-auto" />
                      </figure>
                      <div className="card-body p-4">
                        <h2 className="card-title">Name: {toy.name}</h2>
                        <h2 className="card-title">Category: {toy.subCategory}</h2>
                        <h2 className="card-title">Price: ${toy.price}</h2>
                        <h2 className="card-title">Ratings: {toy.rating}</h2>
                        <div className="card-actions justify-end">

                          <Link
                            to={`/toyDetail/${toy._id}`}

                          >
                            <button className="btn btn-primary" onClick={alertSweet}>View Details</button>

                          </Link>


                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>

      {/* shop by category */}

      <div data-aos="bounce">
        <CustomerReviews></CustomerReviews>

      </div>

      <div data-aos="flip-left">
        <PopularBrands></PopularBrands>

      </div>

    </div>
  );
};

export default MainContent;
