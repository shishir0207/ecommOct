"use client";
import React, { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';

const Men = () => {
  const [product, setProduct] = useState([]);
   // const dispatch=useDispatch();
   const [added,setAdded]=useState(false)
   const addItemToCart=(item)=>{
     setAdded(true);
     // dispatch(addToCart(item))
   };
 

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
        setProduct(res);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        
      });
  }, []);

  if (!product || product.length === 0) {
    return <div className="spinner "></div> // Display loading message while data is being fetched
  }
  return (
    <>
      <div className='bg-[#FFFCF2] h-fit'>
        <div className="text-5xl text-center">ALL CATAGORY</div>

        <div className="mx-6 mt-8  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
          {product &&
            product.map((item) => (
              <div className="relative shadow-lg flex border flex-col bg-white m-5 p-3">
                <p>{item?.id}</p>

                <div className="flex justify-center">
                  <img className="w-32 h-32 object-contain" src={item?.images} />
                </div>
                {/* <div className="flex justify-center">
                  <img className="w-32 h-32 object-contain" src={item?.category?.image} />
                </div> */}

                <h4 className="text-xs text-yellow-500">
                  {/* {item?.rating?.rate} ratings */}
                </h4>

                <p className="text-xs line-clamp-2 mt-1">{item?.description}</p>

                <h3 className="text-md font-semibold mt-1">
                  Price- ${item?.price}
                </h3>
                <button onClick={()=>addItemToCart(item)} className='p-2 mt-2 text-xs md:text-sm bg-gradient-to-b from-yellow-200 to-yellow-400'>{added ? "Added to Cart" : "Add to Cart"}</button>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Men;
