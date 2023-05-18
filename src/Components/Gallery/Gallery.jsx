import React from 'react';
import './Gallery.css'

const Gallery = () => {
    return (
        <div>

<h1 className='text-3xl font-semibold'>Explore Our Wide Range Of Cars!!!</h1>

            <div className="carousel carousel-center rounded-box ">
  <div className="carousel-item">
    <img src="https://images.pexels.com/photos/35967/mini-cooper-auto-model-vehicle.jpg?cs=srgb&dl=pexels-pixabay-35967.jpg&fm=jpg" alt="car 1" />
  </div> 
  <div className="carousel-item">
    <img src="https://images.pexels.com/photos/97353/pexels-photo-97353.jpeg?cs=srgb&dl=pexels-mike-bird-97353.jpg&fm=jpg" alt="car 2" />
  </div> 
  <div className="carousel-item">
    <img src="https://images.pexels.com/photos/35619/capri-ford-oldtimer-automotive.jpg?cs=srgb&dl=pexels-pixabay-35619.jpg&fm=jpg" alt="car 3" />
  </div> 
  <div className="carousel-item">
    <img src="https://c4.wallpaperflare.com/wallpaper/741/285/306/arunsphotography-diecast-cars-diecast-photography-toy-car-wallpaper-preview.jpg" alt="car 4" />
  </div> 
  <div className="carousel-item">
    <img src="https://wallpapercave.com/wp/wp7560426.jpg" alt="car 5" />
  </div> 
  <div className="carousel-item">
    <img src="https://png.pngitem.com/pimgs/s/212-2122501_power-wheels-car-pink-hd-png-download.png" alt="car 6" />
  </div> 
  <div className="carousel-item">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHv3hvBs64Nr1OwTshZb5_X7XkhWIclOrEAQ&usqp=CAU" alt="car 7" />
  </div>
</div>
        </div>
    );
};

export default Gallery;