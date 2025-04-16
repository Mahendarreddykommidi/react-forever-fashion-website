import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/frontend_assets/assets";
import Title from "../components/Title";
import { Shopcontext } from "../context/Shopcontext";
import Productitem from "../components/Productitem";



const Collection = () => {
  const [showFilter, setShowfilter] = useState(true);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubcategory] = useState([]);
  const [sortype,setSortype]=useState('relavant');
  const { products ,search,setSearch,showSearch} = useContext(Shopcontext);

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(prev => prev.filter(item => item !== e.target.value));
    } else {
      setCategory(prev => [...prev, e.target.value]);
    }
  };  

  const toggleSubcategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubcategory(prev => prev.filter(item => item !== e.target.value));
    } else {
      setSubcategory(prev => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {

    let productsCopy = [...products];

    if (showSearch && search) {
      productsCopy = productsCopy.filter(item => 
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    
    if (category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category));
    }
    
    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory));
    }
    
    setFilterProducts(productsCopy);
  };

  // Initialize filtered products with all products
  useEffect(() => {
    setFilterProducts(products);
  }, []);

  // Apply filters when category or subcategory changes
  useEffect(() => {

    applyFilter();
    

  }, [category,subCategory,search,showSearch]);

  useEffect(()=>{
   console.log(subCategory)
  },[subCategory]);


  const sortproduct=()=>{
    let fpCopy=filterProducts.slice();

    switch(sortype){
      case "low-high":
      setFilterProducts(fpCopy.sort((a,b)=>(a.price -b.price)));
      break;
      case "high-low" :
      setFilterProducts(fpCopy.sort((a,b)=>(b.price -a.price)));
      break;

      default:
      applyFilter();
       break;
    } 
  }

  useEffect(()=>{
    sortproduct()
  },[sortype])
  return (
  <>
  
  
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      <div className="min-w-60">
        <p className="my-2 text-xl items-center cursor-pointer gap-2 flex" onClick={() => setShowfilter(!showFilter)}>
          Filters
          <img 
            src={assets.dropdown_icon} 
            alt="" 
            className={`h-3 sm:hidden ${showFilter ? "" : "rotate-180"}`}
          />
        </p>
        <div
          className={`border border-gray-300 pl-3 py-6 mt-6 ${
            showFilter ? "" : "hidden"
          }`}
        >
          <p className="mb-3 text-sm font-medium">Categories</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2 ">
              <input type="checkbox" className="w-3" value="Men" onChange={toggleCategory} />
              Men
            </p>
            <p className="flex gap-2 ">
              <input type="checkbox" className="w-3" value="Women" onChange={toggleCategory} />
              Women
            </p>
            <p className="flex gap-2 ">
              <input type="checkbox" className="w-3" value="Kids" onChange={toggleCategory} />
              Kids
            </p>
          </div>
          </div>

          <div
          className={`border border-gray-300 pl-3 py-6 mt-6 ${
            showFilter ? "" : "hidden"
          }`}
        >
          
          <p className="mb-3 mt-6 text-sm font-medium">Type</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2 ">
              <input type="checkbox" className="w-3" value="Topwear" onChange={toggleSubcategory} />
              Topwear
            </p>
            <p className="flex gap-2 ">
              <input type="checkbox" className="w-3" value="Bottomwear" onChange={toggleSubcategory} />
              Bottomwear
            </p>
            <p className="flex gap-2 ">
              <input type="checkbox" className="w-3" value="Winterwear" onChange={toggleSubcategory} />
              Winterwear
            </p>
          </div>
        </div>
          </div>
      {/* right side*/}
      <div className="flex-1">
        <div className="flex justify-between items-center text-base sm:text-xl mb-4">
          <Title text1={"ALL"} text2={"COLLECTIONS"}></Title>

          <select className="border-2 border-gray-300 text-sm " onChange={(e)=>setSortype(e.target.value)}>
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Price: Low to High</option>
            <option value="high-low">Price: High to Low</option>
          </select>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
          {filterProducts.map((item,index) => (
            <Productitem
              key={index}
              id={item._id}
              image={item.image}
              price={item.price}
              name={item.name}
            />
          ))}
        </div>
        </div>
        </div>
      </>
  
  );
};

export default Collection;