import React from 'react'


const Newsletter = () => {
    return (
        <div className="bg-gray-100 py-10 px-5">
            <div className="text-center mb-6">
                <h2 className="text-3xl font-bold text-gray-800">Subscribe to Our Newsletter</h2>
                <p className="text-gray-500 mt-2">
                    Stay updated with the latest news and exclusive offers.
                </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full sm:w-2/3 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 "
                />
                <button
                    type="submit"
                    className="bg-black text-white px-6 py-3 rounded-md  "
                >
                    Subscribe
                </button>
            </div>
        </div>
    );
};
export default Newsletter