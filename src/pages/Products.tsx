// import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ShoppingCart, Heart } from 'lucide-react';
import pro from '../../public/images/pro.jpg'
import pro1 from '../../public/images/pro1.jpg'
import pro2 from '../../public/images/pro2.jpg'


import pro3 from '../../public/images/pro3.jpg'

// import pro4 from '../../public/images/pro4.jpg'
import pro5 from '../../public/images/pro5.jpg'
// import pro6 from '../../public/images/pro6.jpg'
import pro7 from '../../public/images/pro7.jpg'
import { useRef } from 'react';





// import pro from '../../public/images/pro.jpg'



const products = [
  {
    id: 1,
    name: "Organic Bananas",
    price: 39,
    image: pro1,
    category: "Fruits"
  },
  {
    id: 2,
    name: "Fresh Juice",
    price: 10,
    image: pro,
    category: "Juice"
  },
  {
    id: 3,
    name: "Organic Cook Item",
    price: 12,
    image: pro7,
    category: "Cooking Item"
  },
  {
    id: 4,
    name: "Fresh Cake",
    price: 40,
    image: pro2,
    category: "Bakery"
  },
  {
    id: 5,
    name: "Organic Snackes",
    price: 20,
    image: pro5,
    category: "Snackes"
  },
  {
    id: 6,
    name: "Fresh Tomatoes",
    price: 50,
    image: pro3,
    category: "Vegetables"
  }
];

const Products = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 0.3], ["80px", "0px"]);
  const y = useTransform(scrollYProgress, [0, 0.3], ["80px", "0px"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  return (
    <div style={{ marginTop: "150px" }} className="py-12 bg-gradient-to-b from-primary-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1  ref={ref}
            style={{ opacity, x, }} className="text-3xl font-bold mb-8 text-center">Our Products</motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ y: -5 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                  <Heart size={20} className="text-gray-600" />
                </button>
              </div>
              <div className="p-6">
                <span className="text-sm text-green-600 font-semibold">{product.category}</span>
                <h3 className="text-xl font-semibold mt-2">{product.name}</h3>
                <div className="flex items-center justify-between mt-4">
                 <div className='flex items-center gap-1'>
                 <span className='text-1xl font-100'>Starting</span>
                 <span className="text-2xl font-bold">  ₹{product.price}</span>
                 </div>
                
                  {/* <button className="bg-green-600 text-white px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-green-700">
                    <ShoppingCart size={20} />
                    <span>Add to Cart</span>
                  </button> */}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;