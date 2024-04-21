import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Details() {
  const { id } = useParams();

  const [sproduct, setSproduct] = useState({});

  const loadSproductData = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      
    
      
      const data = await response.json();
  
      setSproduct(data);
      
    } catch (error) {
      console.error('Error loading product data:', error);
      
    }
  };
  

  useEffect(() => {
    loadSproductData();
  }, [id]);

  

  return (
    <div className="pt-24">
      <div className="flex">
        <div>
          <img src={sproduct.image} alt={sproduct.title} className="h-96 w-96" />
        </div>
        <div className="mt-28 ml-10 w-[600px]">
          <p className="text-3xl font-bold">{sproduct.title}</p>
          <p className="text-2xl">{sproduct.price}</p>
          <p className="text-xl">{sproduct.description}</p>
        </div>
      </div>
    </div>
  );
}
