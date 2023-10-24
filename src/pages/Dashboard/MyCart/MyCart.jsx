import { Helmet } from "react-helmet-async";
import useCart from "../../../hooks/useCart";
import { FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2'
const MyCart = () => {
  const [cart] = useCart()
  console.log(cart)
  const total = cart.reduce((sum, item) => item.price + sum, 0)

  const handleDelete = (item) => {
    Swal.fire({
      title: 'Do you want to delete',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Delete',
      denyButtonText: `Don't  Want to delete`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/carts/${item._id}`,{
          method:'DELETE',
          'headers':{
            'content-type':
          }
        })
      } 
    })
  }


  return (
    <div>
      <Helmet>
        <title>bistroo:my-cart</title>
      </Helmet>
      <div className="text-center flex justify-evenly items-center">
        <h1> my total cart = {cart.length}</h1>
        <h2> total price is {total}</h2>
        <button className="btn btn-warning">pay</button>
      </div>

      <div className="">
        <div className="overflow-x-auto">
          <table className="table">

            <thead className="bg-[#112233] h-16 mt-4">
              <tr>
                <th>
                  #
                </th>
                <th>Food</th>
                <th> item name</th>
                <th>price</th>
                <th>action</th>
              </tr>
            </thead>
            <tbody>
              {
                cart.map((row, index) => <tr key={row._id}>
                  <th>
                    {index + 1}
                  </th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={row.image} alt="image" />
                        </div>
                      </div>

                    </div>
                  </td>

                  <td>{row.name}</td>
                  <td>{row.price}</td>
                  <th>
                    <button onClick={() => handleDelete(item)} className="btn btn-danger px-10 py-5 bg-[#cb0505] btn-xs"><FaTrash></FaTrash></button>
                  </th>
                </tr>
                )

              }

            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

export default MyCart;