import React from 'react';
import MenuItemCard from '../../Shared/MenuItemCard/MenuItemCard';
import Cover from '../../Shared/Cover/Cover';

const MenuCategory = ({ items, title, coverImg }) => {
  return (
    <>   {title && <Cover img={coverImg} title={title}></Cover>}
      <div className='grid gap-4 grid-cols-2'>

        {items.map(item => <MenuItemCard item={item} key={item._id}></MenuItemCard>)}
      </div>
    </>
  );
};

export default MenuCategory;