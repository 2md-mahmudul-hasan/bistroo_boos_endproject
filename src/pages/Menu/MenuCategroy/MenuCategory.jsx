
import MenuItemCard from '../../Shared/MenuItemCard/MenuItemCard';
import Cover from '../../Shared/Cover/Cover';
import { Link } from 'react-router-dom';

const MenuCategory = ({ items, title, coverImg }) => {
  return (
    <>   {title && <Cover img={coverImg} title={title}></Cover>}
      <div className='grid gap-4 grid-cols-2 p-2'>

        {items.map(item => <MenuItemCard item={item} key={item._id}></MenuItemCard>)}
      </div>
      <div className='text-center'>
        <Link to={`/order/${title}`}>
          <button className="btn my-12 btn-outline border-0 border-b-4 btn-primary"> Go to order tab </button>
        </Link>
      </div>
    </>
  );
};

export default MenuCategory;