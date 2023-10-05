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
import Lock from './assets/lock.svg';

export default function Home() {
  return (
    <>
      <section>
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
                  <li>Nacklaces</li>
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
            <div className="text-lg mx-16">Subtle & Wearable Solid Gold</div>
            <div className="text-6xl mx-16">
              Understated Luxury for your <br /> Distinct Nature
            </div>
            <div className="text-base mx-16 underline underline-offset-8">
              SHOP OUR BEST SELLER
            </div>
          </div>
          {/* -----------section 2--------- */}

          <div className="flex mx-16 my-14">
            <div>
              <Image src={Image11} />
            </div>
            <Image src={Image12} className="absolute w-36 mt-44 " id="nack" />
            <div className="" id="sec-2-r">
              <div className="mt-28 ml-36">
                <p className="text-6xl">Make a Statement</p>
                <p className="text-lg my-3">
                  Great accessory for a beach outfit
                </p>
                <button className="mt-4 text-white bg-[#B77100] p-2 text-sm">
                  SHOP NOW
                </button>
              </div>
            </div>
          </div>
          {/* -------------section 3----------- */}
          <div className="flex  bg-[#F0E9D2] justify-between mx-16">
            <div className="ml-24 mt-16">
              <button className="bg-[#343434] text-white px-6 py-2 ">
                THIS WEEK’S OFFER
              </button>
              <p className="text-4xl my-6 leading-relaxed">
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
            <p className="font-normal text-2xl ">POPULAR PRODUCTS</p>
            <div className="flex space-x-6">

            <div>
                <Image className="w-72" src={Image15} />
                <div className="flex justify-between">
                  <div>
                    <p>Silver Chain Pendant</p>
                    <p>$40</p>
                  </div>
                  <div className="bg-[#FFD58F59]">
                  <Image src={Lock} className="mr-3 pt-3"/>
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
                  <Image src={Lock} className="mr-3 pt-3"/>
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
                  <Image src={Lock} className="mr-3 pt-3"/>
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
                  <Image src={Lock} className="mr-3 pt-3"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ------------section 5----------- */}
           <div className="border border-black mx-16">
           <div className="flex my-20 mx-20 justify-between">
           <div className="text-3xl">ABOUT US</div>
           <div className="text-sm w-80  text-[#797979]">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</div>
           <div className="text-sm w-72 text-[#797979]">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</div>
           </div>


           </div>

        </div>
      </section>
    </>
  );
}
