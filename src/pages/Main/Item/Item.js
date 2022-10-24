import React from 'react';
import './Item.scss';

const Item = ({ item: { img, company, title, sale, price } }) => {
  return (
    <div className="itemContainer">
      <div className="imageContainer">
        <img className="itemImage" src={img} alt={title} />
      </div>
      <div className="infoContainer">
        <div className="companyContainer">
          <span className="company">{company}</span>
        </div>
        <div className="titleContainer">
          <span className="title">{title}</span>
        </div>
        <div className="priceContainer">
          <span className="sale">{sale} </span>
          <span className="price">{price}</span>
        </div>
      </div>
    </div>
  );
};

export default Item;
