import React from "react";
import { CartState } from "../../../context/Context";

const ProductCard = ({ item }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <div className="p-2 shadow-xl flex flex-col space-y-2">
      <div className="border-b-[2px] border-gray-200">
        <img src={item.imageURL} alt={item.name} width={200} height={200} />
      </div>
      <div className="font-bold">
        <p> {item.name} </p>
      </div>
      <div className="flex justify-between items-center">
        <p> ₹ {item.price} </p>

        {cart.some((p) => p.id === item.id) ? (
          <button
            onClick={() =>
              dispatch({
                type: "REMOVE_FROM_CART",
                payload: item,
              })
            }
            className="rounded-lg p-2 bg-black hover:bg-slate-700 text-white"
          >
            Remove from cart
          </button>
        ) : (
          <button
            onClick={() =>
              dispatch({
                type: "ADD_TO_CART",
                payload: item,
              })
            }
            disabled={!item.quantity}
            className="rounded-lg py-2 px-3 bg-black hover:bg-slate-700 text-white"
          >
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
