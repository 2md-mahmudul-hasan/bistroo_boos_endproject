import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../hooks/useCart";


const FoodCard = ({ item }) => {
  const [, refetch] = useCart()
  const { id, name, recipe, image, category, price, _id } = item;
  const { user } = useContext(AuthContext)
  console.log(user)
  const navigate = useNavigate()
  const location = useLocation()
  const handleAddToCart = (item) => {
    console.log(item)

    if (user) {

      const addedItem = { addedItemId: _id, name, image, price, email: user.email }
      fetch('http://localhost:5000/carts', {
        method: 'POST',
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(addedItem)

      })
        .then(res => res.json())
        .then(data => {

          if (data.insertedId) {
            refetch()
            Swal.fire({
              title: 'Data added',
              showClass: {
                popup: 'animate__animated animate__fadeInDown'
              },
              hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
              }
            });
          }
        })

    } else {
      Swal.fire({
        title: 'Please log in',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      });
      navigate('/login', { state: { from: location } })
    }
  }

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={image} alt="Shoes" className="rounded-xl" />
          <b>{id}</b>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <h5 className="card-title">{category}</h5>
          <p>{recipe}</p>
          <p>{price}</p>
          <div className="card-actions">
            <button onClick={() => handleAddToCart(item)} className="btn btn-primary"> Add to card </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;