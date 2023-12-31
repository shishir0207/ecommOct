"use client";
import React from "react";
import Image from "next/image";
import { MinusSmallIcon } from "@heroicons/react/24/outline";
import { PlusSmallIcon } from "@heroicons/react/24/outline";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../../../redux/CartReducer.js";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);
  const total = cart
    ?.map((item) => item.price * item.quantity)
    .reduce((prev, curr) => prev + curr, 0);

  const grandTotal = total + 100;
  const dispatch = useDispatch();
  const increaseQuantity = (item) => {
    dispatch(incrementQuantity(item));
  };
  const decreaseQuantity = (item) => {
    dispatch(decrementQuantity(item));
  };
  const deleteItem = (item) => {
    dispatch(removeFromCart(item));
  };
  return (
    <>
      <div>
        <div className="grid grid-cols-8 h-screen bg-[#FFFCF2]">
          <div className="flex flex-col col-span-5 mt-16 ml-20 ">
            <h2 className="text-xl font-bold">YOUR SHOPPING CART</h2>
            {cart?.map((item) => (
              <div className="border rounded-md p-3 bg-white shadow-md flex flex-row space-x-4 my-4">
                <Image
                  width={80}
                  height={80}
                  objectFit={"contain"}
                  src={item?.image}
                />
                <div className="flex-grow">
                  <p className="text-sm line-clamp-2">{item?.title}</p>
                  <p className="text-xl font-semibold">
                    Price : Rs{item?.price}
                  </p>
                  {item?.description ? (
                    <p className="text-xs line-clamp-2 font-normal">
                      {item?.description}
                    </p>
                  ) : (
                    <div>
                      <p className="text-sm line-clamp-2 font-normal">
                        Color : {item?.color}
                      </p>
                      <p className="text-sm line-clamp-2 font-normal">
                        Size : {item?.size}
                      </p>
                    </div>
                  )}
                  <div className="flex flex-row space-x-2 mt-1">
                    <p
                      onClick={() => deleteItem(item)}
                      className="text-xs font-semibold text-cyan-600 cursor-pointer hover:underline"
                    >
                      Delete
                    </p>

                    <p className="text-xs font-semibold text-cyan-600 cursor-pointer hover:underline">
                      Save for later
                    </p>
                    <p className="text-xs font-semibold text-cyan-600 cursor-pointer hover:underline">
                      See more like this
                    </p>
                    <p className="text-xs font-semibold text-cyan-600 cursor-pointer hover:underline">
                      Share
                    </p>
                  </div>
                  <div className="flex item-center space-x-2 mt-1">
                    <button className="rounded-full bg-gray-500">
                      <MinusSmallIcon
                        onClick={() => decreaseQuantity(item)}
                        className="h-4 w-4 text-white"
                        class="h-6 w-6 text-gray-700"
                      />
                    </button>
                    <span className="text-gray-500">{item?.quantity}</span>

                    <button className="rounded-full bg-gray-500">
                      <PlusSmallIcon
                        onClick={() => increaseQuantity(item)}
                        className="h-4 w-4 text-white"
                        class="h-6 w-6 text-gray-700"
                      />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="col-span-2 mt-16 ml-20">
            <h3 className="mb-2">Choose Delivery Address</h3>
            <div>
              <div className="bg-white p-4 rounded-sm mt-2">
                <h4 className="text-xs text-gray-500">Select Location</h4>
                <p className="text-xs text-gray-500">
                  Please select location,so that we can find a place that
                  delivers to you
                </p>
                <button className="rounded-sm py-1 mt-2 text-gray-600">
                  Add Address
                </button>
              </div>
              <h3 className="mt-4">Offers</h3>
              <div>
                <div className="bg-white p-4 rounded-sm mt-2">
                  <h4 className="text-xs text-gray-500">Apply Coupons</h4>
                  <p className="text-xs text-gray-500">
                    Get Discount with your order
                  </p>
                </div>
              </div>
              <h3 className="mt-1">Price</h3>
              <div className="bg-white rounded-sm mt-2 p-3 space-y-3">
                <div className="flex item-center justify-between">
                  <h4 className="text-xs">Sub Total</h4>
                  <p className="text-sm font-normal">Rs</p>
                </div>
                <div className="flex item-center justify-between">
                  <h4 className="text-xs">Discount</h4>
                  <p className="text-sm font-normal">Rs</p>
                </div>
                <div className="flex item-center justify-between">
                  <h4 className="text-xs">Taxes and Charges</h4>
                  <p className="text-sm font-normal">Rs-100</p>
                </div>
                <hr className="w-full mt-1 decoration-dotted" />
                <div className="flex item-center justify-between">
                  <h4 className="text-xs">Grand Total</h4>
                  <p className="text-sm font-normal">Rs</p>
                </div>
                <button className="bg-yellow-500 text-center font-normal text-white rounded-md py-2 px-3 w-full">
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
