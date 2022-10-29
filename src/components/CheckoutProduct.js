import Image from "next/image";
import {StarIcon} from "@heroicons/react/solid";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import {addToBasket, removeFromBasket} from "../slices/basketSlice";


function CheckoutProduct({
  id,
  title,
  price,
  rating,
  description,
  category,
  image,
  hasPrime,

}) {
  const dispatch = useDispatch()
  const addItemToBasket = () => {
  const product  = {
    id,
    title,
    price,
    rating,
    description,
    category,
    image,
    hasPrime,
  };
  dispatch(addToBasket(product));
  };

  const removeItemFromBasket = () => {
    dispatch(removeFromBasket({id}))
  };

  return ( 
    <div className="grid md:grid-cols-5  mx-auto">
       <Image src={image} height={200} width={200} objectFit="contain" />
      {/* Middle */}
      <div className="col-span-3 mx-5">
       <p>{title}</p>
       <div className="flex">
        {Array(rating).fill().map((_, i) => (
          <StarIcon key={i} className="h-5 text-yellow-500" />
        ))}
       </div>
       <p className="text-xs my-2 line-clamp-3">{description}</p>
       <Currency quantity={price} currency="KES" />
       {hasPrime  && (
         <div className="flex items-center space-x-2">
           <img
             loading="lazy"
             className ="w-12"
             src="https://links.papareact.com/fdw" 
             alt="" 
           />
          <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
         </div>
       )}
      </div>
      <div className="flex flex-col span-y-5  my-5 justify-self-end">
      <button onClick={() => {addItemToBasket()}} className="button mt-auto">Add to Basket</button>
      <button onClick={() => {removeItemFromBasket()}} className="button mt-auto">Remove From Basket</button>
    </div>
    </div>
  );
}

export default CheckoutProduct;
