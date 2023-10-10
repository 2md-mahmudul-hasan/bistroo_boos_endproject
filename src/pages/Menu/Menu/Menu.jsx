import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuBanner from '../../../assets/menu/banner3.jpg'

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Bistroo-boss||menu</title>
      </Helmet>
      <Cover img={menuBanner} title="Our menu"></Cover>
    </div>
  );
};

export default Menu;