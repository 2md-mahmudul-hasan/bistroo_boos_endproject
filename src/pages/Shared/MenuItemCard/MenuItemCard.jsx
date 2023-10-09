import React from 'react';

const MenuItemCard = ({ item }) => {
  const { id, name, recipe, image, category, price } = item;
  return (
    <div className='flex gap-7 mt-4'>
      <img style={{ borderRadius: "50px 50px 0px 50px", width: "100px" }} src={image} alt='image'></img>
      <div>
        <h3>{name}</h3>
        <p>{category}</p>
      </div>
      <p>{price}</p>
      {/* <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <h5 className="card-title">{recipe}</h5>
          <p>{category}</p>
          <p>{price}</p>
          <p>{id}</p>
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default MenuItemCard;