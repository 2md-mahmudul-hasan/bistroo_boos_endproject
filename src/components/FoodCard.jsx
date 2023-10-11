

const FoodCard = ({ item }) => {
  const { id, name, recipe, image, category, price } = item;

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
          <p>I{recipe}</p>
          <p>I{price}</p>
          <div className="card-actions">
            <button className="btn btn-primary"> Add to card </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;