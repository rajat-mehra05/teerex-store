import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartState } from "../context/Context";

const Cart = () => {
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  const {
    state: { cart },
    dispatch,
  } = CartState();

  //   console.log(cart);

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);

  return (
    <div className="p-10">
      <h1 className="font-semibold text-2xl"> Shopping Cart </h1>
      {cart.length === 0 ? (
        <div className="flex flex-col justify-center items-center py-20 gap-4">
          <h1 className="">You don't have any items in your cart yet</h1>
          <button
            className="bg-black hover:bg-gray-400 p-2 rounded text-white"
            onClick={() => navigate("/")}
          >
            Go back
          </button>
        </div>
      ) : (
        <div>
          <ul className="py-10 flex justify-center flex-col gap-4">
            {cart.map((item, index) => (
              <li key={item.type + index}>
                <div className="shadow-xl p-4 sm:flex sm:justify-between sm:gap-0 gap-4">
                  <div className="flex justify-center sm:flex-none py-4 sm:py-0">
                    <img
                      src={item.imageURL}
                      alt={item.name}
                      width={150}
                      height={150}
                    />
                  </div>
                  <div className="flex justify-between items-center sm:gap-80">
                    <select
                      className="py-2 px-4 bg-black cursor-pointer text-white"
                      id="qty"
                      name="qty"
                      form="qtyForm"
                      onChange={(e) =>
                        dispatch({
                          type: "CHANGE_CART_QUANTITY",
                          payload: {
                            id: item.id,
                            qty: e.target.value,
                          },
                        })
                      }
                    >
                      {[...Array(cart.quantity).keys()].map((item) => (
                        <option key={item + 1}> Qty {item + 1} </option>
                      ))}
                    </select>
                    <button
                      onClick={() =>
                        dispatch({
                          type: "REMOVE_FROM_CART",
                          payload: item,
                        })
                      }
                      className="p-2 bg-black hover:bg-gray-400 text-white rounded"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <h4 className="text-center font-semibold text-xl">
            Cart total: ₹ {total}
          </h4>
        </div>
      )}
    </div>
  );
};

export default Cart;
