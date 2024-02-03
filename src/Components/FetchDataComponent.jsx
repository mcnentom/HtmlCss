import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const FetchDataComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        const responseData = await response.json();
        const myData = responseData.products;
        setData(myData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {Array.isArray(data) && data.map((item) => (
        <div key={item.id} id={item.id}>
          <Link to={`/item/${item.id}`}>
            <h2>{item.name}</h2>
            <img src={item.images[0]} alt="item-image" />
            <p>$ {item.price}</p>
            <p>{item.title}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default FetchDataComponent;
