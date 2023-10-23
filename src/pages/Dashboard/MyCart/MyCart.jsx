import { Helmet } from "react-helmet-async";
import useCart from "../../../hooks/useCart";


const MyCart = () => {
  const [cart] = useCart()
  const total = cart.reduce((sum, item) => item.price + sum, 0)
  return (
    <div>
      <Helmet>
        <title>bistroo:my-cart</title>
      </Helmet>
      <div className="text-center">
        <h1> my total cart = {cart.length}</h1>
        <h2> total price is {total}</h2>
      </div>

    </div>
  );
};

export default MyCart;