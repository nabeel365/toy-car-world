import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ShopByCategory = () => {
  const typesOfCars = useLoaderData()
  const [category, setCategory] = useState(typesOfCars);
  console.log(category);
  
    return (
        <div>
 

<div className="p-8">
<h1 className="text-2xl mb-4 font-semibold">Shop by Category</h1>
      <div className="border border-red-300 rounded-lg ">
        <Tabs>
          <TabList className="bg-red-300 flex justify-center">
            <Tab className="py-2 px-4 hover:bg-slate-100 focus:bg-red-500">Sports Cars</Tab>
            <Tab className="py-2 px-4 hover:bg-slate-100 focus:bg-red-500">Trucks</Tab>
            <Tab className="py-2 px-4 hover:bg-slate-100 focus:bg-red-500">Police Cars</Tab>
          </TabList>

          <TabPanel>
            <div className="p-4">
              <h2 className="text-xl">Any content 1

              </h2>
            </div>
          </TabPanel>

          <TabPanel>
            <div className="p-4">
              <h2 className="text-xl">Any content 2</h2>
            </div>
          </TabPanel>

          <TabPanel>
            <div className="p-4">
              <h2 className="text-xl">Any content 3</h2>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>

        </div>
    );
};

export default ShopByCategory;