import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { API_URL } from "../constants/constants";
import { cartReducer } from "../reducers/cartReducer";

const CartContext = createContext();

const Context = ({ children }) => {
  const [items, setItems] = useState([]);

  const getProductsData = async () => {
    await fetch(`${API_URL}`)
      .then((res) => res.json())
      .then((data) => setItems(data));
  };

  useEffect(() => {
    getProductsData();
  }, []);

  const [state, dispatch] = useReducer(cartReducer, {
    products: items,
    cart: [],
  });

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default Context;

export const CartState = () => {
  return useContext(CartContext);
};
