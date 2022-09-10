import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { cartReducer } from "../components/reducers/cartReducer";
import { API_URL } from "../constants/constants";

const CartContext = createContext();

const Context = ({ children }) => {
  const [products, setProducts] = useState([]);

  const getProductsData = async () => {
    await fetch(`${API_URL}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };

  useEffect(() => {
    getProductsData();
  }, []);

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  console.log(state.products);

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
