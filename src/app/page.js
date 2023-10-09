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


export default function Home() {
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
            <div className="mx-16 flex flex-row my-8 justify-between">
              <div className="text-gray-500 text-sm " id="gg">
                <ul className="flex flex-row space-x-12 ">
                  <li id="na">Nacklaces</li>
                  <li>Bracelets</li>
                  <li>Rings</li>
                  <li>Earrings</li>
                </ul>
              </div>
              <div className="flex flex-row space-x-2 items-center">
                <Image src={Leaf} className="w-6" />
                <p className="text-amber-800 text-2xl">Tropical Exotics</p>
              </div>
              <div className="text-gray-500 text-sm">
                <ul className="flex flex-row space-x-12">
                  <li>USA</li>
                  <li>Sign in/Register</li>
                  <li>Cart(0)</li>
                  <li>Search</li>
                </ul>
              </div>
            </div>
            <div className="text-lg mx-16 mt-72">SUBTLE & WEARABLE SOLID GOLD</div>
            <div className="text-6xl mx-16 my-5 mb-7" id="www">
              Understated Luxury for your <br /><span className="text-[#B77100]"> Distinct</span> Nature
            </div>
            <div className="text-base font-bold mx-16 underline underline-offset-8">
              SHOP OUR BEST SELLER
            </div>
          </div>
          {/* -----------section 2--------- */}

          <div className="flex mx-16 my-14">
            <div id="img11">
              <Image src={Image11} />
            </div>
            <Image src={Image12} className="absolute w-36 mt-44 " id="nack" />
            <div className="" id="sec-2-r">
              <div className="mt-28 ml-36">
                <p className="text-6xl" id="www">Make a Statement</p>
                <p className="text-lg my-3">
                  GREAT ACCESSORY FOR A <span className="text-[#B77100]">BEACH</span> OUTFIT
                </p>
                <button className="mt-4 text-white bg-[#B77100] px-6 py-2 text-sm">
                  SHOP NOW
                </button>
              </div>
            </div>
          </div>
          {/* -------------section 3----------- */}
          <div className="flex  bg-[#F0E9D2] justify-between mx-16">
            <div className="ml-24 mt-16">
              <button className="bg-[#343434] font-bold text-white px-7 py-2 ">
                THIS WEEK’S OFFER
              </button>
              <p className="text-4xl  my-6 leading-relaxed" id="www">
                Add a touch of sophistication to your
                <br /> beach outfit.
              </p>
              <button className="text-base underline underline-offset-8">
                BUY NOW
              </button>
            </div>
            <div className="w-96">
              <Image src={Image14} />
            </div>
          </div>
          {/* --------section 4---------- */}

          <div className="mx-16 my-14 ">
            <p className="font-normal text-2xl mb-3 ">POPULAR PRODUCTS</p>
            <div className="flex space-x-6">
              <div>
                <Image className="w-72" src={Image15} />
                <div className="flex justify-between">
                  <div>
                    <p>Silver Chain Pendant</p>
                    <p>$40</p>
                  </div>
                  <div className="bg-[#FFD58F59]">
                    <Image src={Lock} className="mr-3 pt-3" />
                  </div>
                </div>
              </div>
              <div>
                <Image className="w-72" src={Image16} />
                <div className="flex justify-between">
                  <div>
                    <p>Silver Chain Pendant</p>
                    <p>$40</p>
                  </div>
                  <div className="bg-[#FFD58F59]">
                    <Image src={Lock} className="mr-3 pt-3" />
                  </div>
                </div>
              </div>
              <div>
                <Image className="w-72" src={Image17} />
                <div className="flex justify-between">
                  <div>
                    <p>Silver Chain Pendant</p>
                    <p>$40</p>
                  </div>
                  <div className="bg-[#FFD58F59]">
                    <Image src={Lock} className="mr-3 pt-3" />
                  </div>
                </div>
              </div>
              <div>
                <Image className="w-72" src={Image18} />
                <div className="flex justify-between">
                  <div>
                    <p>Silver Chain Pendant</p>
                    <p>$40</p>
                  </div>
                  <div className="bg-[#FFD58F59]">
                    <Image src={Lock} className="mr-3 pt-3" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ------------section 5----------- */}
          <div className="border  mx-16 bg-white">
            <div className="flex my-20 mx-20 justify-between">
              <div className="text-3xl">ABOUT US</div>
              <div className="text-sm w-80  text-[#797979]">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going thro git remote -vugh the cites of the
                word in classical literature, discovered the undoubtable source.
              </div>
              <div className="text-sm w-72 text-[#797979]">
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
            <div className="flex justify-between mb-3 ">
              <p className="text-3xl">CATALOG</p>
              <p className="underline underline-offset-8 text-base font-bold">
                BROWSE OUR CATALOG
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
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
            <p className="font-normal text-2xl mb-3">NEW ARRIVAL</p>
            <div className="flex space-x-6">
              <div>
                <Image className="w-72" src={image31} />
                <div className="flex justify-between">
                  <div>
                    <p>Silver Chain Pendant</p>
                    <p>$40</p>
                  </div>
                  <div className="bg-[#FFD58F59]">
                    <Image src={Lock} className="mr-3 pt-3" />
                  </div>
                </div>
              </div>
              <div>
                <Image className="w-72" src={Image32} />
                <div className="flex justify-between">
                  <div>
                    <p>Silver Chain Pendant</p>
                    <p>$40</p>
                  </div>
                  <div className="bg-[#FFD58F59]">
                    <Image src={Lock} className="mr-3 pt-3" />
                  </div>
                </div>
              </div>
              <div>
                <Image className="w-72" src={Image33} />
                <div className="flex justify-between">
                  <div>
                    <p>Silver Chain Pendant</p>
                    <p>$40</p>
                  </div>
                  <div className="bg-[#FFD58F59]">
                    <Image src={Lock} className="mr-3 pt-3" />
                  </div>
                </div>
              </div>
              <div>
                <Image className="w-72" src={Image34} />
                <div className="flex justify-between">
                  <div>
                    <p>Silver Chain Pendant</p>
                    <p>$40</p>
                  </div>
                  <div className="bg-[#FFD58F59]">
                    <Image src={Lock} className="mr-3 pt-3" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* --------section 8---------- */}
          <div className="border  bg-white mx-16">
            <div className="mx-24 my-20">
              <div className="font-medium text-3xl mb-8">
                REAL STORIES FROM OUR USERS
              </div>
              <div className="flex ">
                <div className="w-3/4">
                  <div className="bg-[#FFFCF2] shadow-md p-4 m-3">
                    <div className="flex items-center">
                      <Image src={Elipse} />
                      <div className="ml-5">
                        <p className="font-semibold">Steve Martin</p>
                        <p className="opacity-50">Lorem ipsum dolor vasum</p>
                      </div>
                    </div>
                  </div>

                  <div className="shadow-md p-4 m-3">
                    <div className="flex items-center">
                      <Image src={Elipse} />
                      <div className="ml-5">
                        <p className="font-semibold">Steve Martin</p>
                        <p className="opacity-50">Lorem ipsum dolor vasum</p>
                      </div>
                    </div>
                  </div>

                  <div className="shadow-md p-4 m-3">
                    <div className="flex items-center">
                      <Image src={Elipse} />
                      <div className="ml-5">
                        <p className="font-semibold">Steve Martin</p>
                        <p className="opacity-50">Lorem ipsum dolor vasum</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-3/4 ml-24">
                  <p className="font-medium">Awesome Products</p>
                  <Image src={star} />
                  <p className="mb-1 mt-4 opacity-50">
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old. Richard
                    McClintock, a Latin professor at Hampden-Sydney College in
                    Virginia, looked up one of the more obscure Latin words,
                    consectetur, from a Lorem Ipsum passage, and going through
                    the cites of the word in classical literature, discovered
                    the undoubtable source.
                  </p>

                  <p className="opacity-50">
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

            <div className="grid grid-cols-4 gap-4 ">
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
          <div className="flex flex-row space-x-2 items-center justify-center mb-4" >
            <Image src={Leaf} className="w-6" />
            <p className="text-amber-800 text-2xl">Tropical Exotics</p>
          </div>
         {/* --fggg? */}
          {/* ----------section 11----- FOOTER---------*/}



          <footer className=" mx-24">
            <div className="">
              <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
                <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-white">
                    Quick Links
                  </h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                    <li className="mb-4">
                      <a href="#" className=" hover:underline">
                        Home
                      </a>
                    </li>
                    <li className="mb-4">
                      <a href="#" className="hover:underline">
                        Nacklaces
                      </a>
                    </li>
                    <li className="mb-4">
                      <a href="#" className="hover:underline">
                        Bracelets
                      </a>
                    </li>
                    <li className="mb-4">
                      <a href="#" className="hover:underline">
                        Rings
                      </a>
                    </li>
                    <li className="mb-4">
                      <a href="#" className="hover:underline">
                        Earrings
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-white">
                    Other Links
                  </h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                    <li className="mb-4">
                      <a href="#" className="hover:underline">
                        Track Order
                      </a>
                    </li>
                    <li className="mb-4">
                      <a href="#" className="hover:underline">
                        Shipping Policy
                      </a>
                    </li>
                    <li className="mb-4">
                      <a href="#" className="hover:underline">
                        Refunds &amp; Return Policy
                      </a>
                    </li>
                    <li className="mb-4">
                      <a href="#" className="hover:underline">
                        Privacy Policy
                      </a>
                    </li>
                    <li className="mb-4">
                      <a href="#" className="hover:underline">
                        FAQ's
                      </a>
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
                      <li className="mb-4 ml-2" >
                        <a href="#" className="hover:underline">
                          info@tropicalexo.com
                        </a>
                      </li>
                    </div>
                    <div className="flex items-start">
                      <Image src={tele} />
                    <li className="mb-4 ml-2">
                      <a href="#" className="hover:underline">
                        +01 123 456 7890
                      </a>
                    </li>
                    </div>
                    <div className="flex items-start">
                      <Image src={location} />
                    <li className="mb-4 ml-2">
                      <a href="#" className="hover:underline">
                        21 lorem ipsum,31 lorem ipsum
                        222 dolor ipsum
                      </a>
                    </li>
                    </div>
                    <div className="flex gap-2">
                      <Image src={face}/>
                      <Image src={insta}/>
                      <Image src={twit}/>
                    </div>
                  </ul>
                </div>
                <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-white">
                    Subscribe for Newsletters
                  </h2>
                 <input className="border border-gray-400 px-4 py-1" type="email" placeholder="Enter your email"/>
                 <button type="submit" className="bg-[#FCF2D8] px-[101px] py-1 my-3 font-bold">Subscribe</button>
                </div>
              </div>
              <hr />
              <div className=" py-6 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
                  © 2023 <a href="https://tropicalexotics.com/">Tropical Exotics™</a>.
                  All Rights Reserved.
                </span>
                <div className="flex mt-4 space-x-5 sm:justify-center md:mt-0">
                 <Image src={visa}/>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </section>
    </>
  );
}
