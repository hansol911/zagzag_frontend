import React from 'react';
import './Menu.scss';

const Menu = ({ menu: { menu } }) => {
  return <div className="menu">{menu}</div>;
};

export default Menu;
