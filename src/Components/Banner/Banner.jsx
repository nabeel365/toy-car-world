import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://i.ebayimg.com/images/g/gdQAAOSwx8Nhf5Kz/s-l1600.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold text-red-500">Welcome to Toy Car World!</h1>
                        <p className="py-6">
                        Toy Car World is an online destination for toy car enthusiasts of all ages. Explore our vast collection of miniature vehicles, ranging from classic cars to modern supercars, and everything in between. Immerse yourself in a virtual world where you can discover, collect, and customize your dream toy cars. Whether you're a passionate collector or simply looking for a nostalgic trip down memory lane, Toy Car World offers endless fun and excitement for car lovers of every generation. Start your journey today and let your imagination hit the accelerator at Toy Car World.
                        </p>
                        <button className="btn btn-lg text-red-500 btn-outline">Explore Our Toys</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;