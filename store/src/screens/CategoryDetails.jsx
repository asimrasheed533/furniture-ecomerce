import React, { useState } from "react";

export default function CategoryDetails() {
  const [isfiltersOpen, setIsFiltersOpen] = useState(false);
  return (
    <div className="flex flex-col items-center h-screen">
      <div className="flex flex-row justify-between w-full max-w-7xl p-4">
        <div className="text-2xl font-bold">Category Name</div>
        <div className="flex flex-row space-x-4">
          <button
            className="bg-white text-black font-bold py-2 px-4 rounded-full h-14"
            onClick={() => setIsFiltersOpen(!isfiltersOpen)}
          >
            Filter
          </button>
          <select name="" id="">
            <option value="">Sort</option>
            <option value="">Sort 1</option>
            <option value="">Sort 2</option>
            <option value="">Sort 3</option>
          </select>
        </div>
      </div>
      {isfiltersOpen && (
        <div className="flex flex-row w-full max-w-7xl mb-10">
          <div className="flex flex-col w-1/4">
            <div className="flex flex-row">
              <input type="checkbox" />
              <div>Filter 1</div>
            </div>
            <div className="flex flex-row">
              <input type="checkbox" />
              <div>Filter 1</div>
            </div>
            <div className="flex flex-row">
              <input type="checkbox" />
              <div>Filter 1</div>
            </div>
            <div className="flex flex-row">
              <input type="checkbox" />
              <div>Filter 1</div>
            </div>
            <div className="flex flex-row">
              <input type="checkbox" />
              <div>Filter 1</div>
            </div>
          </div>
          <div className="flex flex-col w-1/4">
            <div className="flex flex-row">
              <input type="radio" />
              <div>Filter 1</div>
            </div>
            <div className="flex flex-row">
              <input type="radio" />
              <div>Filter 1</div>
            </div>
            <div className="flex flex-row">
              <input type="radio" />
              <div>Filter 1</div>
            </div>
            <div className="flex flex-row">
              <input type="radio" />
              <div>Filter 1</div>
            </div>
            <div className="flex flex-row">
              <input type="radio" />
              <div>Filter 1</div>
            </div>
          </div>
          <div className="flex flex-col w-1/4">
            <div className="flex flex-row">
              <input type="checkbox" />
              <div>Filter 1</div>
            </div>
            <div className="flex flex-row">
              <input type="checkbox" />
              <div>Filter 1</div>
            </div>
            <div className="flex flex-row">
              <input type="checkbox" />
              <div>Filter 1</div>
            </div>
            <div className="flex flex-row">
              <input type="checkbox" />
              <div>Filter 1</div>
            </div>
            <div className="flex flex-row">
              <input type="checkbox" />
              <div>Filter 1</div>
            </div>
          </div>
          <div className="flex flex-col w-1/4">
            <div className="flex flex-row">
              <input type="checkbox" />
              <div>Filter 1</div>
            </div>
            <div className="flex flex-row">
              <input type="checkbox" />
              <div>Filter 1</div>
            </div>
            <div className="flex flex-row">
              <input type="checkbox" />
              <div>Filter 1</div>
            </div>
            <div className="flex flex-row">
              <input type="checkbox" />
              <div>Filter 1</div>
            </div>
            <div className="flex flex-row">
              <input type="checkbox" />
              <div>Filter 1</div>
            </div>
          </div>
        </div>
      )}

      <div className="w-full grid grid-cols-4 gap-2 max-w-7xl">
        <div className="relative overflow-hidden ">
          <div className="absolute top-0 left-0 h-full w-full flex justify-center hover:bg-gray-950 hover:bg-opacity-50 transition-all duration-300 ease-in-out items-center">
            <button className="bg-white text-black font-bold py-2 px-4 rounded-lg h-14 mx-2		">
              fav
            </button>
            <button className="bg-white text-black font-bold py-2 px-4 rounded-full h-14">
              Buy Now
            </button>
          </div>
          <img
            src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute bottom-0 left-0 w-full p-4 bg-white bg-opacity-50">
            <h1 className="text-2xl font-bold">Product Name</h1>
            <p className="text-gray-500">Product Description</p>
            <p className="text-gray-500">Product Price</p>
          </div>
        </div>
        <div className="relative overflow-hidden ">
          <div className="absolute top-0 left-0 h-full w-full flex justify-center hover:bg-gray-950 hover:bg-opacity-50 transition-all duration-300 ease-in-out items-center">
            <button className="bg-white text-black font-bold py-2 px-4 rounded-full h-14">
              fav
            </button>
            <button className="bg-white text-black font-bold py-2 px-4 rounded-full h-14">
              Buy Now
            </button>
          </div>
          <img
            src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute bottom-0 left-0 w-full p-4 bg-white bg-opacity-50">
            <h1 className="text-2xl font-bold">Product Name</h1>
            <p className="text-gray-500">Product Description</p>
            <p className="text-gray-500">Product Price</p>
          </div>
        </div>
        <div className="relative overflow-hidden ">
          <div className="absolute top-0 left-0 h-full w-full flex justify-center hover:bg-gray-950 hover:bg-opacity-50 transition-all duration-300 ease-in-out items-center">
            <button className="bg-white text-black font-bold py-2 px-4 rounded-full h-14">
              fav
            </button>
            <button className="bg-white text-black font-bold py-2 px-4 rounded-full h-14">
              Buy Now
            </button>
          </div>
          <img
            src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute bottom-0 left-0 w-full p-4 bg-white bg-opacity-50">
            <h1 className="text-2xl font-bold">Product Name</h1>
            <p className="text-gray-500">Product Description</p>
            <p className="text-gray-500">Product Price</p>
          </div>
        </div>
        <div className="relative overflow-hidden ">
          <div className="absolute top-0 left-0 h-full w-full flex justify-center hover:bg-gray-950 hover:bg-opacity-50 transition-all duration-300 ease-in-out items-center">
            <button className="bg-white text-black font-bold py-2 px-4 rounded-full h-14">
              fav
            </button>
            <button className="bg-white text-black font-bold py-2 px-4 rounded-full h-14">
              Buy Now
            </button>
          </div>
          <img
            src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute bottom-0 left-0 w-full p-4 bg-white bg-opacity-50">
            <h1 className="text-2xl font-bold">Product Name</h1>
            <p className="text-gray-500">Product Description</p>
            <p className="text-gray-500">Product Price</p>
          </div>
        </div>
        <div className="relative overflow-hidden ">
          <div className="absolute top-0 left-0 h-full w-full flex justify-center hover:bg-gray-950 hover:bg-opacity-50 transition-all duration-300 ease-in-out items-center">
            <button className="bg-white text-black font-bold py-2 px-4 rounded-full h-14">
              fav
            </button>
            <button className="bg-white text-black font-bold py-2 px-4 rounded-full h-14">
              Buy Now
            </button>
          </div>
          <img
            src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute bottom-0 left-0 w-full p-4 bg-white bg-opacity-50">
            <h1 className="text-2xl font-bold">Product Name</h1>
            <p className="text-gray-500">Product Description</p>
            <p className="text-gray-500">Product Price</p>
          </div>
        </div>
        <div className="relative overflow-hidden ">
          <div className="absolute top-0 left-0 h-full w-full flex justify-center hover:bg-gray-950 hover:bg-opacity-50 transition-all duration-300 ease-in-out items-center">
            <button className="bg-white text-black font-bold py-2 px-4 rounded-full h-14">
              fav
            </button>
            <button className="bg-white text-black font-bold py-2 px-4 rounded-full h-14">
              Buy Now
            </button>
          </div>
          <img
            src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute bottom-0 left-0 w-full p-4 bg-white bg-opacity-50">
            <h1 className="text-2xl font-bold">Product Name</h1>
            <p className="text-gray-500">Product Description</p>
            <p className="text-gray-500">Product Price</p>
          </div>
        </div>
        <div className="relative overflow-hidden ">
          <div className="absolute top-0 left-0 h-full w-full flex justify-center hover:bg-gray-950 hover:bg-opacity-50 transition-all duration-300 ease-in-out items-center">
            <button className="bg-white text-black font-bold py-2 px-4 rounded-full h-14">
              fav
            </button>
            <button className="bg-white text-black font-bold py-2 px-4 rounded-full h-14">
              Buy Now
            </button>
          </div>
          <img
            src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute bottom-0 left-0 w-full p-4 bg-white bg-opacity-50">
            <h1 className="text-2xl font-bold">Product Name</h1>
            <p className="text-gray-500">Product Description</p>
            <p className="text-gray-500">Product Price</p>
          </div>
        </div>
        <div className="relative overflow-hidden ">
          <div className="absolute top-0 left-0 h-full w-full flex justify-center hover:bg-gray-950 hover:bg-opacity-50 transition-all duration-300 ease-in-out items-center">
            <button className="bg-white text-black font-bold py-2 px-4 rounded-full h-14">
              fav
            </button>
            <button className="bg-white text-black font-bold py-2 px-4 rounded-full h-14">
              Buy Now
            </button>
          </div>
          <img
            src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute bottom-0 left-0 w-full p-4 bg-white bg-opacity-50">
            <h1 className="text-2xl font-bold">Product Name</h1>
            <p className="text-gray-500">Product Description</p>
            <p className="text-gray-500">Product Price</p>
          </div>
        </div>
        <div className="relative overflow-hidden ">
          <div className="absolute top-0 left-0 h-full w-full flex justify-center hover:bg-gray-950 hover:bg-opacity-50 transition-all duration-300 ease-in-out items-center">
            <button className="bg-white text-black font-bold py-2 px-4 rounded-full h-14">
              fav
            </button>
            <button className="bg-white text-black font-bold py-2 px-4 rounded-full h-14">
              Buy Now
            </button>
          </div>
          <img
            src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute bottom-0 left-0 w-full p-4 bg-white bg-opacity-50">
            <h1 className="text-2xl font-bold">Product Name</h1>
            <p className="text-gray-500">Product Description</p>
            <p className="text-gray-500">Product Price</p>
          </div>
        </div>
      </div>
    </div>
  );
}
