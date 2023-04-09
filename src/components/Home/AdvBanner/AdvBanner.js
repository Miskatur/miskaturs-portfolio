import React from 'react';

const AdvBanner = () => {
    return (
        <div className='my-20'>
            <div className="p-6 py-12 bg-gradient-to-r from-sky-600 to-indigo-500">
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row items-center justify-between">
                        <div className="">
                            <h2 className="text-center text-4xl tracking-tighter font-bold text-white">Are You Looking For
                            </h2>
                            <h2 className='text-4xl font-bold text-center text-blue-7'>
                                A Freelancer?
                            </h2>
                        </div>
                        <div className="space-x-2 text-center py-2 lg:py-0 text-2xl font-semibold">
                            <span>Visit My Gig for 10% Discount on</span>
                            <span className="font-bold text-3xl text-white">Fiver</span>
                        </div>
                        <a href="https://www.fiverr.com/share/p5k1eG" target={"_blank"} rel="noreferrer noopener" className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block bg-gradient-to-r from-sky-500 to-indigo-500 text-white font-bold">Order Now</a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AdvBanner;