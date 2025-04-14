import { createContext, useEffect, useState } from "react"
import { products } from "../assets/frontend_assets/assets"
import {toast} from "react-toastify";



export const Shopcontext = createContext();
  
const Shopcontextprovider = (props) => {
   

    const deliveryfee = 10;
    const[search,setSearch]=useState(false)
    const [showSearch,Showsetsearch]=useState(false);
    const [Cartitems,setCartitems]=useState({})
    const currency="$";
    
    

   
    const addtoCart=async(itemId,size)=>{

        if(!size){
            toast.error("select product size")
            return;
        }

        let Cartdata=structuredClone(Cartitems)
        if(Cartdata[itemId]){
            if(Cartdata[itemId][size]){
                Cartdata[itemId][size] +=1
            }
            else{
                Cartdata[itemId][size] =1
            }
           
        }
        else{
            Cartdata[itemId]={}
            Cartdata[itemId][size] =1
            
        }
      setCartitems(Cartdata)
        
    }

    const getCartcount=(itemId,size)=>{
        let totalcount=0;
        for ( const items in Cartitems){
            for( const item in Cartitems[items]){
                try{
                    if(Cartitems[items][item]>0) {
                        totalcount += Cartitems[items][item];
                    }
                    } catch(error){
                        console.log(error);

                    }

                }
            }
       return totalcount;
    }
  
    const updateQuantity = async (itemId, size, quantity) => {
        let Cartdata = structuredClone(Cartitems);
        Cartdata[itemId][size] = quantity; // This assumes Cartitems is structured as an object of objects
        setCartitems(Cartdata);
    }

    const getCartamount=() =>{
        let totalamount=0;
        for ( const items in Cartitems){
            let iteminfo=products.find((product)=>product._id===items);
             for (const item in Cartitems[items]){
                try{
                    if(Cartitems[items][item]>0) {
                        totalamount += iteminfo.price*Cartitems[items][item];
                    }
                    } catch(error){
                        console.log(error);

                    }


             }
            
       
            }
       return totalamount;
    }

    const value = {
        products,currency,
        deliveryfee,getCartamount,
        search,setSearch,
        Cartitems,addtoCart,
        showSearch,Showsetsearch,
        getCartcount,updateQuantity
    }

    return (
        <Shopcontext.Provider value={value}>
            {props.children}
        </Shopcontext.Provider>
    )

}

export default Shopcontextprovider