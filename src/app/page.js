"use client";
import Image from "next/image";
import "./newcss.css";
import Leaf from "./assets/leaf.png";
import Image11 from "./assets/imgae11.png";
import Image12 from "./assets/image12.png";
import Image13 from "./assets/iamge13.png";
import Image14 from "./assets/image14.png";
import Image15 from "./assets/image15.png";
import Image16 from "./assets/image16.png";
import Image17 from "./assets/image17.png";
import Image18 from "./assets/image18.png";
import Lock from "./assets/lock.svg";

import image31 from "./assets/image31.png";
import Image32 from "./assets/image32.png";
import Image33 from "./assets/image33.png";
import Image34 from "./assets/image34.png";
import Image42 from "./assets/image42.png";
import Image41 from "./assets/image41.png";
import Image40 from "./assets/image40.png";
import Image39 from "./assets/image39.png";
import Image38 from "./assets/image38.png";
import Image37 from "./assets/image37.png";
import Image36 from "./assets/image36.png";
import Image35 from "./assets/image35.png";
import Elipse from "./assets/Ellipse.png";
import star from "./assets/star.png";
import face from "./assets/face.svg";
import twit from "./assets/twit.svg";
import insta from "./assets/insta.svg";
import post from "./assets/postman.svg";
import tele from "./assets/telephone-caal.svg";
import location from "./assets/location .svg";
import visa from "./assets/visa.png";
import Head from "next/head";
import down from "./assets/downarow.svg";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <section className="bg-[#FFFCF2]" id="main">
        <div className="container-fluid">
          {/* ------section 1----------- */}

          <div
            id="main-bg"
            className=" h-screen w-screen bg-no-repeat bg-cover"
          >
            <div className="text-center">
              <p className="text-gray-500 text-sm p-2">
                Free shipping within USA
              </p>
            </div>
            <hr className="bg-gray-500 border-1 " />

            {/* toggle */}
            <div
              className={`flex ${isOpen ? "sidebar-open" : "sidebar-closed"} `}
            >
              <div
                className={`bg-[#FCF2D8] h-52 w-28 lg:w-64 transition-all duration-300 ease-in-out ${
                  isOpen ? "hidden lg:block" : "block lg:hidden"
                }`}
              >
                <div className="space-y-2">
                <select className="bg-[#E5DCBC4D] list-none">
                        <option>USA</option>
                        <option>NewYork</option>
                        <option>Colorado</option>
                        <option>Detroit</option>
                      </select>
                  <hr/>
                  <select className="bg-[#E5DCBC4D] list-none">
                        <option>Products</option>
                        <option>Nacklaces</option>
                        <option>Bracelets</option>
                        <option>Rings</option>
                        <option>Earings</option>
                      </select>
                      <hr/>
                  <div>Sign in/Register</div>
                  <hr/>
                  <div>Cart(0)</div>
                  <hr/>
                  <div>Search</div>
                </div>
                {/* Sidebar content */}
              </div>
              <div className="flex-1">
                <button className="lg:hidden" onClick={toggleSidebar}>
                  Toggle Sidebar
                </button>
                {/* Main content */}
              </div>
            </div>
            {/* toggle end */}

            <div className="mx-16 lg:flex lg:flex-row hidden my-8 justify-between">
              <div className="text-gray-500 text-sm " id="gg">
                <ul className="flex flex-row space-x-12 ">
                  <li id="na">
                    <a href="#" className="hover:underline">
                      Nacklaces
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Bracelets
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Rings
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Earrings
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-row space-x-2 items-center" id="www">
                <Image src={Leaf} className="w-6" />
                <p className="text-amber-800 text-3xl">Tropical Exotics</p>
              </div>
              <div className="text-gray-500 text-sm">
                <ul className="flex flex-row space-x-12">
                  <li>
                    <div className="flex">
                      <select className="bg-[#E5DCBC4D] list-none">
                        <option>USA</option>
                        <option>NewYork</option>
                        <option>Colorado</option>
                        <option>Detroit</option>
                      </select>
                      {/* <p><a href="#" className="hover:underline">USA</a></p> */}
                      {/* <Image src={down} className="ml-1 "/> */}
                    </div>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Sign in / Register
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Cart (0)
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Search
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="text-lg mx-16 2xl:mt-72 xl:mt-60 lg:mt-56 md:mt-52 sm:mt-60 mt-48">
              SUBTLE & WEARABLE SOLID GOLD
            </div>
            <div className="md:text-6xl text-5xl mx-16 my-5 mb-7" id="www">
              Understated Luxury for your <br />
              <span className="text-[#B77100]"> Distinct</span> Nature
            </div>
            <div className="sm:text-base text-sm font-bold mx-16 underline underline-offset-8">
              SHOP OUR BEST SELLER
            </div>
          </div>
          {/* -----------section 2--------- */}

          <div className="flex mx-16 my-14 ">
            <div id="img11" className="">
              <Image src={Image11} className="" />
            </div>
            <Image
              src={Image12}
              className="absolute md:w-36 w-28 2xl:w-48 md:mt-40 mt-28 2xl:mt-52  "
              id="nack"
            />
            <div className="" id="sec-2-r">
              <div className="lg:mt-28 md:mt-32 sm:mt-32 mt-20  lg:ml-36 md:ml-24 sm:ml-20  ml-14">
                <p className="lg:text-6xl text-3xl" id="www">
                  Make a Statement
                </p>
                <p className="lg:text-lg md:text-base text-base  md:my-3 my-0">
                  GREAT ACCESSORY FOR A{" "}
                  <span className="text-[#B77100]">BEACH</span> OUTFIT
                </p>
                <button className="md:mt-4 font-bold text-white bg-[#B77100] px-4 py-1 sm:px-6 sm:py-2 text-sm">
                  SHOP NOW
                </button>
              </div>
            </div>
          </div>
          {/* -------------section 3----------- */}
          <div className="flex  bg-[#F0E9D2] justify-between mx-16">
            <div
              className="ml-0 sm:ml-12 md:mt-16 lg:mt-28 xl:mt-16 2xl:ml-24  sm:mt-7 mt-0"
              id="sec-3"
            >
              <button className="bg-[#343434] font-bold text-white sm:px-4 lg:px-7 2xl:px-14 xl:py-5 xl:px-10  lg:py-3 lg:text-lg sm:py-1 px-2 py-1">
                THIS WEEK’S OFFER
              </button>
              <p
                className="sm:text-4xl text-3xl md:text-5xl 2xl:text-6xl xl:py-7 xl:leading-snug sm:my-1 my-4 leading-8 sm:leading-8 md:leading-"
                id="www"
              >
                Add a touch of sophistication to your
                <br /> beach outfit.
              </p>
              <button className="text-base sm:text-sm md:text-base font-bold underline underline-offset-8">
                BUY NOW
              </button>
            </div>
            <div className="w-96 ">
              <Image src={Image14} />
            </div>
          </div>
          {/* --------section 4---------- */}

          <div className="mx-16 my-14 ">
            <p className="font-normal text-2xl mb-3 ">POPULAR PRODUCTS</p>
            <div className="md:flex md:flex-row  sm:flex-col md:space-x-4  text-[#797979]">
              <div>
                <Image className="sm:w-full lg:w-96 " src={Image15} />
                <div className="flex justify-between  my-3">
                  <div>
                    <p>Silver Chain Pendant</p>
                    <p>$40</p>
                  </div>
                  <div className="bg-[#FFD58F59] pt-3  px-auto">
                    <Image src={Lock} className="  " />
                  </div>
                </div>
              </div>
              <div>
                <Image className="sm:w-full lg:w-96" src={Image16} />
                <div className="flex justify-between my-3">
                  <div>
                    <p>Silver Chain Pendant</p>
                    <p>$40</p>
                  </div>
                  <div className="bg-[#FFD58F59] pt-3  px-auto">
                    <Image src={Lock} className="" />
                  </div>
                </div>
              </div>
              <div>
                <Image className="sm:w-full lg:w-96" src={Image17} />
                <div className="flex justify-between my-3">
                  <div>
                    <p>Silver Chain Pendant</p>
                    <p>$40</p>
                  </div>
                  <div className="bg-[#FFD58F59] pt-3  px-auto">
                    <Image src={Lock} className="" />
                  </div>
                </div>
              </div>
              <div>
                <Image className="sm:w-full lg:w-96 " src={Image18} />
                <div className="flex justify-between my-3">
                  <div>
                    <p>Silver Chain Pendant</p>
                    <p>$40</p>
                  </div>
                  <div className="bg-[#FFD58F59] pt-3  px-auto">
                    <Image src={Lock} className="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ------------section 5----------- */}
          <div className="border  mx-16 bg-white">
            <div className="md:flex lg:my-20 lg:mx-20 md:justify-between my-12 space-y-2 ">
              <div className="lg:text-3xl sm:text-xl">ABOUT US</div>
              <div className="lg:text-sm text-xs md:w-80   text-[#797979]">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going thro git remote -vugh the cites of the
                word in classical literature, discovered the undoubtable source.
              </div>
              <div className="lg:text-sm text-xs md:w-72 text-[#797979]">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, lookee
                Latin words, consectetur, from a Lorem Ipsum passage, and going
                through the cites of the word in classical literature,
                discovered the undoubtable source.
              </div>
            </div>
          </div>

          {/* -------------section 6--------- */}
          <div className="mx-16 my-16">
            <div className="flex justify-between mb-5 ">
              <p className="text-3xl">CATALOG</p>
              <p className="underline underline-offset-8 text-base font-bold">
                BROWSE OUR CATALOG
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-4">
              {/* -- First Row -- */}
              <div className="" id="img22">
                <div className="text-center mt-72">
                  <div className="text-gray-300">EARRINGS</div>
                  <button className="bg-[#FFF] text-sm font-bold px-4 py-2 m-4">
                    SHOP NOW
                  </button>
                </div>
              </div>
              <div className="w-full h-auto" id="img23">
                <div className="text-center mt-72">
                  <div className="text-gray-300">RING</div>
                  <button className="bg-[#FFF] text-sm font-bold px-4 py-2 m-4">
                    SHOP NOW
                  </button>
                </div>
              </div>
              <div className="w-full h-auto" id="img24">
                <div className="text-center mt-72">
                  <div className="text-gray-300">BRACELATE</div>
                  <button className="bg-[#FFF] text-sm font-bold px-4 py-2 m-4">
                    SHOP NOW
                  </button>
                </div>
              </div>
              <div className="w-full h-auto" id="img25">
                <div className="text-center mt-72">
                  <div className="text-gray-300">NACKLACE</div>
                  <button className="bg-[#FFF] text-sm font-bold px-4 py-2 m-4">
                    SHOP NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* ------section 7-------- */}
          <div className="mx-16 my-14 ">
            <p className="font-normal text-2xl mb-3 ">NEW ARRIVAL</p>
            <div className="md:flex md:flex-row  sm:flex-col md:space-x-4  text-[#797979]">
              <div>
                <Image className="sm:w-full lg:w-96 " src={Image34} />
                <div className="flex justify-between  my-3">
                  <div>
                    <p>Silver Chain Pendant</p>
                    <p>$40</p>
                  </div>
                  <div className="bg-[#FFD58F59] pt-3  px-auto">
                    <Image src={Lock} className="  " />
                  </div>
                </div>
              </div>
              <div>
                <Image className="sm:w-full lg:w-96" src={Image33} />
                <div className="flex justify-between my-3">
                  <div>
                    <p>Silver Chain Pendant</p>
                    <p>$40</p>
                  </div>
                  <div className="bg-[#FFD58F59] pt-3  px-auto">
                    <Image src={Lock} className="" />
                  </div>
                </div>
              </div>
              <div>
                <Image className="sm:w-full lg:w-96" src={Image32} />
                <div className="flex justify-between my-3">
                  <div>
                    <p>Silver Chain Pendant</p>
                    <p>$40</p>
                  </div>
                  <div className="bg-[#FFD58F59] pt-3  px-auto">
                    <Image src={Lock} className="" />
                  </div>
                </div>
              </div>
              <div>
                <Image className="sm:w-full lg:w-96 " src={image31} />
                <div className="flex justify-between my-3">
                  <div>
                    <p>Silver Chain Pendant</p>
                    <p>$40</p>
                  </div>
                  <div className="bg-[#FFD58F59] pt-3  px-auto">
                    <Image src={Lock} className="" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* --------section 8---------- */}
          <div className="border  bg-white mx-16">
            <div className="xl:mx-24 lg:mx-14 mx-4 my-20">
              <div className="font-medium lg:text-3xl text-2xl mb-8">
                REAL STORIES FROM OUR USERS
              </div>
              <div className="lg:flex lg:flex-row   ">
                <div className="w-3/4 space-y-2">
                  <div className="bg-[#FFFCF2] shadow-md 2xl:p-2 lg:p-3  ">
                    <div className="flex items-center">
                      <Image src={Elipse} />
                      <div className="ml-5">
                        <p className="font-semibold">Steve Martin</p>
                        <p className="opacity-50">Lorem ipsum dolor vasum</p>
                      </div>
                    </div>
                  </div>

                  <div className="shadow-md 2xl:p-2 lg:p-3  ">
                    <div className="flex items-center">
                      <Image src={Elipse} />
                      <div className="ml-5">
                        <p className="font-semibold">Steve Martin</p>
                        <p className="opacity-50">Lorem ipsum dolor vasum</p>
                      </div>
                    </div>
                  </div>

                  <div className="shadow-md 2xl:p-2 lg:p-3  ">
                    <div className="flex items-center">
                      <Image src={Elipse} />
                      <div className="ml-5">
                        <p className="font-semibold">Steve Martin</p>
                        <p className="opacity-50">Lorem ipsum dolor vasum</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:w-3/4 w-full lg:ml-24 mt-3 lg:mt-0">
                  <p className="font-medium">Awesome Products</p>
                  <Image src={star} />
                  <p className="mb-1 mt-4 opacity-50 lg:text-base">
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old. Richard
                    McClintock, a Latin professor at Hampden-Sydney College in
                    Virginia, looked up one of the more obscure Latin words,
                    consectetur, from a Lorem Ipsum passage, and going through
                    the cites of the word in classical literature, discovered
                    the undoubtable source.
                  </p>

                  <p className="opacity-50 lg:text-base">
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old. Richard
                    McClintock, a Latin professor at Hampden-Sydney College in
                    Virginia, looked up one of the more obscure Latin words,
                    consectetur, from a Lorem Ipsum passage, and going through
                    the cites of the word in classical literature, discovered
                    the undoubtable source.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* -----------section 9------- */}
          <div className="mx-16 my-20 ">
            <div className="text-2xl mb-4">STAY CONNECTED</div>

            <div className="grid lg:grid-cols-4 grid-cols-2 gap-4 ">
              {/* <!-- First Row --> */}
              <div>
                <Image src={Image35} alt="Image 1" className="w-full h-auto" />
              </div>
              <div>
                <Image src={Image36} alt="Image 2" className="w-full h-auto" />
              </div>

              {/* <!-- Second Row --> */}
              <div>
                <Image src={Image37} alt="Image 3" className="w-full h-auto" />
              </div>
              <div>
                <Image src={Image38} alt="Image 4" className="w-full h-auto" />
              </div>
              <div>
                <Image src={Image39} alt="Image 1" className="w-full h-auto" />
              </div>
              <div>
                <Image src={Image40} alt="Image 2" className="w-full h-auto" />
              </div>

              {/* <!-- Second Row --> */}
              <div>
                <Image src={Image41} alt="Image 3" className="w-full h-auto" />
              </div>
              <div>
                <Image src={Image42} alt="Image 4" className="w-full h-auto" />
              </div>
            </div>
          </div>
          {/* ----------section 10-------- */}
          <div className="flex flex-row space-x-2 items-center justify-center mb-4">
            <Image src={Leaf} className="w-7" />
            <p className="text-amber-800 text-4xl" id="www">
              Tropical Exotics
            </p>
          </div>
          {/* --fggg? */}
          {/* ----------section 11----- FOOTER---------*/}

          <footer className=" md:mx-24">
            <div className="">
              <div className="grid grid-cols-2 gap-10 px-4 py-6 lg:py-8 md:grid-cols-4">
                <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-white">
                    Quick Links
                  </h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                    <li className="mb-4">
                      <Link href="#" className=" hover:underline">
                        Home
                      </Link>
                    </li>
                    <li className="mb-4">
                      <Link href="#" className="hover:underline">
                        Nacklaces
                      </Link>
                    </li>
                    <li className="mb-4">
                      <Link href="#" className="hover:underline">
                        Bracelets
                      </Link>
                    </li>
                    <li className="mb-4">
                      <Link href="#" className="hover:underline">
                        Rings
                      </Link>
                    </li>
                    <li className="mb-4">
                      <Link href="#" className="hover:underline">
                        Earrings
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-white">
                    Other Links
                  </h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                    <li className="mb-4">
                      <Link href="#" className="hover:underline">
                        Track Order
                      </Link>
                    </li>
                    <li className="mb-4">
                      <Link href="#" className="hover:underline">
                        Shipping Policy
                      </Link>
                    </li>
                    <li className="mb-4">
                      <Link href="#" className="hover:underline">
                        Refunds &amp; Return Policy
                      </Link>
                    </li>
                    <li className="mb-4">
                      <Link href="#" className="hover:underline">
                        Privacy Policy
                      </Link>
                    </li>
                    <li className="mb-4">
                      <Link href="#" className="hover:underline">
                        FAQ's
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-white">
                    Contact Us
                  </h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                    <div className="flex items-start">
                      <Image src={post} />
                      <li className="mb-4 ml-2">
                        <Link href="mailto:info@tropicalexo.com" className="hover:underline break-all">
                          info@tropicalexo.com
                        </Link>
                      </li>
                    </div>
                    <div className="flex items-start">
                      <Image src={tele} />
                      <li className="mb-4 ml-2">
                        <Link href="tel:+01 123 456 7890" className="hover:underline">
                          +01 123 456 7890
                        </Link>
                      </li>
                    </div>
                    <div className="flex items-start">
                      <Image src={location} />
                      <li className="mb-4 ml-2">
                        <Link href="https://www.google.com/maps/place/ControlF5+Website+Design+%26+Shopify+Ecommerce+Solutions/@22.680614,75.8183355,17z/data=!4m14!1m7!3m6!1s0x3962fc3b6d616681:0x8e398fd9971c46b8!2sControlF5+Website+Design+%26+Shopify+Ecommerce+Solutions!8m2!3d22.680614!4d75.8209104!16s%2Fg%2F1tdf9hwh!3m5!1s0x3962fc3b6d616681:0x8e398fd9971c46b8!8m2!3d22.680614!4d75.8209104!16s%2Fg%2F1tdf9hwh?entry=ttu" className="hover:underline">
                          21 lorem ipsum,31 lorem ipsum 222 dolor ipsum
                        </Link>
                      </li>
                    </div>
                    <div className="flex gap-2">
                      <Link href="https://www.facebook.com"><Image src={face} /></Link>
                      <Link href="https://www.instagram.com"><Image src={insta} /></Link>
                      <Link href="https://twitter.com"><Image src={twit} /></Link>
                    </div>
                  </ul>
                </div>
                <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-white">
                    Subscribe for Newsletters
                  </h2>
                  <input
                    className="border border-gray-400 w-full py-1 bg-[#FFFCF2] "
                    type="email"
                    placeholder="Enter your email"
                  />
                  <button
                    type="submit"
                    className="bg-[#FCF2D8] w-full py-1 my-3 font-bold"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
              <hr />
              <div className=" py-6 md:flex md:items-center text-center md:justify-between">
                <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center ">
                  © 2023{" "}
                  <Link href="https://tropicalexotics.com/">Tropical Exotics | </Link>
                  All Rights Reserved.
                </span>
                <div className="flex mt-4 space-x-5 sm:justify-center justify-center md:mt-0">
                  <Image src={visa} />
                </div>
              </div>
            </div>
          </footer>
        </div>
      </section>
    </>
  );
}
