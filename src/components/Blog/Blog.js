import React from 'react';

const Blog = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="flex flex-col items-center justify-center max-w-lg">
                <div className="mb-4">
                    <h1 className="text-5xl font-extrabold text-blue-600">503</h1>
                </div>
                <h3 className="mb-3 text-2xl font-bold text-center text-gray-700">
                    This Page is under construction!
                </h3>
                <p className="text-sm text-center text-gray-600">
                    Sorry for the inconvenience but I am performing some maintenance at the moment. If need anything Feel free to conatact me at <b>Miskaturrahman34826@gmail.com</b> <br />
                    — <i> Miskatur Rahman </i>
                </p>
            </div>
        </div>
    );
};

export default Blog;