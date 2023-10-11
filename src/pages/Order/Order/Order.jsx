import React, { useState } from 'react';
import orderImg from '../../../assets/shop/banner2.jpg'
import Cover from '../../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import FoodCard from '../../../components/FoodCard';

import useMenu from '../../../hooks/useMenu';
import OrderTab from '../OrderTab/OrderTab';
import { useParams } from 'react-router-dom';
const Order = () => {

  const [menu] = useMenu()
  const { category } = useParams()
  const categories = ['salad', 'pizza', 'soup', 'desserts', 'drink']
  const initialIndex = categories.indexOf(category)
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const drinks = menu.filter(pItem => pItem.category === 'drinks')
  const dessert = menu.filter(pItem => pItem.category === 'dessert')
  const pizza = menu.filter(pItem => pItem.category === 'pizza')
  const salad = menu.filter(pItem => pItem.category === 'salad')
  const soup = menu.filter(pItem => pItem.category === 'soup')


  return (

    <div>
      <Cover img={orderImg} title={"Our shop"}></Cover>
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)} >
        <TabList>
          <Tab>Salads</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soups</Tab>
          <Tab>Desserts</Tab>
          <Tab>Drinks</Tab>
        </TabList>

        <TabPanel>
          <OrderTab item={salad}></OrderTab>
        </TabPanel>

        <TabPanel>
          <OrderTab item={pizza}></OrderTab>
        </TabPanel>

        <TabPanel>
          <OrderTab item={soup}></OrderTab>
        </TabPanel>

        <TabPanel>
          <OrderTab item={dessert}></OrderTab>
        </TabPanel>

        <TabPanel>
          <OrderTab item={drinks}></OrderTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;