import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuBanner from '../../../assets/menu/banner3.jpg'
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../components/SectionTitle';
import MenuCategory from '../MenuCategroy/MenuCategory';


import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
const Menu = () => {
  const [menu] = useMenu()
  const offere = menu.filter(pItem => pItem.category == 'offered')
  const desserts = menu.filter(pItem => pItem.category == 'dessert')
  const pizza = menu.filter(pItem => pItem.category == 'pizza')
  const salads = menu.filter(pItem => pItem.category == 'salad')
  const soups = menu.filter(pItem => pItem.category == 'soup')


  return (
    <div>
      <Helmet>
        <title>Bistroo-boss||menu</title>
      </Helmet>
      <Cover img={menuBanner} title="Our menu"></Cover>
      <SectionTitle subHeading="---Don't miss---" heading="TODAY'S OFFER"></SectionTitle>
      <MenuCategory items={offere}></MenuCategory>

      <MenuCategory title={"desserts"} coverImg={dessertImg} items={desserts}></MenuCategory>

      <MenuCategory title={"pizza"} coverImg={pizzaImg} items={pizza}></MenuCategory>

      <MenuCategory title={"salads"} coverImg={saladImg} items={salads}></MenuCategory>

      <MenuCategory title={"soups"} coverImg={soupImg} items={soups}></MenuCategory>
    </div>
  );
};

export default Menu