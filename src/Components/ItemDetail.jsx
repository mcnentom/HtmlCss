import React, { useEffect, useState } from 'react';
import { useLoaderData } from "react-router-dom";

export const productLoader = async ({ params }) => {
  const response = await fetch(`https://dummyjson.com/products/${params.itemId}`);
  const data = await response.json();
  if (!data) {
    return null;
  }
  return data;
};

const ItemDetail = () => {
  const item = useLoaderData(); 

  return (
    <div id={item.id} key={item.id}>
      <h2>Shopping items</h2>
      <img src={item.images[0]} alt="item-image" />
      <p>{item.price}</p>
      <p>{item.title}</p>
    </div>
  );
};

export default ItemDetail;
