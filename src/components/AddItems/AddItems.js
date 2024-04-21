import React, {useState, useEffect} from 'react';
function AddItems() {
  const Products = {
   image: "",
   title: "",
   price : "",
   description: "",
 };
 const [productValues, setproductValues] = useState(Products);
 const handleChange = (event) => {
  const { name, value } = event.target;
  setproductValues({ Products, [name]: value });
};

const handleSubmit = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(Products)
    });
    if (response.ok) {
      alert('Product added successfully!');
      setproductValues({
        image: '',
        title: '',
        price: '',
        description: ''
      });
    } else {
      console.error('Failed to add product');
    }
  } catch (error) {
    console.error('Error adding product:', error);
  }
};

  return (
    <div className='pt-24  bg-purple-200 pb-6'>
      
      <div className=' bg-purple-500 p-[5%] rounded-lg w-fit m-auto text-white' >
      <h1 className='text-5xl font-serif font-bold text-center pb-20'>Add New Product Here!</h1>
        <div className='text-2xl mb-9 flex'><p className='w-52'>Id : </p><input className='text-black p-2 h-10 w-96 border-neutral-400 border-spacing-1' type='text'/></div>
        <div className='text-2xl mb-9 flex'><p className='w-52'>Image: </p> <input type='file'/></div>
        <div className='text-2xl mb-9 flex'><p className='w-52'>Title: </p><input className='text-black p-2 h-10 w-96 border-neutral-400 border-spacing-1' type='text'/></div>
        <div className='text-2xl mb-9 flex'><p className='w-52'>Price: </p><input className='text-black p-2 h-10 w-96 border-neutral-400 border-spacing-1' type='text'/></div>
        <div className='text-2xl mb-9 flex'><p className='w-52'>Description: </p><textarea className='text-black p-2 w-96'></textarea></div>
        <button className='bg-gray-700 hover:bg-gray-800 rounded-md h-10 w-32 text-xl' onClick={handleSubmit}>Add Product</button>
        
      </div>
      
    </div>
  )
}

export default AddItems
