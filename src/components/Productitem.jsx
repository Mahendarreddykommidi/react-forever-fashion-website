

import { Link } from 'react-router-dom'
import {useContext} from "react";
import {Shopcontext} from "../context/Shopcontext.jsx";



const Productitem = ({ id, name, image, price,}) => {



    return (
        <div>  
        <Link
            to={`/product/${id}`}
            className='group block text-gray-700 hover:text-gray-900 transition-colors'>
        
            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg">
                <img
                    src={Array.isArray(image) ? image[0] : image}
                    alt={name}
                    className="w-full h-full object-cover object-center group-hover:opacity-75 transition-opacity"/>
            </div>
            
            <h3 className='mt-3 mb-1 text-sm font-medium'>{name}</h3>
              <div className="font-semibold text-sm text-gray-500">
                   ${price}
              </div>
          
        </Link>

        </div>

    );
};

export default Productitem
