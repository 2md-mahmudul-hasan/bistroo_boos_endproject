import React, { useState } from 'react';
import orderImg from '../../../assets/shop/banner2.jpg'
import Cover from '../../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
const Order = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const offere = menu.filter(pItem => pItem.category == 'offered')
  const desserts = menu.filter(pItem => pItem.category == 'dessert')
  const pizza = menu.filter(pItem => pItem.category == 'pizza')
  const salads = menu.filter(pItem => pItem.category == 'salad')
  const soups = menu.filter(pItem => pItem.category == 'soup')


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
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;