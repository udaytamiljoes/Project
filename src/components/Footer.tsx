import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion"; // Import framer-motion
import { Instagram, Mail, Phone, MapPin } from "lucide-react";
import { useRef } from "react";
// import moment from "moment";

const Footer = () => {

// const start = moment(new Date()).startOf('month').toDate()  
// console.log(start,"new")

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i:any) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };
  const ref = useRef(null);
 // Capture the scroll progress for the target
 const { scrollYProgress } = useScroll({
  target: ref,
  offset: ["start end", "end start"],
});

// Define vertical movement (top-to-bottom)
const y = useTransform(scrollYProgress, [0, 0.4], ["-70px", "0px"]); 
const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]); 

  return (
    <footer
      style={{
        backgroundImage: `url('/images/back.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="text-white"
    >
      <div className="bg-opacity-70">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
            <motion.div ref={ref} style={{opacity,y}} custom={0} variants={fadeInVariants}>
              <img
                style={{ marginTop: "-50px", marginLeft: "-30px" }}
                src="/images/SMP_logo2.png"
                width={200}
                height={100}
                alt=""
              />
              <img
                style={{ marginTop: "0px", marginBottom: "20px" }}
                src="/images/logo.png"
                width={180}
                height={100}
                alt=""
              />
              <p className="text-gray-400">
                Your one-stop shop for fresh, organic, and healthy groceries
              </p>
              <div className="flex space-x-4 mt-4">
                <a
                  target="_blank"
                  href="https://www.instagram.com/ns__u_d_a_y__200/"
                  className="text-blue-400 hover:text-white"
                >
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-green-400 hover:text-white">
                  <Phone size={20} />
                </a>
              </div>
            </motion.div>

           
            <motion.div custom={1} variants={fadeInVariants}>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-gray-400 hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/products" className="text-gray-400 hover:text-white">
                    Products
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-gray-400 hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-400 hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </motion.div>

           
            <motion.div custom={2} variants={fadeInVariants}>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <MapPin size={20} className="text-green-500" />
                  <span className="text-gray-400">
                    2/95 Poondi main road, Kodaikanal
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone size={20} className="text-green-500" />
                  <span className="text-gray-400">88702389638,</span>
                  <span className="text-gray-400">7094582643</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail size={20} className="text-green-500" />
                  <span className="text-gray-400">parthipan7449@gmail.com</span>
                </li>
              </ul>
            </motion.div>
          </div>

         
          <motion.div
        
            // custom={3}
            // variants={fadeInVariants}
            className="border-t border-gray-800 mt-12 pt-8"
          >
            <p className="text-center text-gray-400">
              © 2025 SMP STORE. All rights reserved.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
