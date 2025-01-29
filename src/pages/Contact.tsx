import{ useRef, useState } from 'react';

import { MapPin, Phone, Mail, Clock, Facebook, Instagram,CheckCircle } from 'lucide-react';
import {ToastContainer } from 'react-toastify';
import { Dialog } from '@mui/material';
import last from '../../public/images/last.png'
import emailjs from "@emailjs/browser";
import { motion, useScroll, useTransform, } from "framer-motion";

// import fam from '../../public/images/fam.jpg'
import fam1 from '../../public/images/fam1.jpg'
import fam2 from '../../public/images/fam2.jpg'
import fam4 from '../../public/images/fam4.jpg'
import fam5 from '../../public/images/fam5.jpg'

// import fam6 from '../../public/images/fam6.jpg'
// import fam3 from '../../public/images/fam3.jpg'
import fam7 from '../../public/images/fam7.jpg'


// const teamContacts = [
//   {
//     name: "Customer Support Team",
//     role: "24/7 Support",
//     image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
//     contact: "+1 (555) 123-4567",
//     email: "support@freshmart.com"
//   },
//   {
//     name: "Business Development",
//     role: "Partnerships",
//     image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80",
//     contact: "+1 (555) 234-5678",
//     email: "partnerships@freshmart.com"
//   },
//   {
//     name: "Media Relations",
//     role: "Press Inquiries",
//     image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80",
//     contact: "+1 (555) 345-6789",
//     email: "press@freshmart.com"
//   },
//   {
//     name: "Careers Team",
//     role: "Job Opportunities",
//     image: "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?auto=format&fit=crop&w=800&q=80",
//     contact: "+1 (555) 456-7890",
//     email: "careers@freshmart.com"
//   },
//   {
//     name: "Technical Support",
//     role: "Online Shopping Assistance",
//     image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80",
//     contact: "+1 (555) 567-8901",
//     email: "tech.support@freshmart.com"
//   }
// ];


const teamMembers = [
  {
    name: "A.P.S. Mohan | விவசாயி",
    role: "Founder & CEO",
    image: fam2,
    contact: "8870239638"
  },
  {
    name: "M. Poonkodi | விவசாயி",
    role: "Founder & CEO",
    image: fam7,
    contact: "8870239638"
  },
  {
    name: "S.M. Parthiban | B.COM(CA)",
    role: "CTO",
    image: fam1,
    contact: "7094582643"
  },
  {
    name: "S.M. Arunpandi | B.E | IT( Web Developer )",
    role: "HFP",
    image: fam5,
    contact: "6374360962"
  },
  {
    name: "S.M. Udaya | விவசாயி",
    role: "HFP",
    image: fam4,
    contact: "9345412316"
  },

];

// const handleResponse= (e:any)=>{

//   e.preventDefault();
//        toast.success('Message sent successfully!');
// }
const Contact = () => {
  // toast.success('hank')
  const [open, setOpen] = useState(false)
  const [name, setName] = useState('')
  // const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleResponse = (e: any) => {
    e.preventDefault();
    if(!name){
      return alert('all Field are required')
    }
   
    setOpen(true);
    // setTimeout(() => setOpen(false), 3000); 
    const templateParams = {
      user_name: name,
      // user_email: email,
      user_message: message,
      to_email: "stantleyjoes@gmail.com",
    }
    console.log(templateParams)
    emailjs
      .send(
        "service_6emb3fj",
        //   "service_6emb3fj",
        "template_qu4tvfe",
        //   "template_doqcpuk",
        templateParams,
        // "iAqS2WsP5gyQhkNg2"
        "iAqS2WsP5gyQhkNg2"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          // alert("Your response has been sent!");
        },
        (err) => {
          console.error("FAILED...", err);
          alert("Failed to send your response. Please try again.");
        }
      );

  };
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0,0.4], ["0px", "0px"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white py-12">
      <ToastContainer />
      <Dialog open={open} onClose={() => setOpen(false)} maxWidth="xs">
        <div className="p-6 text-center">
          <CheckCircle className="text-green-500 mx-auto" size={48} />
          <img className=' pt-5 ' src={last} alt="lastImage" />
          {/* <h3 className="text-lg font-semibold mt-4 text-gray-900">Message Sent Successfully!</h3> */}
          <p style={{ fontSize: "13px" }} className="text-gray-600 mt-4 font-10">We will get back to you shortly.</p>
        </div>
      </Dialog>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 mt-40"
        >
          <h1 style={{ marginTop: -10 }} className="text-4xl md:text-4xl font-bold text-gray-900 mb-6 ">Get in Touch</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're here to help! Reach out to our dedicated team for any questions or assistance you need.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input
                    // value={email}
                    // onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input

                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                ></textarea>
              </div>
              <button
                onClick={handleResponse}
                type="submit"
                className="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </motion.div>


          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="text-primary-600 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-900">Visit Us</h3>
                    <p className="text-gray-600">
                      2/95 Poondi  <br />
                      Main road<br />
                      kodaikanal
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="text-primary-600 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-900">Call Us</h3>
                    <p className="text-gray-600">7094582643</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="text-primary-600 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-900">Email Us</h3>
                    <p className="text-gray-600">parthiban7449@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="text-primary-600 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-900">Opening Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 8:00 AM - 9:30 PM<br />
                      Saturday - Sunday: 7:00 AM - 10:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Connect With Us</h2>
              <div className="flex space-x-4">
                <a target='_blank' href="https://www.facebook.com/share/18dQjBVYBz/" className="text-gray-600 hover:text-primary-600 transition-colors">
                  <Facebook size={24} />
                </a>
                {/* <a href="#" className="text-gray-600 hover:text-primary-600 transition-colors">
                  <Twitter size={24} />
                </a> */}
                <a target='_blank' href="https://www.instagram.com/__fx__psycho__?igsh=MXdvdG1zdzdkbzRmOA==" className="text-gray-600 hover:text-primary-600 transition-colors">
                  <Instagram size={24} />
                </a>
                {/* <a href="#" className="text-gray-600 hover:text-primary-600 transition-colors">
                  <Linkedin size={24} />
                </a> */}
              </div>
            </div>
          </motion.div>
        </div>


        <section>
          <motion.h3
                ref={ref}
                style={{ opacity, x,textAlign: "center", fontWeight: "bold", marginBottom: "2rem",fontSize:'1.7rem' }}
                 // variant="h4"
                 // gutterBottom
                 // style={{ textAlign: "center", fontWeight: "bold", marginBottom: "2rem" }}
               >
                 Meet Our Family
               </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => {
              const ref = useRef(null);
              const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
              const x = useTransform(scrollYProgress, [0, 0.3], ["-50px", "0px"]);
              const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
              return (
                <motion.div
                  key={index}
                  style={{ opacity, x }}
                  ref={ref}
                  className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-auto object-cover rounded-lg md:h-60 lg:h-72"
                  />

                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-primary-600 font-medium mb-3">{member.role}</p>
                    <div className="space-y-2">
                      <p className="text-gray-600 text-sm flex items-center">
                        <Phone size={16} className="mr-2" /> {member.contact}
                      </p>
                      <p className="text-gray-600 text-sm flex items-center">
                        {/* <Mail size={16} className="mr-2" /> {member?.email} */}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )

            })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;