import React, { useContext, useEffect, useState } from "react";
import { Shopcontext } from "../context/Shopcontext";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";
import Carttotal from "../components/Carttotal";

const Cart = () => {
  const { products, currency, Cartitems ,updateQuantity} = useContext(Shopcontext);
  const [cartData, setCartdata] = useState([]);

  useEffect(() => {
    const tempdata = [];
    for (const items in Cartitems) {
      for (const item in Cartitems[items]) {
        if (Cartitems[items][item] > 0) {
          tempdata.push({
            _id: items,
            size: item,
            quantity: Cartitems[items][item],
          });
        }
      }
    }
    setCartdata(tempdata);
  }, [Cartitems]);
  return (
    <div className="border-t pt-14">
      <div className="text-2xl mb-3">
        <Title text1={"Your"} text2={"cart"}></Title>
      </div>
      <div>
        {cartData.map((item, index) => {
          const productsData = products.find(
            (product) => product._id == item._id
          );
          return (
            <div
              key={index}
              className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr_0.5fr]
                             sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
            >
              <div className="flex items-start gap-6">
                <img
                  className="w-16 sm:w-20"
                  src={productsData.image[0]}
                  alt=""
                />

                <p className="text-xs sm:text-md font-medium my-2">
                  {productsData.name}
                </p>

                <p className="flex items-center gap-5 my-2">
                  {productsData.price}{currency}
                  
                </p>
                <p className="border py-0.5 px-2 bg-gray-200 my-2">{item.size}</p>
                <input onChange={(e)=>e.target.value==='' || e.target.value ==="0" ? null :updateQuantity(item._id,item.size,Number(e.target.value))} className="border-max-w-10 sm:max-w-20 px-1 sm:px-2 py-1" type="number" min={1} defaultValue={item.quantity} />
                <img onClick={()=>updateQuantity(item._id,item.size,0)} className="w-4 cursor-pointer sm:mt-3"src={assets.bin_icon} alt="" />
              </div>
            </div>
          )
        })}
      </div>
    <div className="flex justify-end my-20">
      <div className="my-20">

      </div>
      <div className="w-full sm:w-[450px]">
        <Carttotal/>
      </div>
    </div>
    
    </div>
  );
};

export default Cart;
