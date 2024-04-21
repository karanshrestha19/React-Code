import React, {useState, useEffect} from 'react';
import scene from '../../assets/images/scene.jpg';
import { Bounce } from 'react-awesome-reveal';
import Modal from 'react-modal';
import { useNavigate } from "react-router-dom";
function Home() {
  const [productData, setProductData] = useState([]);

  const loadProductData = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProductData(data);
    } catch (error) {
      console.error('Error loading product data:', error);
    }
  };

  useEffect(() => {
    loadProductData();
  }, []);

const navigate = useNavigate();

const navigateToPictureDetails = (productId) => {
  navigate(`/details/${productId}`);
  };
    const [modalIsOpen, setIsOpen] = useState(false);
  
    function openModal() {
      setIsOpen(true);
    }
  
    function closeModal() {
      setIsOpen(false);
    }
    const deleteProduct = async (productId) => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${productId}`, {
          method: "DELETE"
        });
        if (response.ok) {
          alert('product deleted successfully')
          loadProductData();
        } else {
          console.error('Failed to delete product');
        }
      } catch (error) {
        console.error('Error deleting product:', error);
      }
    };

  return (
    <><div className="pt-24 max-sm:pt-5 bg-purple-200">
      <div className="px-5"><img src={scene} className='lg:h-[600px] w-full rounded-xl sm:h-[300px]'/></div>
      <div className='py-4'><h1 className="text-center lg:text-5xl md:text-3xl text-2xl text-gray-600 font-bold font-serif">Where Your Destination Arrives At Ease.</h1></div>
      <Bounce>
      <div className='text-center '><button className='bg-gray-700 text-white rounded-md text-center lg:h-12 px-5 lg:text-xl md:h-10 h-8 md:text-lg text-xs hover:bg-gray-900 hover:outline outline-offset-1 hover:outline-white'onClick={openModal}>Book Your Ticket Now</button></div>
      </Bounce>
      <div className='text-center'><h3 className='lg:text-4xl md:text-2xl text:xl text-gray-600 font-serif font-bold mt-[5%]'>Select Your Destination.</h3></div>
      <div className='grid grid-cols-4  px-5 py-10 mt-[2%] gap-3'>
       {productData.map((product, index) => 
       <div key={index}>
      <img src={product.image} className='h-60 w-60' onClick={() => navigateToPictureDetails(product.id)}/>
      <p className='w-52'>{product.title}</p>
      <p>{product.price}</p>
      <button className='bg-red-700 text-white px-5 py-2 rounded-lg hover:outline-double  hover:bg-red-800' onClick={() => deleteProduct(product.id)}>Delete item</button>
       </div>
      )}
      </div>
        {/* <img src={scene} className='md:h-48 md:w-48 h-28 w-28  lg:h-80 lg:w-96  rounded-md'/>
        <img src={scene} className='md:h-48 md:w-48 h-28 w-28  lg:h-80 lg:w-96  rounded-md'/>
        <img src={scene} className='md:h-48 md:w-48 h-28 w-28  lg:h-80 lg:w-96  rounded-md'/>
        <img src={scene} className='md:h-48 md:w-48 h-28 w-28  lg:h-80 lg:w-96  rounded-md'/>      */}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal} 
      >
        <div className='h-96 w-96'>
        <button onClick={closeModal} className='bg-orange-200 w-28 h-10 '>close</button>
        <div>Write your desired destination.</div>
        <form>
          <input className='border-2 rounded-sm'/>
          
        </form>
        </div>
      </Modal>
    </>
    
  )
}

export default Home
