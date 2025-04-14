import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Shopcontext } from "../context/Shopcontext";
import { assets } from "../assets/frontend_assets/assets";
import Relatedproducts from "../components/Relatedproducts";

const Product = () => {
  const { productid } = useParams();
  const {currency}=useContext(Shopcontext)
  const [productsdata, Setproductsdata] = useState(false);
  const {addtoCart,Cartitems}=useContext(Shopcontext)
  const { products } = useContext(Shopcontext);
  const [image, SetImage] = useState("");
  const [size,Setsize]=useState("")
  const fetchproductsdata = async () => {
    products.map((item) => {
      if (item._id === productid) {
        Setproductsdata(item);
        SetImage(item.image[0]);
      
        return null;
      }
    });
  };  
  useEffect(() => {
    fetchproductsdata();
  }, [productid, products]);
  
  return productsdata ? (
    <div>
      <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
        <div className="flex flex-col md:flex-row gap-12 sm:gap-12 ">
          <div className="flex-1 flex flex-col-reverse gap-3 lg:flex-row">
            <div className="flex md:flex-col overflow-x-auto justify-between sm:justify-normal gap-2 sm:overflow-y-scroll">
              {productsdata.image.map((item, index) => (
                <img
                  src={item}
                  alt="" 
                  key={index}
                  onClick={()=>SetImage(item)}
                  className="w-[24%] sm:w-1/3 sm:mb-3 flex-shrink-0 cursor-pointer"
                ></img>
              ))} 
            </div>
            <div className="w-full sm:w-[80%]">
              <img src={image} alt=""  className="w-full h-auto"/>
            </div>

      </div>
      <div className="flex-1">
        <h1 className="font-medium text-xl ">{productsdata.name}</h1> 
        <div className="flex items-center gap-1 mt-2 "> 
          <img src={assets.star_icon} alt=""  className="w-3 "/>
          <img src={ assets.star_icon} alt="" className="w-3" />
          <img src={ assets.star_icon} alt="" className="w-3" />
          <img src={ assets.star_icon} alt="" className="w-3" />
          <img src={ assets.star_dull_icon} alt="" className="w-3" />
          <p className="pl-2">{122}</p>
         
        </div>
        <p className="mt-5 text-2xl font-medium">{currency}{productsdata.price}</p>
        <p className="mt-5 text-gray-500 md:w-5/5">{productsdata.description}</p>
        <div className="flex flex-col gap-4 my-8">
          <p>select size</p>
          <div className="flex gap-2">

          {
          productsdata.sizes.map((item, index) => (
  <button 
    onClick={() => Setsize(item)} 
    key={index} 
    className={`border py-0.5 px-2 bg-gray-100 ${item === size ? "border-orange-500" : "border-gray-500"}`}
  >
    {item}
  </button>
))}
          </div>
        </div>
        <button onClick={()=>addtoCart(productsdata._id,size)} className=" bg-black active:bg-gray-700 text-white px-8 py-2 rounded-sm">ADDTO CART</button>
        <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1 ">
      <p>100% original product</p>
      <p>Cash on delivery available</p>
     </div>
        <hr className="mt-8 sm:w-full"/>
      </div>
     
     </div>
     <div className="description text-sm mt-5">
      <h3 className="font-bold text-lg ">description</h3>
      <p>An ecommerce website is an online platform that allows businesses to sell products or services directly to customers over the internet.
         It typically features product listings with descriptions and images, 
         a shopping cart system, secure payment processing, and order management capabilities. 
         </p>

     </div>
    
     </div>
     <Relatedproducts category={productsdata.category} subCategory={productsdata.subCategory}/>
    
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
