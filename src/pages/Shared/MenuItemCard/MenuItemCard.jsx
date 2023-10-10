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

    </div>
  );
};

export default MenuItemCard;